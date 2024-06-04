import React from 'react';
import "../styles/etica.css";

const Etica = () => {
  return (
    <div className="App1Etica">
      
      <hr className="dividerEtica" />
      <h1 className="main-titleEtica">NOSSA ÉTICA</h1>
      <section id="eticaEtica">
        <div className="containerEtica">
          <div className="imagemEtica">
            <img src="src/images/camisa_dos_sonho.png" alt="Imagem representativa da Coqueiral" />  </div>

          <div className="textoEtica">
            <h2>Coqueiral: Espaço para moda local</h2>
            <p>A Coqueiral é um espaço dedicado aos produtores de moda locais em Pernambuco, oferecendo visibilidade para suas produções e facilitando a venda de produtos regionais. O objetivo é conectar as pessoas com a cultura local e proporcionar uma experiência de compra segura e autêntica, fora dos grandes eventos e locais centrais.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Etica;
