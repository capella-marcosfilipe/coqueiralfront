// src/components/Cadastro.js
import "../styles/Cadastro.css"
import React from 'react';
import { Link } from "react-router-dom";

const Cadastro = () => {
  return (
    <div className="containerCadastro">
      <h2 className="h2Cadastro">Cadastre-se</h2>
      <form id="cadastroFormCadastro">
        <div className="form-groupCadastro">
          <label className="labelCadastro" htmlFor="nome">Nome:</label>
          <input className="inputCadastro" type="text" id="nomeCadastro" name="nome" required />
        </div>
        <div className="form-groupCadastro">
          <label className="labelCadastro" htmlFor="sobrenome">Sobrenome:</label>
          <input className="inputCadastro" type="text" id="sobrenomeCadastro" name="sobrenome" required />
        </div>
        <div className="form-groupCadastro">
          <label className="labelCadastro" htmlFor="email">Email:</label>
          <input className="inputCadastro" type="email" id="emailCadastro" name="email" required />
        </div>
        <div className="form-groupCadastro">
          <label className="labelCadastro" htmlFor="senha">Senha:</label>
          <input className="inputCadastro" type="password" id="senhaCadastro" name="senha" required />
        </div>
        <div className="form-groupCadastro">
          <label  className="labelCadastro" htmlFor="confirmarSenha">Repetir Senha:</label>
          <input className="inputCadastro" type="password" id="confirmarSenhaCadastro" name="confirmarSenha" required />
        </div>
        <div className="form-groupCadastro">
          <label className="labelCadastro" htmlFor="cpf">CPF:</label>
          <input  className="inputCadastro" type="text" id="cpfCadastro" name="cpf" required pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder="000.000.000-00" />
          <small>Informe o CPF no formato 000.000.000-00</small>
        </div>
        <div className="form-groupCadastro">
          <label className="labelCadastro" htmlFor="dataNascimento">Data de Nascimento:</label>
          <input className="inputCadastro" type="date" id="dataNascimentoCadastro" name="dataNascimento" required />
        </div>
        <div className="form-groupCadastro">
          <label className="labelCadastro" >
            <input  className="inputCadastro" type="checkbox" required /> <small>Aceito os termos de uso para estar na plataforma.</small>
          </label>
        </div>
        <Link to ="/Home">
        <button type="submit" className="btn-cadastrarCadastro">CADASTRAR AGORA</button>
        </Link>
        
      </form>
      <hr />
      <Link to = "/login">
       <button className="btn-loginCadastro">JÁ TEM UMA CONTA? FAÇA SEU LOGIN</button>
      </Link>
     
    </div>
  );
};

export default Cadastro;
