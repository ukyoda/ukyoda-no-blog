import React from 'react'

type Props = {
  html: string
  className?: string
}

export const PostContent = ({ className, html }: Props) => {
  return (
    // eslint-disable-next-line react/no-danger
    <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
  )
}
