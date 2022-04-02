import React from 'react'
import 'prismjs/themes/prism-okaidia.css'
import { RecoilRoot } from 'recoil'
import { ModalContainer } from './src/components/modals/Modal/useModal'

import './src/styles/global.css'

export const wrapRootElement = ({ element }) => {
  return (
    <RecoilRoot>
      {element}
      <ModalContainer />
    </RecoilRoot>
  )
}
