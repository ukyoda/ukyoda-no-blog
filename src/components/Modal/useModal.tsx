import React, { useCallback } from 'react'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'

import * as styles from './Modal.module.css'

import { RecoilAtomKeys, RecoilSelectorKeys } from '~/constants/RecoilKeys'
import { useMount } from '~/utils/useMount'

type Modal = {
  isOpen: boolean
  render?: () => React.ReactNode
}

const modalAtom = atom<Modal>({
  key: RecoilAtomKeys.modalState,
  default: {
    isOpen: false,
    render: undefined,
  },
})

type ModalRenderer = (dissmiss: () => void) => React.ReactNode
type ShowModalType = () => void

const modalOpenSelector = selector({
  key: RecoilSelectorKeys.modalStateSelector,
  get: ({ get }) => {
    const { isOpen } = get(modalAtom)
    return isOpen
  },
})

const modalRenderSelector = selector({
  key: RecoilSelectorKeys.modalRenderSelector,
  get: ({ get }) => get(modalAtom).render,
})

export const useModal = (render: ModalRenderer): [boolean, ShowModalType] => {
  const [{ isOpen }, setState] = useRecoilState(modalAtom)
  const dissmiss = useCallback(() => {
    setState((modalState) => ({
      ...modalState,
      isOpen: false,
    }))
  }, [setState])

  const modalRender = useCallback(() => render(dissmiss), [dissmiss, render])

  const showModal = useCallback(() => {
    setState((modalState) => ({
      ...modalState,
      isOpen: true,
    }))
  }, [setState])

  useMount(() => {
    setState((current) => ({
      ...current,
      render: modalRender,
    }))
    return () => {
      setState((current) => ({
        ...current,
        render: undefined,
      }))
    }
  })

  return [isOpen, showModal]
}

export const ModalContainer: React.FC = () => {
  const modalRender = useRecoilValue(modalRenderSelector)
  const isOpen = useRecoilValue(modalOpenSelector)
  return (
    <>
      {modalRender && isOpen && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modal}>{modalRender()}</div>
        </div>
      )}
    </>
  )
}
