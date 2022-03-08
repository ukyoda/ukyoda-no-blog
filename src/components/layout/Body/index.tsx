import { styled } from 'linaria/react'
import React from 'react'

import { Container } from '../Container'

type Props = {
  children?: React.ReactChild
}

export const Body = styled(Container)`
  margin-top: 54px;
`
