import { Metadata } from 'next'
import siteMetadata from '@/data/showcase/siteMetadata'
import { absoluteUrl } from './schema'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  path?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function genPageMetadata({
  title,
  description,
  image,
  path = '',
  alternates,
  openGraph,
  twitter,
  ...rest
}: PageSEOProps): Metadata {
  const canonicalUrl = absoluteUrl(path)

  return {
    title,
    description: description || siteMetadata.description,
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: description || siteMetadata.description,
      url: canonicalUrl,
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: 'en_US',
      type: 'website',
      ...openGraph,
    },
    alternates: {
      ...alternates,
      canonical: canonicalUrl,
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: 'summary_large_image',
      images: image ? [image] : [siteMetadata.socialBanner],
      ...twitter,
    },
    ...rest,
  }
}
