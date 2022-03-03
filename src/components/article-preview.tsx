import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

import * as styles from './article-preview.module.css'
import Container from './container'
import Tags from './tags'

type Post = {
  slug: string
  title: string
  date: string
  tags: string[]
  publishDate: string
  // TODO: fix any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  description: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  heroImage: any
}

type Props = {
  posts: Post[]
}

const ArticlePreview: React.FC<Props> = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} className={styles.link}>
                <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} />
                <h2 className={styles.title}>{post.title}</h2>
              </Link>
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: post.description.childMarkdownRemark.html,
                }}
              />
              <div className={styles.meta}>
                <small className="meta">{post.publishDate}</small>
                <Tags tags={post.tags} />
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
