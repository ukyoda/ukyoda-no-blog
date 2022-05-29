import { Link } from 'gatsby'
import React, { useMemo } from 'react'

import { markdownStyles } from '../../atoms/Markdown'

import * as styles from './Blog.module.css'

import { PostContent } from '~/components/molecules/PostContent'
import { Body } from '~/components/molecules/layout/Body'
import { Layout } from '~/components/molecules/layout/Layout'

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
  const Next = useMemo(() => {
    if (next?.pathname) {
      return (
        <Link to={next.pathname} className={styles.link}>
          次の記事
        </Link>
      )
    }
    return (
      <span aria-hidden className={styles.notLink}>
        次の記事
      </span>
    )
  }, [next])
  const Prev = useMemo(() => {
    if (prev?.pathname) {
      return (
        <Link to={prev.pathname} className={styles.link}>
          前の記事
        </Link>
      )
    }
    return (
      <span aria-hidden className={styles.notLink}>
        前の記事
      </span>
    )
  }, [prev])
  return (
    <Layout>
      <Body>
        <article className={styles.article}>
          <header className={styles.header}>
            <div className={styles.contexts}>
              <div className={styles.publishDate}>{publishDate}</div>
              <div className={styles.control}>
                <div>{Prev}</div>
                <span className={styles.separator}>|</span>
                <div>{Next}</div>
              </div>
            </div>
            <h1 className={styles.title}>{title}</h1>
          </header>
          <main className={markdownStyles}>
            <PostContent html={body} />
          </main>
        </article>
      </Body>
    </Layout>
  )
}
