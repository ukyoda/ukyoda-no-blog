// TODO: remove eslint-disable after the ClassComponent refactor to a FunctionalComponent
/* eslint-disable react/prefer-stateless-function */
import { Link, graphql, PageProps } from 'gatsby'
import React, { useMemo } from 'react'

import { Body } from '~/components/layout/Body'
import { Header } from '~/components/layout/Header'
import { Layout } from '~/components/layout/Layout'
import { generateBlogUrl } from '~/utils/generateBlogUrl'

// TODO: fix this ClassComponent to FunctionalComponent
type Props = PageProps<GatsbyTypes.MyPostBySlugQuery>

const MyPostTemplate: React.FC<Props> = ({ data }) => {
  const { contentfulMyPost: current, previous, next } = data
  const PrevLink = useMemo(() => {
    const prevUrl = previous?.slug ? generateBlogUrl(previous.slug) : null
    const text = previous?.title ? previous.title : null
    if (prevUrl && text) return <Link to={prevUrl}>{text}</Link>
    return null
  }, [previous])
  const NextLink = useMemo(() => {
    const nextUrl = next?.slug ? generateBlogUrl(next.slug) : null
    const text = next?.title ? next.title : null
    if (nextUrl && text) return <Link to={nextUrl}>{text}</Link>
    return null
  }, [next])
  return (
    <Layout>
      <Header />
      <Body>
        <section>
          <h1>{current?.title}</h1>
          <p>{current?.slug}</p>
        </section>
        <div>{NextLink}</div>
        <div>{PrevLink}</div>
      </Body>
    </Layout>
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
      publishDate(formatString: "MMMM Do, YYYY")
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
