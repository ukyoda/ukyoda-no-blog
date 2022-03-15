import React from 'react'

import { SectionBody, SectionTitle } from '../atoms/section'

import * as styles from './Description.module.css'

export const Description = () => (
  <section>
    <h2 className={styles.title}>WELCOME TO MY BLOG!!</h2>
    <p className={styles.paragraph}>
      このサイトはukyodaの個人ブログです。何気ない日常のこととか、技術的な何かとか、
      徒然なるままにちょっとずつ更新していきます。過度な期待はしないでください。
    </p>
  </section>
)
