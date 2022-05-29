import React from 'react'

import * as styles from './Top.module.css'
import { Description } from './components/Description'
import { PostHistories } from './components/History'
import { Logo } from './components/Logo'

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
  return (
    <div className={styles.top}>
      <div className={styles.logoContent}>
        <Logo />
      </div>
      <div className={styles.descriptionContent}>
        <Description />
      </div>
      <div>
        <PostHistories postHistories={posts} />
      </div>
    </div>
  )
}
TopTemplateOrig.displayName = 'TopTemplate'

export const TopTemplate = React.memo(TopTemplateOrig)
