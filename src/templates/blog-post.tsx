// TODO: remove eslint-disable after the ClassComponent refactor to a FunctionalComponent
/* eslint-disable react/prefer-stateless-function */
import { Link, graphql, PageProps } from 'gatsby'
import get from 'lodash/get'
import React, { useMemo } from 'react'

import * as styles from './blog-post.module.css'

import { Body } from '~/components/layout/Body'
import { Header } from '~/components/layout/Header'

// TODO: fix this ClassComponent to FunctionalComponent
type Props = PageProps<GatsbyTypes.MyPostBySlugQuery>

const MyPostTemplate: React.FC<Props> = ({ data }) => {
  const { contentfulMyPost: current, previous, next } = data
  const PrevLink = useMemo(() => {
    const prevUrl = previous?.slug ? `/blog/${previous.slug}` : null
    const text = previous?.title ? previous.title : null
    if (prevUrl && text) return <Link to={prevUrl}>{text}</Link>
    return null
  }, [previous])
  const NextLink = useMemo(() => {
    const nextUrl = next?.slug ? `/blog/${next.slug}` : null
    const text = next?.title ? next.title : null
    if (nextUrl && text) return <Link to={nextUrl}>{text}</Link>
    return null
  }, [previous])
  return (
    <div>
      <Header />
      <Body>
        <section>
          <h1>{current?.title}</h1>
          <p>{current?.slug}</p>
        </section>
        <div>{NextLink}</div>
        <div>{PrevLink}</div>
      </Body>
    </div>
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
