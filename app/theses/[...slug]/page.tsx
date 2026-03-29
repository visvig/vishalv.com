import 'css/prism.css'
import 'katex/dist/katex.css'

import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getWritingMetadata, getWritingPageData, getWritingStaticParams } from 'app/writings'

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata | undefined> {
  const params = await props.params
  return getWritingMetadata('theses', decodeURI(params.slug.join('/')))
}

export const generateStaticParams = async () => {
  return getWritingStaticParams('theses')
}

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params
  const pageData = getWritingPageData('theses', decodeURI(params.slug.join('/')))

  if (!pageData) {
    return notFound()
  }

  const { post, prev, next, authorDetails, mainContent, jsonLd } = pageData
  const Layout = layouts[post.layout || defaultLayout]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout content={mainContent} authorDetails={authorDetails} next={next} prev={prev}>
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </Layout>
    </>
  )
}
