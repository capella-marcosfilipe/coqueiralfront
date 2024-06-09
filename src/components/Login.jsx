import React from 'react';
import '../styles/Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container login-formLogin">
      <h2>Faça seu Login</h2>
      <form>
        <div className="input-containerLogin">
          <input type="text" placeholder="Nome" required />
        </div>
        <div className="input-containerLogin">
          <input type="password" placeholder="Senha" required />
        </div>
        <Link to="/Home">
          <button type="submit">ENTRAR</button>
        </Link>
      </form>
      <hr />
      <p>Não tem uma conta?
        <Link to="/Cadastro">
          <button type="submit">CADASTRE-SE!</button>
        </Link>
      </p>
      <Link to="/Loginadm">
        <p>Administrador</p> 
      </Link>
    </div>
  );
};

export default Login;
