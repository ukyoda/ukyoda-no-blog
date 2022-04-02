import React, { useCallback } from 'react'

import { DissmissFunction, useModal } from '../Modal/useModal'

import * as styles from './Dialog.module.css'

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
    return <div className={styles.dialog}>{render(dissmiss)}</div>
  }, [])
  return useModal({
    backDrop,
    render: modalRender,
  })
}
