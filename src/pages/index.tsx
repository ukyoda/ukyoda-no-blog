import { graphql, PageProps } from 'gatsby'
import React from 'react'

import { Seo } from '~/components/Seo'
import { Body } from '~/components/layout/Body'
import { Header } from '~/components/layout/Header'
import { Layout } from '~/components/layout/Layout'
import { TopTemplate, Post } from '~/components/pages/Top'
import { validationOptional } from '~/utils/validationOptional'

type Props = PageProps<GatsbyTypes.PostsFromTopQuery>

const Top: React.FC<Props> = ({ data }) => {
  const posts = (data?.allContentfulMyPost?.nodes ?? [])
    .map<Partial<Post>>((item) => {
      const body = item?.body?.childMarkdownRemark?.rawMarkdownBody
      const description = item?.description
      return {
        title: item?.title,
        slug: item?.slug,
        description: description ?? body,
        publishDate: item?.publishDate,
      }
    })
    .filter((item): item is Post => validationOptional(item))
    .map((item) => {
      return {
        ...item,
        description: item.description.replace(/\n/g, '').slice(0, 100),
      }
    })

  return (
    <>
      <Seo />
      <Layout>
        <Header />
        <Body>
          <TopTemplate posts={posts} />
        </Body>
      </Layout>
    </>
  )
}

export default Top

export const query = graphql`
  query PostsFromTop {
    allContentfulMyPost(sort: { order: DESC, fields: createdAt }) {
      nodes {
        body {
          body
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        title
        slug
        description
        publishDate(formatString: "YYYY-MM-DD HH:mm")
      }
    }
  }
`
