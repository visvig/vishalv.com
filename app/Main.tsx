import Image from '@/components/Image'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

type HomeThesis = {
  href: string
  title: string
  summary: string
  date: string
}

type HomeHack = {
  href: string
  title: string
  description: string
  image?: string | null
}

type HomeNote = {
  href: string
  title: string
  date: string
}

type HomeBook = {
  href: string
  title: string
  author?: string
  image?: string | null
}

type HomeMetric = {
  movement: string
  value: string
  detail?: string | null
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
  hacks: HomeHack[]
  notes: HomeNote[]
  books: HomeBook[]
  metrics: HomeMetric[]
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

export default function Home({ latestThesis, hacks, notes, books, metrics, about }: HomeProps) {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Home
        </h1>
        <p className="text-lg leading-7 text-gray-800 dark:text-gray-200">Latest work</p>
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
                  <div className="space-y-4">
                    <h3 className="text-3xl leading-10 font-bold tracking-tight text-gray-900 dark:text-gray-100">
                      <Link href={latestThesis.href} className="text-gray-900 dark:text-gray-100">
                        {latestThesis.title}
                      </Link>
                    </h3>
                    <div className="prose max-w-none text-gray-700 dark:text-gray-200">
                      {latestThesis.summary}
                    </div>
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

        <section className="space-y-6">
          <SectionHeader title="Hacks" href="/hacks" cta="All hacks" />
          {!hacks.length ? (
            <p className="text-base leading-7 text-gray-700 dark:text-gray-200">No hacks yet.</p>
          ) : (
            <ul className="grid gap-5 md:grid-cols-3">
              {hacks.map((hack) => (
                <li key={hack.href}>
                  <Link
                    href={hack.href}
                    className="block overflow-hidden rounded-xl border border-gray-200/50 bg-gray-100/75 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800/50 dark:bg-gray-900/60"
                  >
                    <div
                      className={hack.image ? 'grid grid-cols-[96px_minmax(0,1fr)] md:block' : ''}
                    >
                      {hack.image && (
                        <div className="relative h-full min-h-[96px] w-full overflow-hidden md:aspect-[16/10] md:h-auto">
                          <Image src={hack.image} alt={hack.title} fill className="object-cover" />
                        </div>
                      )}
                      <div className="min-w-0 space-y-2 p-4 md:p-5">
                        <h3 className="text-base font-semibold tracking-tight text-gray-900 md:text-lg dark:text-gray-100">
                          {hack.title}
                        </h3>
                        <p className="truncate text-sm text-gray-700 dark:text-gray-200">
                          {hack.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="space-y-6">
          <SectionHeader title="Notes" href="/notes" cta="All notes" />
          {!notes.length ? (
            <p className="text-base leading-7 text-gray-700 dark:text-gray-200">No notes yet.</p>
          ) : (
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {notes.map((note) => (
                <li key={note.href} className="py-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                      <Link href={note.href} className="text-gray-900 dark:text-gray-100">
                        {note.title}
                      </Link>
                    </h3>
                    <time
                      dateTime={note.date}
                      className="shrink-0 text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      {formatDate(note.date, siteMetadata.locale)}
                    </time>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="space-y-6">
          <SectionHeader title="Bookshelf" href="/bookshelf" cta="Full shelf" />
          {!books.length ? (
            <p className="text-base leading-7 text-gray-700 dark:text-gray-200">
              No books logged yet.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {books.map((book) => (
                <article
                  key={book.href}
                  className="overflow-hidden rounded-xl border border-gray-200/50 bg-gray-100/75 shadow-sm dark:border-gray-800/50 dark:bg-gray-900/60"
                >
                  {book.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image src={book.image} alt={book.title} fill className="object-cover" />
                    </div>
                  )}
                  <div className="space-y-2 p-5">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                      <Link href={book.href} className="text-gray-900 dark:text-gray-100">
                        {book.title}
                      </Link>
                    </h3>
                    {book.author && (
                      <p className="text-sm text-gray-700 dark:text-gray-200">{book.author}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="space-y-6">
          <SectionHeader title="Health" href="/health" cta="All health" />
          {!metrics.length ? (
            <p className="text-base leading-7 text-gray-700 dark:text-gray-200">
              No performance entries yet.
            </p>
          ) : (
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {metrics.map((metric) => (
                <li key={`${metric.movement}-${metric.date}`} className="py-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                        {metric.movement}
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-200">
                        {metric.value}
                        {metric.detail ? ` · ${metric.detail}` : ''}
                      </p>
                    </div>
                    <time
                      dateTime={metric.date}
                      className="shrink-0 text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      {formatDate(metric.date, siteMetadata.locale)}
                    </time>
                  </div>
                </li>
              ))}
            </ul>
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
