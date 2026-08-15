import { MetadataRoute } from 'next'
import { statSync } from 'fs'
import path from 'path'
import { slug } from 'github-slugger'
import { allBlogs, allBookshelves, allHacks, allHealth } from 'contentlayer/generated'
import siteMetadata from '@/data/showcase/siteMetadata'

export const dynamic = 'force-static'

const root = process.cwd()

function toTimestamp(value?: string | Date | null) {
  if (!value) {
    return 0
  }

  const timestamp = new Date(value).getTime()
  return Number.isNaN(timestamp) ? 0 : timestamp
}

function getFileLastModified(relativePath: string) {
  try {
    return statSync(path.join(root, relativePath)).mtime
  } catch {
    return undefined
  }
}

function getContentLastModified(filePath?: string | null) {
  return filePath ? getFileLastModified(path.join('data', filePath)) : undefined
}

function latestDate(...values: Array<string | Date | undefined | null>) {
  const latestTimestamp = Math.max(...values.map(toTimestamp), 0)
  return latestTimestamp > 0 ? new Date(latestTimestamp) : undefined
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl
  const notes = allBlogs.filter((post) => post.draft !== true && post.path.startsWith('notes/'))
  const theses = allBlogs.filter((post) => post.draft !== true && post.path.startsWith('theses/'))
  const bookshelfEntries = allBookshelves.filter(
    (entry) => entry.isPage !== true && entry.draft !== true
  )
  const hacks = allHacks.filter((item) => item.draft !== true)
  const health = allHealth.filter((item) => item.draft !== true)
  const noteLastModified = latestDate(...notes.map((post) => post.date))
  const thesisLastModified = latestDate(...theses.map((post) => post.lastmod || post.date))
  const bookshelfLastModified = latestDate(
    getFileLastModified('app/bookshelf/page.tsx'),
    ...bookshelfEntries.map((entry) => getContentLastModified(entry.filePath))
  )
  const hacksLastModified = latestDate(
    getFileLastModified('app/hacks/page.tsx'),
    ...hacks.map((hack) => getContentLastModified(hack.filePath))
  )
  const healthLastModified = latestDate(
    getFileLastModified('app/health/page.tsx'),
    ...health.map((item) => getContentLastModified(item.filePath))
  )
  const noteTags = [...new Set(notes.flatMap((post) => post.tags || []).map((tag) => slug(tag)))]

  const noteRoutes = notes.map((post) => ({
    url: `${siteUrl}/${post.path}`,
    lastModified: post.date,
  }))

  const thesisRoutes = theses.map((post) => ({
    url: `${siteUrl}/${post.path}`,
    lastModified: post.lastmod || post.date,
  }))

  const notePageRoutes = Array.from(
    { length: Math.ceil(notes.length / 5) },
    (_, index) => index + 1
  ).map((page) => ({
    url: `${siteUrl}/notes/page/${page}`,
    lastModified: noteLastModified,
  }))

  const bookshelfRoutes = bookshelfEntries.map((entry) => ({
    url: `${siteUrl}/bookshelf/${entry.slug}`,
    lastModified: getContentLastModified(entry.filePath),
  }))

  const tagRoutes = noteTags.flatMap((tag) => {
    const taggedPostCount = notes.filter((post) =>
      post.tags?.some((postTag) => slug(postTag) === tag)
    ).length
    const totalPages = Math.max(1, Math.ceil(taggedPostCount / 5))

    return [
      {
        url: `${siteUrl}/tags/${tag}`,
        lastModified: noteLastModified,
      },
      ...Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => ({
        url: `${siteUrl}/tags/${tag}/page/${page}`,
        lastModified: noteLastModified,
      })),
    ]
  })

  const routes = [
    {
      url: siteUrl,
      lastModified: latestDate(
        getFileLastModified('app/page.tsx'),
        getFileLastModified('app/Main.tsx'),
        getFileLastModified('data/showcase/siteMetadata.js'),
        noteLastModified,
        thesisLastModified,
        bookshelfLastModified,
        hacksLastModified,
        healthLastModified
      ),
    },
    {
      url: `${siteUrl}/about`,
      lastModified: latestDate(
        getFileLastModified('app/about/page.tsx'),
        getFileLastModified('data/showcase/authors/default.md')
      ),
    },
    {
      url: `${siteUrl}/notes`,
      lastModified: noteLastModified,
    },
    {
      url: `${siteUrl}/theses`,
      lastModified: thesisLastModified,
    },
    {
      url: `${siteUrl}/hacks`,
      lastModified: hacksLastModified,
    },
    {
      url: `${siteUrl}/bookshelf`,
      lastModified: bookshelfLastModified,
    },
    {
      url: `${siteUrl}/health`,
      lastModified: healthLastModified,
    },
    {
      url: `${siteUrl}/tags`,
      lastModified: noteLastModified,
    },
  ]

  return [
    ...routes,
    ...noteRoutes,
    ...thesisRoutes,
    ...notePageRoutes,
    ...bookshelfRoutes,
    ...tagRoutes,
  ]
}
