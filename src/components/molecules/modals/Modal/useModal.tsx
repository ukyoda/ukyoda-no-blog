import React, { useCallback, useMemo } from 'react'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'

import { Modal, ModalBackDrop } from '../atoms'

import { RecoilAtomKeys, RecoilSelectorKeys } from '~/constants/RecoilKeys'

type Modal = {
  backDrop: boolean
  render?: () => React.ReactNode
}

const modalAtom = atom<Modal>({
  key: RecoilAtomKeys.modalAtoms,
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

const modalOptionSelector = selector({
  key: RecoilSelectorKeys.modalOptionSelector,
  get: ({ get }) => {
    const { backDrop } = get(modalAtom)
    return {
      backDrop,
    }
  },
})

export const ModalContainer: React.FC = () => {
  const modalRender = useRecoilValue(modalRenderSelector)
  const { backDrop } = useRecoilValue(modalOptionSelector)

  const View = useMemo(() => {
    if (!modalRender) {
      return null
    }
    if (backDrop) {
      return (
        <ModalBackDrop>
          <Modal>{modalRender()}</Modal>
        </ModalBackDrop>
      )
    }
    return <Modal>{modalRender()}</Modal>
  }, [backDrop, modalRender])
  return <>{View}</>
}

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
