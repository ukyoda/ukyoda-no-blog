import { graphql, PageProps } from 'gatsby'
import React from 'react'

import { Seo } from '~/components/Seo'
import { Body } from '~/components/layout/Body'
import { Layout } from '~/components/layout/Layout'
import { TopTemplate, Post } from '~/components/pages/Top'
import { validationOptional } from '~/utils/validationOptional'

type Props = PageProps<GatsbyTypes.PostsFromTopQuery>

const Top: React.FC<Props> = ({ data }) => {
  const posts = (data?.allContentfulMyPost?.edges ?? [])
    .map<Partial<Post>>((item) => {
      const body = item?.node?.body?.childMarkdownRemark?.rawMarkdownBody ?? ''
      const description = item?.node?.description
      return {
        title: item?.node?.title,
        slug: item?.node?.slug,
        description: description ?? body.slice(0, 64),
        publishDate: item?.node?.publishDate,
      }
    })
    .filter((item): item is Post => validationOptional(item))
    .map((item) => {
      return {
        ...item,
        description: item.description.replace(/\n/g, '').slice(0, 100),
      }
    })
  const avatar = `https:${data?.author?.avatar?.file?.url}`
  return (
    <>
      <Seo image={avatar} />
      <Layout>
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
    author: contentfulAuthor {
      avatar: avatarImage {
        file {
          url
        }
      }
    }
    allContentfulMyPost(sort: { order: DESC, fields: createdAt }) {
      edges {
        node {
          body {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
          title
          slug
          description
          publishDate(formatString: "YYYY-MM-DD HH:mm")
          metadata {
            tags {
              id
              name
            }
          }
        }
      }
    }
  }
`
