import React, { useMemo, ComponentProps } from 'react'

import * as styles from './History.module.css'

import { Card } from '~/components/molecules/Card'
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
  const Items = useMemo(
    () =>
      postHistories.map<React.ReactNode>(
        ({ slug, title, description, publishDate, tags }) => (
          <li key={slug}>
            <Card
              title={title}
              url={generateBlogUrl(slug)}
              body={description}
              publishDate={publishDate}
              tags={tags}
            />
          </li>
        )
      ),
    [postHistories]
  )
  return (
    <section>
      <h2 className={styles.title}>BLOGS</h2>
      <p>技術的な気づき、勉強、趣味など適当になんか書く。</p>
      <div className={styles.histories}>
        <ul className={styles.historyList}>{Items}</ul>
      </div>
    </section>
  )
}
