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
    <div className="flex items-baseline justify-between gap-4">
      <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <Link
        href={href}
        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium"
      >
        {cta} &rarr;
      </Link>
    </div>
  )
}

export default function Home({ latestThesis, about }: HomeProps) {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Home
        </h1>
      </div>

      <div className="space-y-16 py-12">
        <section className="space-y-8">
          <SectionHeader title="Theses" href="/theses" cta="All theses" />
          {!latestThesis ? (
            <p className="text-base leading-7 text-gray-700 dark:text-gray-200">
              No thesis published yet.
            </p>
          ) : (
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-700 dark:text-gray-200">
                    <time dateTime={latestThesis.date}>
                      {formatDate(latestThesis.date, siteMetadata.locale)}
                    </time>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div>
                    <h3 className="text-3xl leading-10 font-bold tracking-tight text-gray-900 dark:text-gray-100">
                      <Link href={latestThesis.href} className="text-gray-900 dark:text-gray-100">
                        {latestThesis.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="text-base leading-6 font-medium">
                    <Link
                      href={latestThesis.href}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      Read thesis &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          )}
        </section>

        <div className="border-t border-gray-200 pt-16 dark:border-gray-700">
          <section className="space-y-8">
            <SectionHeader title="About" href="/about" cta="Full profile" />
            {!about ? (
              <p className="text-base leading-7 text-gray-700 dark:text-gray-200">
                No profile available.
              </p>
            ) : (
              <article>
                <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:gap-8 md:text-left">
                  {about.avatar && (
                    <Link href="/about" className="shrink-0">
                      <Image
                        src={about.avatar}
                        alt="Vishal V"
                        width={176}
                        height={176}
                        className="h-32 w-32 rounded-full object-cover md:h-40 md:w-40"
                      />
                    </Link>
                  )}
                  <div className="max-w-sm space-y-4 md:max-w-none">
                    {about.name && (
                      <h3 className="text-3xl leading-tight font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
                        {about.name}
                      </h3>
                    )}
                    <div className="space-y-1">
                      {about.occupation && (
                        <p className="text-lg leading-7 font-medium text-gray-900 md:text-xl md:leading-8 dark:text-gray-100">
                          {about.occupation}
                        </p>
                      )}
                      {about.company && (
                        <p className="text-base leading-7 text-gray-700 dark:text-gray-200">
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
    </div>
  )
}
