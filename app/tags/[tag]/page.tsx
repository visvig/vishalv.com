import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/showcase/siteMetadata'
import ListLayout from '@/layouts/ListLayoutWithTags'
import tagData from 'app/tag-data.json'
import tagDisplayData from 'app/tag-display-data.json'
import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import { notFound, permanentRedirect } from 'next/navigation'
import { getPublishedWritingPosts } from 'app/writings'

const POSTS_PER_PAGE = 5
const tagCounts = tagData as Record<string, number>
const tagLabels = tagDisplayData as Record<string, string>
const tagKeys = Object.keys(tagCounts)

function getCanonicalTag(tag: string) {
  if (tagKeys.includes(tag)) {
    return tag
  }

  const matches = tagKeys.filter((candidate) => candidate.toLowerCase() === tag.toLowerCase())
  if (matches.length === 1) {
    permanentRedirect(`/tags/${matches[0]}`)
  }

  return notFound()
}

export async function generateMetadata(props: {
  params: Promise<{ tag: string }>
}): Promise<Metadata> {
  const params = await props.params
  const tag = decodeURI(params.tag)
  const label = tagLabels[tag] ?? tag
  return genPageMetadata({
    title: label,
    description: `${siteMetadata.title} notes tagged ${label}`,
    path: `/tags/${tag}`,
    alternates: {
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/tags/${tag}/feed.xml`,
      },
    },
  })
}

export const generateStaticParams = async () => {
  return tagKeys.map((tag) => ({
    tag: encodeURI(tag),
  }))
}

export default async function TagPage(props: { params: Promise<{ tag: string }> }) {
  const params = await props.params
  const tag = getCanonicalTag(decodeURI(params.tag))
  const title = tagLabels[tag] ?? tag
  const notes = getPublishedWritingPosts('notes')
  const filteredPosts = allCoreContent(
    sortPosts(
      notes.filter((post) => post.tags && post.tags.map((t) => slug(t, true)).includes(tag))
    )
  )
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = filteredPosts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: totalPages,
  }

  return (
    <ListLayout
      posts={filteredPosts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title={title}
      entryCtaLabel="Full notes"
    />
  )
}
