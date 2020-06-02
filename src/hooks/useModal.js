import React, { useState, useCallback } from 'react'
/*
 * Example
 * const { isOpen, openModal, closeModal, toggleModal } = useModal(false)
 */
const useTableOrder = (defaultIsOpen = false) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen)

  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggleModal = useCallback(() => {
    setIsOpen(isOpen)
  }, [isOpen])

  return { isOpen, openModal, closeModal, toggleModal }
}

export default useTableOrder
