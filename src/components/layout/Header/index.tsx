import { Link } from 'gatsby'
import React from 'react'

import { Container } from '../Container'

import * as styles from './Header.module.css'

export const Header: React.VFC = () => (
  <Container>
    <div className={styles.headerContents}>
      <div className={styles.brand}>
        <Link to="/">
          <p>ukyoda&#39;s Blog</p>
        </Link>
      </div>
      <div>test</div>
    </div>
  </Container>
)
