import React from 'react';
import './style.css';

export default function index() {
  return (
    <main className='main-forms'>
      <section class="forms-section">
        <h1 id="title">Solicitar Guincho</h1>
        <form class="form-flex">
          <div class="row">
            <div class="form-group ">
              <label class="label" for="name">Nome Completo </label>
              <input class="input-form" type="text" id="fname" name="fname" placeholder="Nome" required/>
            </div>
            <div class="form-group">
              <label class="label" for="email">Endereço de email </label>
              <input class="input-form" pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+" type="email" id="email" name="email" placeholder="Email" required/>
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
          <input type="submit" value="Pedir o Guincho" class="button" />
        </form>
      </section>
    </main>
  );
}
