import React, { useState } from "react";
import { Link } from "react-router-dom";

const Loginadm = () => {
  // Estados para os campos de entrada
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");

 
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Matrícula:", matricula);
    console.log("Senha:", senha);
  };

  return (
    <div className="container login-formLogin">
      <h2>ADMINISTRADOR</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-containerLogin">
          <input
            type="text"
            placeholder="Matricula"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            required/>
        </div>
        <div className="input-containerLogin">
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required 
          />
        </div>
        <Link to="/Products"> <button type="submit">ENTRAR</button></Link>
      </form>
    </div>
  );
};

export default Loginadm;
