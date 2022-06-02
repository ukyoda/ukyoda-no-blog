import { graphql, PageProps } from 'gatsby'
import React, { ComponentProps } from 'react'

import { NotFound } from '~/components/errors/NotFound'
import { Body } from '~/components/molecules/layout/Body'
import { Layout } from '~/components/molecules/layout/Layout'
import { AllPostsByTag } from '~/components/templates/AllPostsByTag'
import { isTag, Tag } from '~/model/Tag'
import { generateBlogUrl, generateTagUrl } from '~/utils/generateBlogUrl'
import { validationOptional } from '~/utils/validationOptional'

type Props = PageProps<GatsbyTypes.MyPostsByTagQuery>
type PostType = ComponentProps<typeof AllPostsByTag>['posts'][number]

export const AllPostsListByTags: React.FC<Props> = ({ data, ...others }) => {
  const posts = (data?.allContentfulMyPost?.edges ?? [])
    .map<Partial<PostType>>((item) => {
      const body = item?.node?.body?.childMarkdownRemark?.rawMarkdownBody ?? ''
      const description = item?.node?.description
      const tags =
        item?.node?.metadata?.tags?.reduce((acc, cur: unknown) => {
          if (isTag(cur)) {
            acc.push(cur)
          }
          return acc
        }, [] as Tag[]) ?? []

      return {
        title: item?.node?.title,
        body: description ?? body,
        url: item?.node?.slug ? generateBlogUrl(item.node.slug) : undefined,
        description: description ?? body.slice(0, 64),
        publishDate: item?.node?.publishDate,
        tags: tags.map(({ name }) => ({
          name,
          pathname: generateTagUrl(name),
        })),
      }
    })
    .filter((item): item is PostType => validationOptional(item))
    .map((item) => {
      return {
        ...item,
        body: item.body.replace(/\n/g, '').slice(0, 100),
      }
    })
  const tagName = data?.contentfulTag?.name
  if (tagName === undefined) {
    return <NotFound />
  }

  return (
    <Layout>
      <Body>
        <AllPostsByTag posts={posts} tagName={tagName} />
      </Body>
    </Layout>
  )
}

export default AllPostsListByTags

export const pageQuery = graphql`
  query MyPostsByTag($tagId: String!) {
    contentfulTag(id: { eq: $tagId }) {
      id
      contentful_id
      name
    }
    allContentfulMyPost(
      sort: { order: DESC, fields: createdAt }
      filter: { metadata: { tags: { elemMatch: { id: { eq: $tagId } } } } }
    ) {
      edges {
        node {
          title
          slug
          description
          spaceId
          contentful_id
          publishDate(formatString: "YYYY-MM-DD HH:mm")
          body {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
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
