import React from 'react'

type Props = {
  title: string
  url: string
  body: string
}

export const Card: React.FC<Props> = ({ title, url, body }) => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="title">
          <a href={url}>{title}</a>
        </p>
        <p className="body">{body}</p>
      </div>
    </div>
  )
}
