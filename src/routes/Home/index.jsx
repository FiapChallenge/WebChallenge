import React from 'react';
import GuinchoAzul from '../../assets/images/Towing-amico.png';
import './style.css';
import { Link } from 'react-router-dom';

export default function index() {
  return (
    <div>
      <section className='hero'>
        <div class="textos-section">
          <div className="title">
            <p>Chamou!</p>
            <p>Chegou!</p>
            <p>Guinchou!</p>
          </div>
          <div class="subtitle">
            <p>Não fique na mão. O guincho perfeito para você a poucos clicks de distância!</p>
          </div>
          <Link to={'./solicitar-guincho'} class="linkbutton">Solicite o Guincho</Link>
        </div>
        <img id="guincho-img" src={GuinchoAzul} alt="Guincho levando carro com técnico do lado" />
      </section>
      <section class="about">
        <div className="about-text">
          <h1>Sobre o Projeto</h1>
          <p class="subtitle-about">Pedir o guincho certo nunca foi tão fácil. A revolução na forma de chamar
            guinchos,
            adicionado a boa e velha IA. Confira o vídeo:</p>
        </div>
        <iframe src="https://www.youtube.com/embed/p385kZR-jL8?si=tfH15wcBWEdxm9o7" title="YouTube video player" frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </section>
    </div>

  );
}