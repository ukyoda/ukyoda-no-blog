import React, { ComponentProps } from 'react'

import { CardList } from '~/components/molecules/CardList'

type PostProps = ComponentProps<typeof CardList>['items'][number]

type Props = {
  tagName: string
  posts: PostProps[]
}

export const AllPostsByTag: React.FC<Props> = ({ posts, tagName }) => {
  return (
    <main>
      <header>
        <h1>「{tagName}」のブログ記事一覧</h1>
      </header>
      <section>
        <CardList items={posts} keyPrefix="SearchResultList" />
      </section>
    </main>
  )
}
