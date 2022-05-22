import { graphql, PageProps } from 'gatsby'
import React from 'react'

type Props = PageProps<GatsbyTypes.MyPostsByTagQuery>

export const AllPostsListByTags: React.FC<Props> = ({ data }) => {
  console.log(data)
  return <div>test</div>
}

export default AllPostsListByTags

export const pageQuery = graphql`
  query MyPostsByTag($tagId: String!) {
    allContentfulMyPost(
      sort: { order: DESC, fields: createdAt }
      filter: { metadata: { tags: { elemMatch: { id: { eq: $tagId } } } } }
    ) {
      nodes {
        title
        slug
        spaceId
        contentful_id
      }
    }
  }
`
