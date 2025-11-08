import { notFound } from 'next/navigation'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'
import { genPageMetadata } from 'app/seo'
import { allBookshelves } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'
import Link from '@/components/Link'

const entries = allBookshelves.filter((entry) => entry.isPage !== true && entry.draft !== true)

export const generateStaticParams = async () =>
  entries.map((entry) => ({
    slug: entry.slug,
  }))

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const entry = entries.find((item) => item.slug === params.slug)

  if (!entry) {
    return {}
  }

  return genPageMetadata({
    title: entry.title,
    description: entry.description ?? entry.excerpt,
  })
}

export default async function BookshelfEntryPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const entry = entries.find((item) => item.slug === params.slug)

  if (!entry) {
    notFound()
  }

  const content = coreContent(entry)

  return (
    <div className="mx-auto max-w-3xl divide-y divide-gray-200 pb-16 dark:divide-gray-700">
      <div className="space-y-6 pt-10 pb-10">
        <Link
          href="/bookshelf"
          className="inline-flex items-center text-sm font-semibold text-primary-500 transition hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
        >
          &larr; Back to Bookshelf
        </Link>
        <div className="space-y-3">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-tight dark:text-gray-100">
            {content.title}
          </h1>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-400 dark:text-gray-300">
            {entry.category && (
              <span className="font-semibold uppercase tracking-[0.2em] text-primary-500">
                {entry.category}
              </span>
            )}
            {entry.readingPeriod && <span>{`Reading period: ${entry.readingPeriod}`}</span>}
            {typeof entry.rating === 'number' && <span>{`Rating: ${entry.rating} / 5`}</span>}
          </div>
          {content.description && (
            <p className="text-base leading-7 text-gray-400 dark:text-gray-300">{content.description}</p>
          )}
        </div>
      </div>
      <div className="h-px bg-gray-200 dark:bg-gray-700" />
      <div className="prose max-w-none pt-8 dark:prose-invert">
        <MDXLayoutRenderer code={entry.body.code} components={components} />
      </div>
    </div>
  )
}
