import React, { useRef } from 'react';
import './style.css';

export default function index() {

  const submitBtn = useRef();
  const formsSection = useRef();

  const submitClick = function (e) {
    e.preventDefault();
    formsSection.current.style.backgroundImage = 'none';
    formsSection.current.innerHTML = `
      <div class="success-message">
      <h2>Solicitação enviada com sucesso!</h2>
      <p>Em breve entraremos em contato com você por e-mail.</p>
      <p>Obrigado por escolher o Guinchei!</p>
      <a class='button' href="/">Voltar para a página inicial</a>
      </div>
    `;
  };


  return (
    <main className='main-forms'>
      <section ref={formsSection} className="forms-section">
        <h1 id="title">Solicitar Guincho</h1>
        <form className="form-flex" onSubmit={submitClick}>
          <div className="row">
            <div className="form-group ">
              <label className="label" htmlFor="name">Nome Completo </label>
              <input className="input-form" type="text" id="fname" name="fname" placeholder="Nome" required />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="email">Endereço de email </label>
              <input className="input-form" pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+" type="email" id="email" name="email" placeholder="Email" required />
            </div>
          </div>
          <div className="form-group">
            <label className="label" htmlFor="email">Imagens do caminhão </label>
            <input id="input-file" type="file" accept="image/*,.pdf" multiple="multiple" required />
          </div>
          <div className="form-group extended">
            <label className="label" htmlFor="email">Endereço do Acidente </label>
            <input className="input-form extended" type="text" name="acidente" id="acidente" placeholder="Endereço" required />
          </div>
          <p id="hint-subtitle">Todos os campos são obrigatórios</p>
          <input ref={submitBtn} type="submit" value="Pedir o Guincho" className="button" />
        </form>
      </section>
    </main>
  );
}
