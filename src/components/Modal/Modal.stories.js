import React, { useState } from 'react'
import Modal from './Modal'
import Button from '../Button'
import useModal from '../../hooks/useModal'

export default {
  title: 'Modal',
  component: Modal,
}

export const MultipleModals = () => {
  const [modalOpen, setModalOpen] = useState([false, false, false])

  const openModal = (key) => {
    setModalOpen(
      modalOpen.map((value, index) => {
        if (index === key) return true
        return value
      })
    )
  }

  const closeModal = (key) => {
    setModalOpen(
      modalOpen.map((value, index) => {
        if (index === key) return false
        return value
      })
    )
  }

  return (
    <>
      <Button onClick={() => openModal(0)} m={10} color={'primary'}>
        Abrir modal 1
      </Button>
      <Button onClick={() => openModal(1)} m={10} color={'primary'}>
        Abrir modal 2
      </Button>
      <Button onClick={() => openModal(2)} m={10} color={'primary'}>
        Abrir modal 3
      </Button>
      <Modal open={modalOpen[0]} onClose={() => closeModal(0)}>
        <h1>lorem ipsum modal 1</h1>
        <Button onClick={() => openModal(1)} m={10} color={'primary'}>
          Abrir modal 2
        </Button>
        <Button onClick={() => openModal(2)} m={10} color={'primary'}>
          Abrir modal 3
        </Button>
      </Modal>
      <Modal open={modalOpen[1]} onClose={() => closeModal(1)}>
        <h1>lorem ipsum modal 2</h1>
        <Button onClick={() => openModal(0)} m={10} color={'primary'}>
          Abrir modal 1
        </Button>
        <Button onClick={() => openModal(2)} m={10} color={'primary'}>
          Abrir modal 3
        </Button>
      </Modal>
      <Modal open={modalOpen[2]} onClose={() => closeModal(2)}>
        <h1>lorem ipsum modal 3</h1>
        <Button onClick={() => openModal(0)} m={10} color={'primary'}>
          Abrir modal 1
        </Button>
        <Button onClick={() => openModal(1)} m={10} color={'primary'}>
          Abrir modal 2
        </Button>
      </Modal>
    </>
  )
}

export const useModalHook = () => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <Button onClick={() => openModal(0)} m={10} color={'primary'}>
        Abrir modal
      </Button>
      <Modal open={isOpen} onClose={closeModal}>
        <h1>lorem ipsum modal 3</h1>
        <p>Lorem ipsum dolor sit amet</p>
      </Modal>
    </>
  )
}
