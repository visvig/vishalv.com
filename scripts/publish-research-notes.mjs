import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = process.cwd()
const frontiersDir = path.join(root, 'data', 'frontiers')
const sourceDir = path.join(frontiersDir, 'research-notes')
const publishNotesDir = path.join(frontiersDir, 'publish', 'notes')
const publicStaticDir = path.join(root, 'public', 'static')
const sourceTimeZone = 'Asia/Kolkata'
const generatedMarker =
  '{/* Generated from data/frontiers/research-notes. Edit the source file, then run `yarn publish:research-notes`. */}'
const legacyGeneratedMarker =
  '<!-- Generated from data/frontiers/research-notes. Edit the source file, then run `yarn publish:research-notes`. -->'

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true })
}

function formatDateInSourceTimeZone(date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: sourceTimeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date)
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]))
  return `${values.year}-${values.month}-${values.day}`
}

function normalizeDate(value) {
  const raw = String(value ?? '').trim()
  if (!raw) {
    return '1970-01-01'
  }

  const timestamp = Number(raw)
  const date = Number.isFinite(timestamp) && /^\d+$/.test(raw) ? new Date(timestamp) : new Date(raw)

  if (Number.isNaN(date.getTime())) {
    return '1970-01-01'
  }

  return formatDateInSourceTimeZone(date)
}

function pickFirstValue(...values) {
  return values.find((value) => String(value ?? '').trim())
}

function titleFromFilename(filename) {
  return filename
    .replace(/\.mdx?$/, '')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .trim()
}

function extractTitle(body, filename) {
  const match = body.match(/^#\s+(.+)$/m)
  return match?.[1]?.trim() || titleFromFilename(filename)
}

function isHexColor(value) {
  return /^[0-9a-f]{6}$/i.test(value) || /^[0-9a-f]{3}$/i.test(value)
}

function normalizeTag(value) {
  const tag = value
    .replace(/^#/, '')
    .replace(/[.,;:!?]+$/, '')
    .trim()
    .toLowerCase()

  if (!tag || isHexColor(tag) || /^\d+$/.test(tag)) {
    return null
  }

  return tag
}

function extractHashtags(markdown) {
  const tags = []
  const seen = new Set()
  const tagPattern = /(^|[\s([{])#([A-Za-z0-9][A-Za-z0-9_./:-]*(?:\([A-Za-z0-9_.:-]+\))?)/g

  for (const match of markdown.matchAll(tagPattern)) {
    const tag = normalizeTag(match[2])
    if (tag && !seen.has(tag)) {
      seen.add(tag)
      tags.push(tag)
    }
  }

  return tags
}

function isStandaloneTagLine(line) {
  const tokens = line.trim().split(/\s+/).filter(Boolean)
  return tokens.length > 0 && tokens.every((token) => /^#/.test(token) && normalizeTag(token))
}

function stripStandaloneTagLines(markdown) {
  return markdown
    .split('\n')
    .filter((line) => !isStandaloneTagLine(line))
    .join('\n')
}

function removeTitleHeading(markdown) {
  return markdown.replace(/^\s*#\s+.+\n+/, '')
}

function removeTagsSection(markdown) {
  return markdown.replace(/\n?## Tags\s*\n(?:\s*#[^\n]*\n|\s*\n)*\s*(?=## Notes\b)/m, '\n')
}

function normalizeHighlightSpans(markdown) {
  return markdown.replace(
    /<span\s+style="color:\s*(#[0-9a-fA-F]{6});">\s*([\s\S]*?)\s*<\/span>/g,
    (_, _color, content) =>
      content
        .trim()
        .split('\n')
        .map((line) => `> ${line}`)
        .join('\n')
  )
}

function normalizeLegacyAnnotationComments(markdown) {
  return markdown.replace(/^>\s?/gm, '')
}

function normalizeMissingAnnotationPages(markdown) {
  return markdown.replace(
    /\(\[\]\((zotero:\/\/open-pdf\/library\/items\/[^?\s)]+)\?page=&annotation=([^\s)]+)\)\)/g,
    (_, itemUrl, annotationId) => `([1](${itemUrl}?page=1&annotation=${annotationId}))`
  )
}

function escapeMdxControlCharacters(markdown) {
  return markdown.replace(/{/g, '\\{').replace(/}/g, '\\}').replace(/</g, '&lt;')
}

function rewriteAndCopyImages(markdown) {
  return markdown.replace(
    /(\]\()<?(research-notes\/images\/[^)\s>]+)>?((?:\s+"[^"]*")?\))/g,
    (match, prefix, imagePath, suffix) => {
      const sourcePath = path.join(frontiersDir, imagePath)
      const publicPath = path.join(publicStaticDir, imagePath)

      if (!fs.existsSync(sourcePath)) {
        console.warn(`Missing research-note image: ${imagePath}`)
        return match
      }

      ensureDir(path.dirname(publicPath))
      fs.copyFileSync(sourcePath, publicPath)
      return `${prefix}/static/${imagePath}${suffix}`
    }
  )
}

function cleanText(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim()
}

function truncate(value, maxLength = 280) {
  if (value.length <= maxLength) {
    return value
  }

  const shortened = value.slice(0, maxLength + 1)
  return `${shortened.slice(0, shortened.lastIndexOf(' ')).trim()}...`
}

function createSummary(abstract, title) {
  const text = cleanText(abstract)
  if (text && !/^no abstract available\.?$/i.test(text)) {
    return truncate(text)
  }

  return `Research notes on ${title}.`
}

function yamlString(value) {
  return JSON.stringify(value)
}

function serializeFrontmatter(frontmatter) {
  const lines = ['---']
  lines.push(`title: ${yamlString(frontmatter.title)}`)
  lines.push(`date: ${yamlString(frontmatter.date)}`)
  if (frontmatter.tags.length === 0) {
    lines.push('tags: []')
  } else {
    lines.push('tags:')
    for (const tag of frontmatter.tags) {
      lines.push(`  - ${yamlString(tag)}`)
    }
  }

  lines.push(`draft: ${frontmatter.draft}`)
  lines.push(`summary: ${yamlString(frontmatter.summary)}`)
  lines.push('---')
  return lines.join('\n')
}

function transformBody(body) {
  return escapeMdxControlCharacters(
    rewriteAndCopyImages(
      stripStandaloneTagLines(
        normalizeHighlightSpans(
          normalizeMissingAnnotationPages(
            normalizeLegacyAnnotationComments(removeTagsSection(removeTitleHeading(body)))
          )
        )
      )
    )
  ).trim()
}

function publishResearchNote(filename) {
  const sourcePath = path.join(sourceDir, filename)
  const targetPath = path.join(publishNotesDir, filename)
  const source = fs.readFileSync(sourcePath, 'utf8')
  const parsed = matter(source)
  const title = extractTitle(parsed.content, filename)
  const frontmatter = {
    title,
    date: normalizeDate(
      pickFirstValue(
        parsed.data.modified,
        parsed.data.dateModified,
        parsed.data.lastmod,
        parsed.data.published,
        parsed.data.datePublished,
        parsed.data.date
      )
    ),
    tags: extractHashtags(parsed.content),
    draft: false,
    summary: createSummary(parsed.data.abstract, title),
  }
  const transformedBody = transformBody(parsed.content)
  const output = `${serializeFrontmatter(frontmatter)}\n${generatedMarker}\n\n${transformedBody}\n`

  if (fs.existsSync(targetPath)) {
    const existing = fs.readFileSync(targetPath, 'utf8')
    if (!existing.includes(generatedMarker) && !existing.includes(legacyGeneratedMarker)) {
      throw new Error(
        `Refusing to overwrite non-generated note: ${path.relative(root, targetPath)}`
      )
    }
  }

  fs.writeFileSync(targetPath, output)
}

function main() {
  ensureDir(publishNotesDir)

  const files = fs
    .readdirSync(sourceDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && /\.mdx?$/.test(entry.name))
    .map((entry) => entry.name)
    .sort()

  for (const file of files) {
    publishResearchNote(file)
  }

  console.log(`Published ${files.length} research notes to data/frontiers/publish/notes`)
}

main()
