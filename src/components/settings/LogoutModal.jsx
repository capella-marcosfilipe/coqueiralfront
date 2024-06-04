import React from 'react';
import './Settings.css';
import { Link } from 'react-router-dom';

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="logoutModalOverlaySettings">
      <div className="logoutModalContentSettings">
        <h2>Deseja realmente sair da conta?</h2>
        <div className="logoutModalButtonsSettings">
          <button onClick={onClose} className="cancelButtonSettings">Cancelar</button>
          <Link to = "/">
         <button onClick={onConfirm} className="confirmButtonSettings">Confirmar</button> 
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
