import Link from '@/components/Link'
import Image from '@/components/Image'
import { genPageMetadata } from 'app/seo'
import { allBookshelves } from 'contentlayer/generated'

const PAGE_TITLE = 'Bookshelf'
const PAGE_DESCRIPTION = 'A reading collection'

export const metadata = genPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
})

export default function BookshelfPage() {
  const entries = allBookshelves
    .filter((entry) => entry.isPage !== true && entry.draft !== true)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  return (
    <div className="divide-y divide-gray-200 pb-16 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          {PAGE_TITLE}
        </h1>
        <p className="text-lg leading-7 text-gray-800 dark:text-gray-200">{PAGE_DESCRIPTION}</p>
      </div>
      {!entries.length ? (
        <p className="pt-12 text-gray-700 dark:text-gray-200">No books logged yet.</p>
      ) : (
        <div className="grid gap-8 py-12 sm:grid-cols-2 xl:grid-cols-3">
          {entries.map((entry) => (
            <article
              key={entry.slug}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200/50 bg-gray-100/75 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800/50 dark:bg-gray-900/60"
            >
              {entry.firstImage && entry.firstImage.endsWith('.svg') ? (
                <div className="flex h-60 w-full items-center justify-center bg-gray-100/80 dark:bg-gray-900/60">
                  <Image
                    src={entry.firstImage}
                    alt={entry.title || 'Book cover'}
                    width={320}
                    height={240}
                    className="h-full w-auto object-contain"
                  />
                </div>
              ) : (
                entry.firstImage && (
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={entry.firstImage}
                      alt={entry.title || 'Book cover'}
                      fill
                      className="object-cover"
                    />
                  </div>
                )
              )}
              <div className="flex flex-1 flex-col space-y-4 p-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    <Link
                      href={`/bookshelf/${entry.slug}`}
                      className="hover:text-primary-500 dark:hover:text-primary-400 text-gray-900 transition-colors dark:text-gray-100"
                    >
                      {entry.title}
                    </Link>
                  </h2>
                  {entry.author && (
                    <p className="text-base font-medium text-gray-700 dark:text-gray-200">
                      {`by ${entry.author}`}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-700 dark:text-gray-200">
                    {entry.category && (
                      <span className="text-primary-500 tracking-wide uppercase">
                        {entry.category}
                      </span>
                    )}
                    {entry.readingPeriod && <span>{`Reading period: ${entry.readingPeriod}`}</span>}
                    {typeof entry.rating === 'number' && (
                      <span>{`Rating: ${entry.rating} / 5`}</span>
                    )}
                  </div>
                </div>
                <div className="mt-auto text-sm font-medium">
                  <Link
                    href={`/bookshelf/${entry.slug}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Read more about ${entry.title}`}
                  >
                    Review &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
