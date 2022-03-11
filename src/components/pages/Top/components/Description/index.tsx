import React from 'react'

import { SectionBody, SectionTitle } from '../atoms/section'

import * as styles from './Description.module.css'

import { ExternalLink } from '~/components/atoms/Anchor'

export const Description = () => (
  <section>
    <SectionTitle className={styles.title}>WELCOME TO MY BLOG!!</SectionTitle>
    <SectionBody>
      <p>
        このサイトはukyodaの個人ブログです。
        気が向いたときにちょっとずつ更新していきます。過度な期待はしないでください。
      </p>
      <p>
        過去大昔に使っていたブログはこちら↓ <br />
        <ExternalLink href="http://blog.livedoor.jp/ukyoda/">
          ukyodaのブログ
        </ExternalLink>
      </p>
    </SectionBody>
  </section>
)
