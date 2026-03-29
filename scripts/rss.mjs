import { writeFileSync, mkdirSync } from 'fs'
import path from 'path'
import { slug } from 'github-slugger'
import { escape } from 'pliny/utils/htmlEscaper.js'
import siteMetadata from '../data/siteMetadata.js'
import tagData from '../app/tag-data.json' with { type: 'json' }
import { allBlogs } from '../.contentlayer/generated/index.mjs'
import { sortPosts } from 'pliny/utils/contentlayer.js'

const outputFolder = process.env.EXPORT ? 'out' : 'public'
const toAbsoluteUrl = (config, relativePath = '') =>
  relativePath ? `${config.siteUrl}/${relativePath}` : config.siteUrl

const generateRssItem = (config, post) => `
  <item>
    <guid>${toAbsoluteUrl(config, post.path)}</guid>
    <title>${escape(post.title)}</title>
    <link>${toAbsoluteUrl(config, post.path)}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${config.email} (${config.author})</author>
    ${
      post.path.startsWith('notes/') && post.tags
        ? post.tags.map((t) => `<category>${t}</category>`).join('')
        : ''
    }
  </item>
`

const generateRss = (config, posts, page = 'feed.xml', channelPath = '') => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(config.title)}</title>
      <link>${toAbsoluteUrl(config, channelPath)}</link>
      <description>${escape(config.description)}</description>
      <language>${config.language}</language>
      <managingEditor>${config.email} (${config.author})</managingEditor>
      <webMaster>${config.email} (${config.author})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${toAbsoluteUrl(config, page)}" rel="self" type="application/rss+xml"/>
      ${posts.map((post) => generateRssItem(config, post)).join('')}
    </channel>
  </rss>
`

async function generateRSS(config, posts, page = 'feed.xml', channelPath = '') {
  const publishPosts = posts.filter((post) => post.draft !== true)
  // RSS for published writing.
  if (publishPosts.length > 0) {
    const rss = generateRss(config, sortPosts(publishPosts), page, channelPath)
    writeFileSync(`./${outputFolder}/${page}`, rss)
  }
}

const rss = () => {
  const publishedWriting = allBlogs.filter((post) => post.draft !== true)
  const publishedNotes = publishedWriting.filter((post) => post.path.startsWith('notes/'))

  generateRSS(siteMetadata, publishedWriting)

  for (const tag of Object.keys(tagData)) {
    const filteredPosts = publishedNotes.filter((post) => post.tags.map((t) => slug(t)).includes(tag))
    if (!filteredPosts.length) {
      continue
    }
    const rss = generateRss(
      siteMetadata,
      sortPosts(filteredPosts),
      `tags/${tag}/feed.xml`,
      `tags/${tag}`
    )
    const rssPath = path.join(outputFolder, 'tags', tag)
    mkdirSync(rssPath, { recursive: true })
    writeFileSync(path.join(rssPath, 'feed.xml'), rss)
  }

  console.log('RSS feed generated...')
}
export default rss
