import { graphql, PageProps } from 'gatsby'
import { GatsbyImageProps } from 'gatsby-plugin-image'
import React, { useMemo } from 'react'

import { PostContent } from '~/components/PostContent'
import { NotFound } from '~/components/errors/NotFound'
import { Body } from '~/components/layout/Body'
import { Header } from '~/components/layout/Header'
import { validationOptional } from '~/utils/validationOptional'

type Props = PageProps<GatsbyTypes.FindAuthorQuery>
type Author = {
  name: string
  description: string
  qiita: string
  github: string
  twitter: string
  avatar: string
}

const extractAuthor = (
  data: PageProps<GatsbyTypes.FindAuthorQuery>['data']
): Author | undefined => {
  const contentfulAuthor = data?.contentfulAuthor
  const description = contentfulAuthor?.description?.childMarkdownRemark?.html
  const authorOptional: Partial<Author> = {
    name: contentfulAuthor?.nickName,
    description,
    qiita: contentfulAuthor?.qiita,
    github: contentfulAuthor?.github,
    twitter: contentfulAuthor?.twitter,
    avatar: contentfulAuthor?.avatarImage?.file?.url,
  }
  return validationOptional(authorOptional) ? authorOptional : undefined
}

const Me: React.FC<Props> = ({ data }) => {
  const author = extractAuthor(data)
  const Description = useMemo(() => {
    const description = author?.description
    if (!description) {
      return null
    }
    return <PostContent html={description} />
  }, [author])
  if (!author) {
    return <NotFound />
  }
  return (
    <div>
      <Header />
      <Body>
        <section>
          <div>
            <img src={author.avatar} alt="" />
          </div>
          <h2>{author.name}</h2>
          <div>{Description}</div>
        </section>
      </Body>
    </div>
  )
}

export default Me

export const query = graphql`
  query FindAuthor {
    contentfulAuthor {
      github
      nickName
      qiita
      twitter
      updatedAt
      id
      avatarImage {
        file {
          url
          contentType
        }
        title
      }
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
