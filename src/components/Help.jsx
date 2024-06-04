import "../styles/Help.css"

function Help() {
    return (
      <div className="ajuda-containerHelp">
        <h1 className="titulo-ajudaHelp">AJUDA</h1>
        <h2 className="h2Help">Perguntas Frequentes:</h2>
        <h3 className="h3Help"><em>Como divulgar minha marca na Coqueiral?</em></h3>
        <div className="linha-centralizadaHelp">
          <hr className="linha-horizontalHelp" />
        </div>
        <h3 className="h3Help"><em>Todo tipo de produto pode ser divulgado?</em></h3>
        <div className="linha-centralizadaHelp">
          <hr className="linha-horizontalHelp" />
        </div>
        <h2 className="duvidasHelp"><em>Deixe as suas dúvidas aqui</em></h2>
  
        <div className="containerHelp">
          <h1 className="h1Help">Sua dúvida aqui</h1>
          <h2 className="subtituloHelp">Te responderemos por email</h2>
          <form className="formHelp" action="#">
            <div className="input-wrapperHelp">
              <label className="labelHelp" htmlFor="email">Seu email:</label>
              <input type="email" id="emailHelp" className="inputHelp" name="email" required />
            </div>
            <div className="input-wrapperHelp">
              <label className="labelHelp" htmlFor="duvida">Sua dúvida:</label>
              <textarea id="duvidaHelp" name="duvida" className="textareaHelp" rows={4} required></textarea>
            </div>
            <button type="submit" className="buttonHelp">ENVIAR</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Help;