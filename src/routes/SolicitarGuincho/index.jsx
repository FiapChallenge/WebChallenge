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
      <section ref={formsSection} class="forms-section">
        <h1 id="title">Solicitar Guincho</h1>
        <form class="form-flex">
          <div class="row">
            <div class="form-group ">
              <label class="label" for="name">Nome Completo </label>
              <input class="input-form" type="text" id="fname" name="fname" placeholder="Nome" required />
            </div>
            <div class="form-group">
              <label class="label" for="email">Endereço de email </label>
              <input class="input-form" pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+" type="email" id="email" name="email" placeholder="Email" required />
            </div>
          </div>
          <div class="form-group">
            <label class="label" for="email">Imagens do caminhão </label>
            <input id="input-file" type="file" accept="image/*,.pdf" multiple="multiple" required />
          </div>
          <div class="form-group extended">
            <label class="label" for="email">Endereço do Acidente </label>
            <input class="input-form extended" type="text" name="acidente" id="acidente" placeholder="Endereço" required />
          </div>
          <p id="hint-subtitle">Todos os campos são obrigatórios</p>
          <input ref={submitBtn} onClick={submitClick} type="submit" value="Pedir o Guincho" class="button" />
        </form>
      </section>
    </main>
  );
}
