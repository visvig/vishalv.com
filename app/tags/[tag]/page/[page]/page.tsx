import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import ListLayout from '@/layouts/ListLayoutWithTags'
import tagData from 'app/tag-data.json'
import tagDisplayData from 'app/tag-display-data.json'
import { notFound, permanentRedirect } from 'next/navigation'
import { getPublishedWritingPosts } from 'app/writings'
import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'

const POSTS_PER_PAGE = 5
const tagCounts = tagData as Record<string, number>
const tagLabels = tagDisplayData as Record<string, string>
const tagKeys = Object.keys(tagCounts)

function getCanonicalTag(tag: string, page: string) {
  if (tagKeys.includes(tag)) {
    return tag
  }

  const matches = tagKeys.filter((candidate) => candidate.toLowerCase() === tag.toLowerCase())
  if (matches.length === 1) {
    permanentRedirect(`/tags/${matches[0]}/page/${page}`)
  }

  return notFound()
}

export const generateStaticParams = async () => {
  return tagKeys.flatMap((tag) => {
    const postCount = tagCounts[tag]
    const totalPages = Math.max(1, Math.ceil(postCount / POSTS_PER_PAGE))
    return Array.from({ length: totalPages }, (_, i) => ({
      tag: encodeURI(tag),
      page: (i + 1).toString(),
    }))
  })
}

export async function generateMetadata(props: {
  params: Promise<{ tag: string; page: string }>
}): Promise<Metadata> {
  const params = await props.params
  const tag = decodeURI(params.tag)
  const label = tagLabels[tag] ?? tag

  return genPageMetadata({
    title: `${label} - Page ${params.page}`,
    description: `Notes tagged ${label}`,
    path: `/tags/${tag}/page/${params.page}`,
  })
}

export default async function TagPage(props: { params: Promise<{ tag: string; page: string }> }) {
  const params = await props.params
  const tag = getCanonicalTag(decodeURI(params.tag), params.page)
  const title = tagLabels[tag] ?? tag
  const pageNumber = parseInt(params.page)
  const notes = getPublishedWritingPosts('notes')
  const filteredPosts = allCoreContent(
    sortPosts(
      notes.filter((post) => post.tags && post.tags.map((t) => slug(t, true)).includes(tag))
    )
  )
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)

  // Return 404 for invalid page numbers or empty pages
  if (pageNumber <= 0 || pageNumber > totalPages || isNaN(pageNumber)) {
    return notFound()
  }
  const initialDisplayPosts = filteredPosts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
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
