// TODO: remove eslint-disable after the ClassComponent refactor to a FunctionalComponent
/* eslint-disable react/prefer-stateless-function */
import { graphql, PageProps } from 'gatsby'
import React, { useMemo } from 'react'

import { Seo } from '~/components/Seo'
import { NotFound } from '~/components/errors/NotFound'
import { BlogContent, BlogTemplate } from '~/components/pages/Blog'
import { generateBlogUrl } from '~/utils/generateBlogUrl'
import { validationOptional } from '~/utils/validationOptional'
// TODO: fix this ClassComponent to FunctionalComponent
type Props = PageProps<GatsbyTypes.MyPostBySlugQuery>

type PostData = BlogContent & {
  description: string
}

const MyPostTemplate: React.FC<Props> = ({ data }) => {
  const { contentfulMyPost: current, previous, next } = data
  const prevLink = useMemo(() => {
    if (previous?.title && previous?.slug) {
      return {
        title: previous.title,
        pathname: generateBlogUrl(previous.slug),
      }
    }
    return undefined
  }, [previous])
  const nextLink = useMemo(() => {
    if (next?.title && next?.slug) {
      return {
        title: next.title,
        pathname: generateBlogUrl(next.slug),
      }
    }
    return undefined
  }, [next])

  const blogContent: Partial<PostData> = {
    title: current?.title,
    body: current?.body?.childMarkdownRemark?.html,
    publishDate: current?.publishDate,
    prev: prevLink,
    next: nextLink,
    description: current?.description,
  }

  const isValid = validationOptional(blogContent, (key, value) => {
    switch (key) {
      case 'next':
      case 'prev':
        return true
      default:
        return !!value
    }
  })
  if (!isValid) {
    return <NotFound />
  }

  return (
    <>
      <Seo title={blogContent.title} description={blogContent.description} />
      <BlogTemplate
        title={blogContent.title}
        body={blogContent.body}
        publishDate={blogContent.publishDate}
        prev={blogContent.prev}
        next={blogContent.next}
      />
    </>
  )
}

export default MyPostTemplate

export const pageQuery = graphql`
  query MyPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulMyPost(slug: { eq: $slug }) {
      slug
      title
      description
      publishDate(formatString: "YYYY-MM-DD HH:mm")
      rawDate: publishDate
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    previous: contentfulMyPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulMyPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`
