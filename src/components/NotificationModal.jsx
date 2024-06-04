import React, { useState } from 'react';
import '../styles/NotificationModal.css';

const NotificationModal = ({ notificacao }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
     
        <img src={notificacao}onMouseOver={openModal} id="abrirmodal" alt="notificação" className="notificacao" />
      
      {isOpen && (
        <dialog id="modal" open onClick={closeModal}>
          <h3 id="mennoti">Você não tem novas notificações.</h3>
        </dialog>
      )}
    </>
  );
};

export default NotificationModal;
