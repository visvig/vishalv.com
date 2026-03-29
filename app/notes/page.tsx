import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { getPublishedWritingCoreContent } from 'app/writings'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Notes' })

export default async function NotesPage() {
  const posts = getPublishedWritingCoreContent('notes')
  const pageNumber = 1
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="Notes"
      description="Explorations and learnings"
      entryCtaLabel="Full notes"
    />
  )
}
