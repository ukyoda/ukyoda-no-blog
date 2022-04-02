import React from 'react'
import 'prismjs/themes/prism-okaidia.css'
import { RecoilRoot } from 'recoil'
import { ModalContainer } from './src/components/modals/Modal/useModal'
import { Header } from './src/components/layout/Header'
import { Footer } from './src/components/layout/Footer'
import { styled } from 'linaria/react'

import './src/styles/global.css'

export const wrapRootElement = ({ element }) => {
  return (
    <RecoilRoot>
      <Header />
      <Layout>{element}</Layout>
      <Footer />
      <ModalContainer />
    </RecoilRoot>
  )
}

const Layout = styled.div`
  min-height: calc(100% - 85px);
`
