import Image from '@/components/Image'
import Link from '@/components/Link'
import siteMetadata from '@/data/showcase/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

type HomeThesis = {
  href: string
  title: string
  date: string
}

type HomeAbout = {
  name?: string
  avatar?: string | null
  occupation?: string
  company?: string
}

type HomeProps = {
  latestThesis: HomeThesis | null
  about: HomeAbout | null
}

function SectionHeader({ title, href, cta }: { title: string; href: string; cta: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <div className="h-px min-w-6 flex-1 bg-gray-200 dark:bg-gray-700" aria-hidden="true" />
      <Link
        href={href}
        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium whitespace-nowrap transition-colors"
      >
        {cta} &rarr;
      </Link>
    </div>
  )
}

function formatShortDate(date: string) {
  return new Date(date).toLocaleDateString(siteMetadata.locale, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function Home({ latestThesis, about }: HomeProps) {
  return (
    <div className="pb-16">
      <div className="border-b border-gray-200 pt-8 pb-9 md:pt-10 md:pb-12 dark:border-gray-700">
        <div className="bg-primary-500 mb-5 h-1 w-14" aria-hidden="true" />
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Home
        </h1>
      </div>

      <div className="grid gap-14 py-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:gap-16 lg:py-16">
        <section className="space-y-8 lg:pt-2">
          <SectionHeader title="Theses" href="/theses" cta="All theses" />
          {!latestThesis ? (
            <p className="text-base leading-7 text-gray-700 dark:text-gray-200">
              No thesis published yet.
            </p>
          ) : (
            <article className="border-y border-gray-200 py-7 dark:border-gray-700">
              <div className="border-primary-500/60 grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-4 border-l-2 pl-4 sm:gap-x-6 sm:pl-6">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-sm leading-6 font-semibold whitespace-nowrap text-gray-600 sm:text-base dark:text-gray-300">
                    <time dateTime={latestThesis.date}>
                      <span className="sm:hidden">{formatShortDate(latestThesis.date)}</span>
                      <span className="hidden sm:inline">
                        {formatDate(latestThesis.date, siteMetadata.locale)}
                      </span>
                    </time>
                  </dd>
                </dl>
                <h3 className="min-w-0 text-lg leading-7 font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-8 dark:text-gray-100">
                  <Link
                    href={latestThesis.href}
                    className="hover:text-primary-500 dark:hover:text-primary-400 break-words text-gray-900 transition-colors dark:text-gray-100"
                  >
                    {latestThesis.title}
                  </Link>
                </h3>
              </div>
            </article>
          )}
        </section>

        <section className="space-y-8 border-t border-gray-200 pt-10 lg:border-t-0 lg:border-l lg:pt-2 lg:pl-12 dark:border-gray-700">
          <SectionHeader title="About" href="/about" cta="Full profile" />
          {!about ? (
            <p className="text-base leading-7 text-gray-700 dark:text-gray-200">
              No profile available.
            </p>
          ) : (
            <article>
              <div className="flex items-center gap-5 sm:gap-6 lg:flex-col lg:items-start">
                {about.avatar && (
                  <Link href="/about" className="shrink-0">
                    <Image
                      src={about.avatar}
                      alt="Vishal V"
                      width={176}
                      height={176}
                      className="h-24 w-24 rounded-full object-cover ring-1 ring-gray-200 ring-offset-4 ring-offset-gray-50 sm:h-32 sm:w-32 lg:h-40 lg:w-40 dark:ring-gray-700 dark:ring-offset-gray-950"
                    />
                  </Link>
                )}
                <div className="min-w-0 space-y-3">
                  {about.name && (
                    <h3 className="text-2xl leading-tight font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-100">
                      {about.name}
                    </h3>
                  )}
                  <div className="space-y-1">
                    {about.occupation && (
                      <p className="text-base leading-6 font-medium text-gray-900 sm:text-lg dark:text-gray-100">
                        {about.occupation}
                      </p>
                    )}
                    {about.company && (
                      <p className="text-sm leading-6 text-gray-700 sm:text-base dark:text-gray-200">
                        {about.company}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </article>
          )}
        </section>
      </div>
    </div>
  )
}
