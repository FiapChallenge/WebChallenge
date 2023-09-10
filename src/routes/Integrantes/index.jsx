import React from 'react';
import './style.css';
import Asteriuz from '../../assets/cards/asteriuz.jpg';
import Gabs from '../../assets/cards/gabs.jpg';
import Gabsouza from '../../assets/cards/gabsouza.jpg';
import Gabgribl from '../../assets/cards/gabgribl.jpg';

export default function index() {
  return (
    <main>
      <section id="cards">
        <div className="container-cards">
          <h1>🃏 | Integrantes Cards</h1>
          <div className="card">
            <div className="image">
              <img src={Asteriuz} />
            </div>
            <div className="content">
              <h3>Augusto Barcelos Barros</h3>
              <p>RM: 98078</p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={Gabs} />
            </div>
            <div className="content">
              <h3>Gabriela Z. Alves Rodrigues</h3>
              <p>RM: 551629</p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={Gabsouza} />
            </div>
            <div className="content">
              <h3>Gabriel Souza de Queiroz</h3>
              <p>RM: 98570</p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={Gabgribl} />
            </div>
            <div className="content">
              <h3>Gabriel Gribl de Carvalho</h3>
              <p>RM: 96270</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ul className="lista-flex">
          <h1>👤| Integrantes - RM </h1>
          <li>Augusto Barcelos Barros <br /> RM: 98078</li>
          <li>Gabriela Zanotto Alves Rodrigues <br /> RM: 551629</li>
          <li>Gabriel Souza de Queiroz <br /> RM: 98570</li>
          <li>Gabriel Gribl de Carvalho <br /> RM: 96270</li>
        </ul>
      </section>
      <section>
        <div className="container-link">
          <h1>☁️| Link Repositório Github</h1>
          <a href='https://github.com/FiapChallenge/WebChallenge' target='_blank'>https://github.com/FiapChallenge/WebChallenge</a>
        </div>
      </section>
    </main>
  );
}
