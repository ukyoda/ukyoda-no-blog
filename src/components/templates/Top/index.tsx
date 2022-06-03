import React, { useMemo } from 'react'

import * as styles from './Top.module.css'
import { PostHistories } from './components/History'
import { Logo } from './components/Logo'

import { CardList } from '~/components/molecules/CardList'
import { generateBlogUrl } from '~/utils/generateBlogUrl'

export type Post = {
  title: string
  slug: string
  description: string
  publishDate: string
  tags?: {
    name: string
    pathname: string
  }[]
}

type Props = {
  posts: Post[]
}

const TopTemplateOrig: React.FC<Props> = ({ posts }) => {
  const items = useMemo(() => {
    return posts.map(({ title, slug, description, publishDate, tags }) => ({
      title,
      url: generateBlogUrl(slug),
      body: description,
      publishDate,
      tags,
    }))
  }, [posts])
  return (
    <div className={styles.top}>
      <section className={styles.logoContent}>
        <Logo />
      </section>
      <section className={styles.descriptionContent}>
        <h2 className={styles.title}>WELCOME TO MY BLOG!!</h2>
        <p className={styles.paragraph}>
          このサイトはukyodaの個人ブログです。何気ない日常のこととか、技術的な何かとか、
          徒然なるままにちょっとずつ更新していきます。過度な期待はしないでください。
        </p>
      </section>
      <section className={styles.posts}>
        <h2 className={styles.title}>MY POSTS</h2>
        <p className={styles.paragraph}>
          技術的な気づき、勉強、趣味など適当になんか書く。
        </p>
        <div>
          <CardList keyPrefix="blogTop" items={items} />
        </div>
      </section>
    </div>
  )
}
TopTemplateOrig.displayName = 'TopTemplate'

export const TopTemplate = React.memo(TopTemplateOrig)
