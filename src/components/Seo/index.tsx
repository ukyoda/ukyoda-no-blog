import React from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  description?: string
  title?: string
  image?: string
}

export const Seo = ({ description, title, image }: Props) => {
  const siteTitle = title ? `${title} | ukyoda's Blog` : "ukyoda's Blog"
  const siteDescription =
    description ||
    'このブログはukyodaのブログサイトです。技術的なこととか、生活的なこととか、そういったことを書いていきます。'
  const meta = [
    { name: 'description', content: siteDescription },
    { name: 'og:title', content: siteTitle },
    { name: 'og:description', content: siteDescription },
    { name: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
  ]
  if (image) {
    meta.push({ name: 'og:image', content: image })
  }
  return (
    <Helmet htmlAttributes={{ lang: 'ja' }} title={siteTitle} meta={meta} />
  )
}
