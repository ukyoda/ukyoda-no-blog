import React, { ComponentProps, memo } from 'react'

import { Card } from '../Card'

import * as styles from './CardList.module.css'

type Props = {
  items: ComponentProps<typeof Card>[]
  keyPrefix: string
}

export const CardList: React.FC<Props> = memo(({ items, keyPrefix }) => {
  const Cards = items.map((item, idx) => {
    return (
      <li key="CardList-idx">
        <Card {...item} key={`${keyPrefix}-${idx}`} />
      </li>
    )
  })
  return <ul className={styles.cardList}>{Cards}</ul>
})
