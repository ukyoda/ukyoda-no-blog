// TODO: remove eslint-disable after the ClassComponent refactor to a FunctionalComponent
/* eslint-disable react/prefer-stateless-function */
import React from 'react'

import '~/styles/variables.css'
import '~/styles/global.css'
import Footer from './footer'
import Navigation from './navigation'
import Seo from './seo'

type Props = {
  children: React.ReactNode
}

class Template extends React.Component<Props> {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
