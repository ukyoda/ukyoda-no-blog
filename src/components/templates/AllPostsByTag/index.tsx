import React, { ComponentProps } from 'react'

import * as styles from './AllPostsByTag.module.css'

import { CardList } from '~/components/molecules/CardList'

type PostProps = ComponentProps<typeof CardList>['items'][number]

type Props = {
  tagName: string
  posts: PostProps[]
}

export const AllPostsByTag: React.FC<Props> = ({ posts, tagName }) => {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1 className={styles.title}>「{tagName}」のブログ記事一覧</h1>
      </header>
      <section>
        <CardList items={posts} keyPrefix="SearchResultList" />
      </section>
    </article>
  )
}
