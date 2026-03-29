import Main from './Main'
import { getPublishedWritingCoreContent } from './writings'

type HomeEntry = {
  href: string
  title: string
  summary: string
  date: string
  section: string
  ctaLabel: string
}

export default async function Page() {
  const latestThesis = getPublishedWritingCoreContent('theses')[0] ?? null
  const latestNote = getPublishedWritingCoreContent('notes')[0] ?? null

  const entries = [
    latestThesis && {
      href: `/${latestThesis.path}`,
      title: latestThesis.title,
      summary: latestThesis.summary || 'No summary yet.',
      date: latestThesis.date,
      section: 'Theses',
      ctaLabel: 'Read thesis',
    },
    latestNote && {
      href: `/${latestNote.path}`,
      title: latestNote.title,
      summary: latestNote.summary || 'No summary yet.',
      date: latestNote.date,
      section: 'Notes',
      ctaLabel: 'Full notes',
    },
  ].filter((entry): entry is HomeEntry => Boolean(entry))

  return <Main entries={entries} />
}
