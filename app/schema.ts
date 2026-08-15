import siteMetadata from '@/data/showcase/siteMetadata'

type JsonLdObject = Record<string, unknown>

type PersonProfile = {
  email?: string | null
  avatar?: string | null
  occupation?: string | null
  company?: string | null
}

type ArticleJsonLdInput = {
  url: string
  title: string
  description?: string | null
  dateModified?: string | null
  datePublished?: string | null
  images?: Array<string | null | undefined>
  tags?: string[]
  type?: 'Article' | 'BlogPosting'
}

type HackJsonLdInput = {
  slug: string
  title: string
  description?: string | null
  href?: string | null
  image?: string | null
}

export const siteUrl = String(siteMetadata.siteUrl).replace(/\/$/, '')
export const personId = siteMetadata.person?.id || `${siteUrl}/#vishal`
export const websiteId = `${siteUrl}/#website`

function removeUndefined(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(removeUndefined).filter((item) => item !== undefined)
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as JsonLdObject)
        .filter(([, item]) => item !== undefined && item !== null && item !== '')
        .map(([key, item]) => [key, removeUndefined(item)])
    )
  }

  return value
}

export function absoluteUrl(value = '') {
  if (/^https?:\/\//.test(value)) {
    return value
  }

  if (!value || value === '/') {
    return siteUrl
  }

  return `${siteUrl}/${value.replace(/^\/+/, '')}`
}

export function getPersonJsonLd(profile: PersonProfile = {}): JsonLdObject {
  return removeUndefined({
    '@type': 'Person',
    '@id': personId,
    name: siteMetadata.person?.name || siteMetadata.author,
    url: siteMetadata.person?.url || siteUrl,
    image: profile.avatar ? absoluteUrl(profile.avatar) : undefined,
    email: profile.email,
    jobTitle: profile.occupation,
    worksFor: profile.company
      ? {
          '@type': 'Organization',
          name: profile.company,
        }
      : undefined,
    sameAs: siteMetadata.person?.sameAs || [
      siteMetadata.linkedin,
      siteMetadata.x,
      siteMetadata.github,
    ],
  }) as JsonLdObject
}

export function getWebSiteJsonLd(): JsonLdObject {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    url: siteUrl,
    name: siteMetadata.title,
    description: siteMetadata.description,
    inLanguage: siteMetadata.locale,
    author: { '@id': personId },
    publisher: { '@id': personId },
  }
}

export function getHomePageJsonLd(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@graph': [getPersonJsonLd(), getWebSiteJsonLd()],
  }
}

export function getProfilePageJsonLd(profile: PersonProfile = {}): JsonLdObject {
  const aboutUrl = absoluteUrl('/about')

  return {
    '@context': 'https://schema.org',
    '@graph': [
      getPersonJsonLd(profile),
      getWebSiteJsonLd(),
      {
        '@type': 'ProfilePage',
        '@id': `${aboutUrl}#profile`,
        url: aboutUrl,
        name: `${siteMetadata.author} - About`,
        description: siteMetadata.description,
        inLanguage: siteMetadata.locale,
        isPartOf: { '@id': websiteId },
        about: { '@id': personId },
        mainEntity: { '@id': personId },
      },
    ],
  }
}

export function getArticleJsonLd(input: ArticleJsonLdInput): JsonLdObject {
  return removeUndefined({
    '@context': 'https://schema.org',
    '@type': input.type || 'BlogPosting',
    '@id': `${input.url}#article`,
    url: input.url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': input.url,
    },
    headline: input.title,
    description: input.description,
    image: input.images?.filter(Boolean).map((image) => absoluteUrl(String(image))),
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    author: { '@id': personId },
    creator: { '@id': personId },
    publisher: { '@id': personId },
    isPartOf: { '@id': websiteId },
    keywords: input.tags?.length ? input.tags : undefined,
  }) as JsonLdObject
}

function githubRepositoryUrl(href?: string | null) {
  const match = href?.match(/^https:\/\/github\.com\/([^/]+\/[^/]+)/)
  return match ? `https://github.com/${match[1]}` : undefined
}

function getHackWorkJsonLd(hack: HackJsonLdInput): JsonLdObject {
  const hackId = `${absoluteUrl('/hacks')}#${hack.slug}`
  const repositoryUrl = githubRepositoryUrl(hack.href)

  return removeUndefined({
    '@type': repositoryUrl ? 'SoftwareSourceCode' : 'CreativeWork',
    '@id': hackId,
    name: hack.title,
    description: hack.description,
    url: hack.href,
    image: hack.image ? absoluteUrl(hack.image) : undefined,
    author: { '@id': personId },
    creator: { '@id': personId },
    publisher: { '@id': personId },
    codeRepository: repositoryUrl,
    isPartOf: { '@id': `${absoluteUrl('/hacks')}#collection` },
  }) as JsonLdObject
}

export function getHacksPageJsonLd(hacks: HackJsonLdInput[]): JsonLdObject {
  const pageUrl = absoluteUrl('/hacks')
  const works = hacks.map(getHackWorkJsonLd)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      getPersonJsonLd(),
      getWebSiteJsonLd(),
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#collection`,
        url: pageUrl,
        name: 'Hacks',
        description: 'Experiments and prototypes',
        inLanguage: siteMetadata.locale,
        isPartOf: { '@id': websiteId },
        author: { '@id': personId },
        mainEntity: { '@id': `${pageUrl}#item-list` },
      },
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#item-list`,
        itemListElement: works.map((work, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: { '@id': work['@id'] },
        })),
      },
      ...works,
    ],
  }
}
