import React from 'react';
import '../styles/divulgue.css';

const Teladivulgue = () => {
  return (
    <div className="AppsDivulgue">
      <hr className="dividerDivulgue" />
      <h1 className="main-titleDivulgue">DIVULGUE NA COQUEIRAL</h1>
      <p className="info-textDivulgue">
        Quer expandir o alcance da sua loja e alcançar novos clientes? Divulgue seus produtos na <a href="#" className="highlightDivulgue">Coqueiral</a>! Nossa plataforma está aqui para ajudar você a crescer.
<p>
</p>
        Se você está interessado em anunciar seus produtos conosco, preencha o formulário abaixo com seu e-mail e uma mensagem detalhando o que você gostaria de promover. Nossa equipe entrará em contato com você em até 48 horas:
      </p>
      <div className="contact-formDivulgue">
        <input
          type="email"
          className="email-inputDivulgue"
          placeholder="Seu email"
        />
        <textarea
          className="question-inputDivulgue"
          placeholder="Sua dúvida"
        />
        <button className="send-buttonDivulgue">Enviar</button>
      </div>
      
    </div>
  );
};

export default Teladivulgue;
