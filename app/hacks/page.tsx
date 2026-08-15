import Card from '@/components/Card'
import JsonLd from '@/components/JsonLd'
import { genPageMetadata } from 'app/seo'
import { getHacksPageJsonLd } from 'app/schema'
import { allHacks } from 'contentlayer/generated'

export const metadata = genPageMetadata({ title: 'Hacks', path: '/hacks' })

export default function Hacks() {
  const hacks = allHacks
    .filter((item) => item.draft !== true)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  return (
    <>
      <JsonLd
        data={getHacksPageJsonLd(
          hacks.map((hack) => ({
            slug: hack.slug,
            title: hack.title,
            description: hack.description || hack.excerpt,
            href: hack.href,
            image: hack.image || hack.firstImage,
          }))
        )}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Hacks
          </h1>
          <p className="text-lg leading-7 text-gray-800 dark:text-gray-200">
            Experiments and prototypes
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {hacks.map((hack) => (
              <Card
                key={hack.slug}
                title={hack.title}
                description={hack.description || hack.excerpt}
                imgSrc={hack.image || hack.firstImage}
                href={hack.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
