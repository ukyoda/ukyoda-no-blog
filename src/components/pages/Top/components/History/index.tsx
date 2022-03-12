import React, { useMemo } from 'react'

import { Card } from './components/Card'

import { generateBlogUrl } from '~/utils/generateBlogUrl'

type Post = {
  title: string
  slug: string
  description: string
}

type Props = {
  histories: Post[]
}

export const Histories: React.FC<Props> = ({ histories }) => {
  const Items = useMemo(
    () =>
      histories.map<React.ReactNode>(({ slug, title, description }) => (
        <li key={slug} style={{ marginBottom: '10px' }}>
          <Card title={title} url={generateBlogUrl(slug)} body={description} />
        </li>
      )),
    [histories]
  )
  return (
    <section>
      <h2>更新履歴</h2>
      <ul>{Items}</ul>
    </section>
  )
}
