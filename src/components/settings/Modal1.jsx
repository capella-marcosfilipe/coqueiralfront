import React from 'react';
import "./Settings.css"

const Modal1 = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modalSettings">
      <div className="modal-contentSettings">
        <p className='modalPSettings'>Tem certeza que deseja apagar a conta?</p>
        <div className='modalBtnSettings'>
            <button className='formBtnSettings'onClick={onClose}>Cancelar</button>
            <button className='formBtnSettings'>Confirmar</button>
        </div>
       
      </div>
    </div>
  );
};

export default Modal1;
