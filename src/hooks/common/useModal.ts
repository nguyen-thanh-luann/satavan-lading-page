import { useState } from 'react'

export const useModal = (defaultVisible?: boolean) => {
  const [visible, setVisible] = useState<boolean>(defaultVisible || false)

  const closeModal = () => setVisible(false)
  const openModal = () => setVisible(true)
  const toggle = () => setVisible(!visible)

  return {
    visible,
    closeModal,
    openModal,
    toggle,
  }
}
