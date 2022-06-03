import React, { ComponentProps, memo } from 'react'

import { Card } from '../Card'

import * as styles from './CardList.module.css'

type CardProps = ComponentProps<typeof Card>

type Props = {
  items: CardProps[]
  keyPrefix: string
}

export const CardList: React.FC<Props> = memo(({ items, keyPrefix }) => {
  const Cards = items.map((item, idx) => {
    return (
      <li key={`${keyPrefix}-${idx}`}>
        <Card {...item} />
      </li>
    )
  })
  return <ul className={styles.cardList}>{Cards}</ul>
})
