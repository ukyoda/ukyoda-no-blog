import { faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import { styled } from 'linaria/react'
import React from 'react'

const InlineBlock = styled.span`
  display: inline-block;
  font-size: 12px;
  padding: 3px 5px;
  background: #f5f5f5;
  border-radius: 3px;
  border: 1px solid #e5e5e5;

  & * + * {
    margin-left: 2px;
  }
`

type Props = {
  name: string
  pathname: string
}

export const Tag: React.FC<Props> = ({ name, pathname }) => {
  return (
    <Link to={pathname} aria-label="Blog category">
      <InlineBlock>
        <FontAwesomeIcon icon={faTag} aria-label="" />
        <span>{name}</span>
      </InlineBlock>
    </Link>
  )
}
