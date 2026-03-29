import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

type HomeEntry = {
  href: string
  title: string
  summary: string
  date: string
  section: string
  ctaLabel: string
}

export default function Home({ entries }: { entries: HomeEntry[] }) {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Home
        </h1>
        <p className="text-lg leading-7 text-gray-800 dark:text-gray-200">Latest writing</p>
      </div>
      <ul>
        {!entries.length && (
          <li className="py-12 text-base leading-7 text-gray-700 dark:text-gray-200">
            No writing published yet.
          </li>
        )}
        {entries.map((entry) => (
          <li key={entry.href} className="py-12">
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-700 dark:text-gray-200">
                    <time dateTime={entry.date}>
                      {formatDate(entry.date, siteMetadata.locale)}
                    </time>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <div>
                      <p className="text-primary-500 text-xs font-semibold tracking-[0.3em] uppercase">
                        {entry.section}
                      </p>
                      <h2 className="text-2xl leading-8 font-bold tracking-tight">
                        <Link href={entry.href} className="text-gray-900 dark:text-gray-100">
                          {entry.title}
                        </Link>
                      </h2>
                    </div>
                    <div className="prose max-w-none text-gray-700 dark:text-gray-200">
                      {entry.summary}
                    </div>
                  </div>
                  <div className="text-base leading-6 font-medium">
                    <Link
                      href={entry.href}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {entry.ctaLabel} &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
