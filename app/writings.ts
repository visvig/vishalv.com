import { Metadata } from 'next'
import { coreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allAuthors, allBlogs } from 'contentlayer/generated'
import type { Authors, Blog } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export type WritingCollection = 'notes' | 'theses'

export function getPublishedWritingPosts(collection: WritingCollection) {
  return allBlogs.filter((post) => post.draft !== true && post.path.startsWith(`${collection}/`))
}

function getPublicWritingCoreContent(post: Blog, collection: WritingCollection) {
  const publicContent = coreContent(post)
  return collection === 'notes' ? publicContent : { ...publicContent, tags: [] }
}

export function getPublishedWritingCoreContent(collection: WritingCollection) {
  return sortPosts(getPublishedWritingPosts(collection)).map((post) =>
    getPublicWritingCoreContent(post, collection)
  )
}

export function getWritingStaticParams(collection: WritingCollection) {
  return getPublishedWritingPosts(collection).map((post) => ({
    slug: post.slug.split('/').map((name) => decodeURI(name)),
  }))
}

function getAuthorDetails(post: Blog) {
  const authorList = post.authors || ['default']

  return authorList.map((author) => {
    const authorResults = allAuthors.find((item) => item.slug === author)
    return coreContent(authorResults as Authors)
  })
}

function getImageList(post: Blog) {
  if (!post.images) {
    return [siteMetadata.socialBanner]
  }

  return typeof post.images === 'string' ? [post.images] : post.images
}

export function getWritingMetadata(
  collection: WritingCollection,
  slug: string
): Metadata | undefined {
  const post = getPublishedWritingPosts(collection).find(
    (item) => item.path === `${collection}/${slug}`
  )

  if (!post) {
    return
  }

  const authorDetails = getAuthorDetails(post)
  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()
  const authors = authorDetails.map((author) => author.name)
  const imageList = getImageList(post)
  const ogImages = imageList.map((img) => ({
    url: img && img.includes('http') ? img : siteMetadata.siteUrl + img,
  }))

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  }
}

export function getWritingPageData(collection: WritingCollection, slug: string) {
  const posts = getPublishedWritingPosts(collection)
  const sortedCoreContents = getPublishedWritingCoreContent(collection)
  const postIndex = sortedCoreContents.findIndex((item) => item.slug === slug)

  if (postIndex === -1) {
    return null
  }

  const post = posts.find((item) => item.path === `${collection}/${slug}`)

  if (!post) {
    return null
  }

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  const authorDetails = getAuthorDetails(post)
  const mainContent = getPublicWritingCoreContent(post, collection)
  const structuredData = post.structuredData as Record<string, unknown>
  const jsonLd = {
    ...structuredData,
    author: authorDetails.map((author) => ({
      '@type': 'Person',
      name: author.name,
    })),
  }

  return {
    post,
    prev,
    next,
    authorDetails,
    mainContent,
    jsonLd,
  }
}
