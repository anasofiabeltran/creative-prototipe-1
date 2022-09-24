import React from 'react'
import { UseModal } from '../../hooks/useModal'
import { Modal } from '../modal'

export const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = UseModal(false);
  const [isOpenModal2, openModal2, closeModal2] = UseModal(false);
  
  return (
    <div>
        <h2>Modales</h2>
        <button onClick={openModal1}>Modal 1</button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <h3>Modal 1</h3>
            <p>Hola este es el contenido de mi modal 1</p>
        </Modal>
    </div>
  )
}
