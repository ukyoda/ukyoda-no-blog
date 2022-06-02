import React, { useMemo, ComponentProps } from 'react'

import * as styles from './History.module.css'

import { Card } from '~/components/molecules/Card'
import { CardList } from '~/components/molecules/CardList'
import { generateBlogUrl } from '~/utils/generateBlogUrl'

type HistoryItem = {
  title: string
  slug: string
  description: string
  publishDate: string
  tags?: ComponentProps<typeof Card>['tags']
}

type Props = {
  postHistories: HistoryItem[]
}

export const PostHistories: React.FC<Props> = ({ postHistories }) => {
  const items = useMemo(
    () =>
      postHistories.map(({ title, slug, description, publishDate, tags }) => ({
        title,
        url: generateBlogUrl(slug),
        body: description,
        publishDate,
        tags,
      })),
    [postHistories]
  )
  return (
    <section>
      <h2 className={styles.title}>BLOGS</h2>
      <p>技術的な気づき、勉強、趣味など適当になんか書く。</p>
      <div className={styles.histories}>
        <CardList keyPrefix="blogTop" items={items} />
      </div>
    </section>
  )
}
