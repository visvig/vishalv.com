import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'
import { genPageMetadata } from 'app/seo'
import { allHealth } from 'contentlayer/generated'

const PAGE_TITLE = 'Health'
const PAGE_DESCRIPTION = 'Taking care of the hardware'

export const metadata = genPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
})

export default function HealthPage() {
  const performances = allHealth
    .filter((item) => item.movement && item.date)
    .sort((a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime())

  const routines = allHealth
    .filter((item) => !item.movement && item.isPage !== true && item.draft !== true)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  return (
    <div className="divide-y divide-gray-200 pb-16 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          {PAGE_TITLE}
        </h1>
        <p className="text-lg leading-7 text-gray-400 dark:text-gray-300">{PAGE_DESCRIPTION}</p>
      </div>
      <div className="space-y-16 py-12">
        <section className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {performances.slice(0, 5).map((entry) => {
              const hasWeight = entry.weight !== undefined && entry.weight !== null && entry.weight !== ''
              const weightRaw = hasWeight ? String(entry.weight).trim() : ''
              const [weightValueToken, ...weightUnitTokens] = weightRaw.split(/\s+/)
              const weightHasUnit = weightUnitTokens.length > 0
              const weightValueDisplay = (weightHasUnit ? weightValueToken : weightRaw) || weightRaw
              const weightUnitDisplay = weightHasUnit ? weightUnitTokens.join(' ') : ''
              const hasReps = entry.reps !== undefined && entry.reps !== null && entry.reps !== ''
              const repsDisplay = hasReps ? `× ${entry.reps}` : null
              return (
                <div
                  key={entry.slug}
                  className="flex h-full flex-col justify-between rounded-xl border border-gray-200/50 bg-gray-100/75 p-8 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800/50 dark:bg-gray-900/60"
                >
                  <div className="space-y-4">
                    <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
                      {entry.movement}
                    </span>
                    <div className="space-y-1">
                      {hasWeight && (
                        <div className="flex items-baseline gap-2 text-gray-900 dark:text-gray-100">
                          <p className="text-4xl font-bold tracking-tight">{weightValueDisplay}</p>
                          {weightUnitDisplay && (
                            <span className="text-lg font-semibold tracking-tight text-gray-700 dark:text-gray-300">
                              {weightUnitDisplay}
                            </span>
                          )}
                        </div>
                      )}
                      {repsDisplay ? (
                        <p className="text-base font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
                          {repsDisplay}
                        </p>
                      ) : (
                        <span
                          aria-hidden="true"
                          className="block text-base font-semibold uppercase tracking-wide opacity-0"
                        >
                          × 00
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2 pt-4">
                    {entry.date && (
                      <time className="block text-xs font-medium text-gray-400 dark:text-gray-300">
                        {new Date(entry.date).toLocaleDateString(undefined, {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                    )}
                    {entry.notes && (
                      <p className="text-sm leading-6 text-gray-400 dark:text-gray-300">{entry.notes}</p>
                    )}
                  </div>
                </div>
              )
            })}
            {!performances.length && (
              <p className="text-sm text-gray-400 dark:text-gray-300">No training entries recorded yet.</p>
            )}
          </div>
        </section>
        <section className="space-y-10">
          {routines.map((item) => {
            const title = (item.title ?? '').trim()
            const focus = (item.focus ?? '').trim()
            const displayTitle = title.length > 0 ? title : focus

            return (
              <article key={item.slug} className="py-8">
                {displayTitle && (
                  <h3 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                    {displayTitle}
                  </h3>
                )}
                <div className="prose max-w-none pt-4 text-gray-400 dark:text-gray-300 dark:prose-invert">
                  <MDXLayoutRenderer code={item.body.code} components={components} />
                </div>
              </article>
            )
          })}
        </section>
      </div>
    </div>
  )
}
