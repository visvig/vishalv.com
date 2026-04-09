import { allAuthors, allBookshelves, allHacks, allHealth } from 'contentlayer/generated'
import Main from './Main'
import { getPublishedWritingCoreContent } from './writings'

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

export default async function Page() {
  const latestThesisPost = getPublishedWritingCoreContent('theses')[0] ?? null
  const latestNotes = getPublishedWritingCoreContent('notes').slice(0, 4)
  const author = allAuthors.find((item) => item.slug === 'default')

  const latestThesis: HomeThesis | null = latestThesisPost
    ? {
        href: `/${latestThesisPost.path}`,
        title: latestThesisPost.title,
        summary: latestThesisPost.summary || 'No summary yet.',
        date: latestThesisPost.date,
      }
    : null

  const hacks: HomeHack[] = allHacks
    .filter(
      (item): item is (typeof allHacks)[number] & { href: string } =>
        item.draft !== true && Boolean(item.href)
    )
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .slice(0, 3)
    .map((item) => ({
      href: item.href,
      title: item.title,
      description: item.description || item.excerpt || '',
      image: item.image || item.firstImage,
    }))

  const notes: HomeNote[] = latestNotes.map((note) => ({
    href: `/${note.path}`,
    title: note.title,
    date: note.date,
  }))

  const books: HomeBook[] = allBookshelves
    .filter((entry) => entry.isPage !== true && entry.draft !== true)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .slice(0, 3)
    .map((entry) => ({
      href: `/bookshelf/${entry.slug}`,
      title: entry.title || 'Untitled',
      author: entry.author,
      image: entry.firstImage,
    }))

  const metrics: HomeMetric[] = allHealth
    .filter((item) => item.movement && item.date)
    .sort((a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime())
    .slice(0, 3)
    .map((item) => ({
      movement: item.movement || 'Training',
      value: item.weight ? String(item.weight) : item.reps ? `× ${item.reps}` : 'Logged',
      detail: item.weight && item.reps ? `× ${item.reps}` : item.notes || null,
      date: item.date || '',
    }))

  const about: HomeAbout | null = author
    ? {
        name: author.name,
        avatar: author.avatar,
        occupation: author.occupation,
        company: author.company,
      }
    : null

  return (
    <Main
      latestThesis={latestThesis}
      hacks={hacks}
      notes={notes}
      books={books}
      metrics={metrics}
      about={about}
    />
  )
}
