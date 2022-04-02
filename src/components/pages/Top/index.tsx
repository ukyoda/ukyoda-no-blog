import React, { useEffect } from 'react'

import * as styles from './Top.module.css'
import { Description } from './components/Description'
import { Histories } from './components/History'
import { Logo } from './components/Logo'

import { useDialog } from '~/components/modals/Dialog/useDialog'
import { useModal } from '~/components/modals/Modal/useModal'
import { useMount } from '~/utils/useMount'

export type Post = {
  title: string
  slug: string
  description: string
  publishDate: string
}

type Props = {
  posts: Post[]
}

const TopTemplateOrig: React.FC<Props> = ({ posts }) => {
  const [, showModal2] = useModal({
    render: (dissmiss) => (
      <div>
        <h1>test</h1>
        <button type="button" onClick={dissmiss}>
          close
        </button>
      </div>
    ),
  })
  const [, showModal] = useModal({
    render: (dissmiss) => (
      <div>
        <h1>test2</h1>
        <button
          type="button"
          onClick={() => {
            dissmiss()
            showModal2()
          }}
        >
          close
        </button>
      </div>
    ),
  })
  useMount(() => {
    showModal()
  })

  return (
    <div className={styles.top}>
      <div className={styles.logoContent}>
        <Logo />
      </div>
      <div className={styles.descriptionContent}>
        <Description />
      </div>
      <div>
        <Histories histories={posts} />
      </div>
    </div>
  )
}
TopTemplateOrig.displayName = 'TopTemplate'

export const TopTemplate = React.memo(TopTemplateOrig)
