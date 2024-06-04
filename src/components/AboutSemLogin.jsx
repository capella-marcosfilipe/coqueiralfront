// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/About.css";
import Logo from "../images/logoGrande.png";

const AboutSemLogin = () => {
  return (
    <section className="about">
      <div className="about_title">
        <h1>SOBRE NÓS</h1>
      </div>

      <div className="about_description">
        <div className="description_logo">
          <img src={Logo} alt="logo"></img>
        </div>

        <div className="description_text">
          <p id="space">
            Criada em 2023, a Coqueiral é uma plataforma web de e-commerce
            voltado para o comércio local, mais especificamente o comércio no
            perímetro do estado de Pernambuco. Visamos oferecer aqui um espaço
            para que os produtores locais possam mostrar o que fazem e
            democratizar, assim, o acesso à moda e à cultura local.
          </p>

          <p>
            Buscamos oferecer para as pessoas que estejam interessadas em fazer
            um consumo consciente uma proximidade com àqueles que produzem o que
            elas estão vestindo. Quando veste-se coqueiral, você está vestindo,
            além do tecido, uma ideia. Você pode vender aqui também. Faça seu
            cadastro e comece a mostrar a sua arte na Coqueiral. Queremos que
            você seja visto. Queremos mostrar moda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSemLogin;
