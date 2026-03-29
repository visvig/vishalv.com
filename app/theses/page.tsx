import ListLayout from '@/layouts/ListLayoutWithTags'
import { genPageMetadata } from 'app/seo'
import { getPublishedWritingCoreContent } from 'app/writings'

const PAGE_TITLE = 'Theses'
const PAGE_DESCRIPTION = 'Positions and Views'

export const metadata = genPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
})

export default function ThesesPage() {
  const theses = getPublishedWritingCoreContent('theses')

  return (
    <ListLayout
      posts={theses}
      title={PAGE_TITLE}
      description={PAGE_DESCRIPTION}
      showTagSidebar={false}
      entryLayout="datedGrid"
      entryCtaLabel="Read thesis"
    />
  )
}
