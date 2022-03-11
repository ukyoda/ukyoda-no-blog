import React from 'react'

type Props = {
  html: string
  className?: string
}

const PostContentOrig: React.FC<Props> = ({ className, html }: Props) => {
  return (
    // eslint-disable-next-line react/no-danger
    <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
  )
}
PostContentOrig.displayName = 'PostContent'
export const PostContent = React.memo(PostContentOrig)
