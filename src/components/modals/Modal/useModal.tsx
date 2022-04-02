import React, { useCallback } from 'react'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'

import * as styles from './Modal.module.css'

import { RecoilAtomKeys, RecoilSelectorKeys } from '~/constants/RecoilKeys'

type Modal = {
  backDrop: boolean
  render?: () => React.ReactNode
}

const modalAtom = atom<Modal>({
  key: RecoilAtomKeys.modalState,
  default: {
    backDrop: false,
    render: undefined,
  },
})

export type DissmissFunction = () => void
type ModalRenderer = (dissmiss: DissmissFunction) => React.ReactNode
type ShowModalType = () => void

const modalOpenSelector = selector({
  key: RecoilSelectorKeys.modalStateSelector,
  get: ({ get }) => {
    const { render } = get(modalAtom)
    return !!render
  },
})

const modalRenderSelector = selector({
  key: RecoilSelectorKeys.modalRenderSelector,
  get: ({ get }) => get(modalAtom).render,
})

type UseModalArgs = {
  render: ModalRenderer
  backDrop?: boolean
}

export const useModal = ({
  render,
  backDrop,
}: UseModalArgs): [boolean, ShowModalType] => {
  const [, setState] = useRecoilState(modalAtom)
  const isOpen = useRecoilValue(modalOpenSelector)
  const dissmiss = useCallback(() => {
    setState((modalState) => ({
      ...modalState,
      render: undefined,
    }))
  }, [setState])

  const modalRender = useCallback(() => render(dissmiss), [dissmiss])

  const showModal = useCallback(() => {
    setState((modalState) => ({
      ...modalState,
      render: modalRender,
      backDrop: !!backDrop,
    }))
  }, [backDrop, modalRender, setState])

  return [isOpen, showModal]
}

export const ModalContainer: React.FC = () => {
  const modalRender = useRecoilValue(modalRenderSelector)
  return (
    <>
      {modalRender && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modal}>{modalRender()}</div>
        </div>
      )}
    </>
  )
}
