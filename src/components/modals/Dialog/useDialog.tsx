import React, { useCallback } from 'react'

import { DissmissFunction, useModal } from '../Modal/useModal'
import { Dialog } from '../atoms'

type DialogRender = (dissmiss: DissmissFunction) => React.ReactNode

type UseDialogArgType = {
  render: DialogRender
  backDrop?: boolean
}
type UseDialogTypes = [boolean, () => void]

export const useDialog = ({
  render,
  backDrop,
}: UseDialogArgType): UseDialogTypes => {
  const modalRender = useCallback((dissmiss: DissmissFunction) => {
    return <Dialog>{render(dissmiss)}</Dialog>
  }, [])
  return useModal({
    backDrop,
    render: modalRender,
  })
}
