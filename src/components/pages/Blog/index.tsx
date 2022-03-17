import { Link } from 'gatsby'
import React, { useMemo } from 'react'

import { PostContent } from '~/components/PostContent'
import { Body } from '~/components/layout/Body'
import { Header } from '~/components/layout/Header'
import { Layout } from '~/components/layout/Layout'

export type BlogContent = {
  title: string
  body: string
  publishDate: string
  prev?: {
    title: string
    pathname: string
  }
  next?: {
    title: string
    pathname: string
  }
}

export const BlogTemplate: React.FC<BlogContent> = ({
  title,
  body,
  publishDate,
  prev,
  next,
}) => {
  const PrevLink = useMemo(() => {
    if (prev) {
      return <Link to={prev.pathname}>{prev.title}</Link>
    }
    return null
  }, [prev])
  const NextLink = useMemo(() => {
    if (next) {
      return <Link to={next.pathname}>{next.title}</Link>
    }
    return null
  }, [next])
  return (
    <Layout>
      <Header />
      <Body>
        <section>
          <h1>{title}</h1>
          <div>
            <PostContent html={body} />
          </div>
        </section>
        <div>
          <div>{PrevLink}</div>
          <div>{NextLink}</div>
        </div>
      </Body>
    </Layout>
  )
}
