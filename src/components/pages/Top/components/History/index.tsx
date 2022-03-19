import React, { useMemo } from 'react'

import * as styles from './History.module.css'
import { Card } from './components/Card'

import { generateBlogUrl } from '~/utils/generateBlogUrl'

type Post = {
  title: string
  slug: string
  description: string
  publishDate: string
}

type Props = {
  histories: Post[]
}

export const Histories: React.FC<Props> = ({ histories }) => {
  const Items = useMemo(
    () =>
      histories.map<React.ReactNode>(
        ({ slug, title, description, publishDate }) => (
          <li key={slug}>
            <Card
              title={title}
              url={generateBlogUrl(slug)}
              body={description}
              publishDate={publishDate}
            />
          </li>
        )
      ),
    [histories]
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
