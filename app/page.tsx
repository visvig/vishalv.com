import { allAuthors } from 'contentlayer/generated'
import Main from './Main'
import { getPublishedWritingCoreContent } from './writings'
import JsonLd from '@/components/JsonLd'
import { getHomePageJsonLd } from './schema'

type HomeThesis = {
  href: string
  title: string
  summary: string
  date: string
}

type HomeAbout = {
  name?: string
  avatar?: string | null
  occupation?: string
  company?: string
}

export default async function Page() {
  const latestThesisPost = getPublishedWritingCoreContent('theses')[0] ?? null
  const author = allAuthors.find((item) => item.slug === 'default')

  const latestThesis: HomeThesis | null = latestThesisPost
    ? {
        href: `/${latestThesisPost.path}`,
        title: latestThesisPost.title,
        summary: latestThesisPost.summary || 'No summary yet.',
        date: latestThesisPost.date,
      }
    : null

  const about: HomeAbout | null = author
    ? {
        name: author.name,
        avatar: author.avatar,
        occupation: author.occupation,
        company: author.company,
      }
    : null

  return (
    <>
      <JsonLd data={getHomePageJsonLd()} />
      <Main latestThesis={latestThesis} about={about} />
    </>
  )
}
