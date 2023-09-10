import React from 'react';
import './Footer.css';
import GithubLogo from '../assets/icons/github.png';
import YoutubeLogo from '../assets/icons/youtube.png';
import GuincheiLogo from '../assets/GuincheiLogoRemake.png';
import { Link } from 'react-router-dom';

export default function () {
    return (
        <footer>
            <div className="footer-container">
                <div className="upper">
                    <div className="logo-footer">
                        <a href="#"><img className="grayscale" width="184" src={GuincheiLogo} alt="Logo do Guinchei" /></a>
                    </div>
                    <div className="categoria-footer">
                        <h6>Créditos</h6>
                        <a target="-blank" href="https://www.flaticon.com/br/icones-gratis/rede-social"
                            title="rede social ícones">Ícones
                            rede sociais por riajulislam - Flaticon</a>
                    </div>
                    <div className="categoria-footer">
                        <h6>Navegação</h6>
                        <Link to='/'>Home</Link>
                        <Link to='/contato'>Contato</Link>
                        <Link to='/solicitar-guincho'>Solicite o Guincho</Link>
                    </div>
                    <div className="categoria-footer">
                        <h6>Integrantes - RM</h6>
                        <a target="_blank" href="https://github.com/Asteriuz">Augusto Barcelos Barros - 98078</a>
                        <a target="_blank" href="https://github.com/gribl88">Gabriel Gribl de Carvalho - 96270</a>
                        <a target="_blank" href="https://github.com/GabrielSouzaQ">Gabriel Souza de Queiroz - 98570</a>
                        <a target="_blank" href="https://github.com/GabsBecca">Gabriela Zanotto Alves Rodrigues - 551629</a>
                    </div>
                </div>
                <div className="middle">
                    <hr />
                    <a target="-blank" href="https://github.com/Asteriuz/FiapChallenge"><img className="grayscale"
                        src={GithubLogo} alt="logo do github" /></a>
                    <a target="-blank" href="https://www.youtube.com/channel/UCTAMms64mj1OIKF6FRvfEsA"><img id="youtube"
                        className="grayscale" src={YoutubeLogo} alt="logo do youtube" /></a>
                </div>
            </div>
            <div className="bottom">
                <a id="copyright" target="-blank" href="https://github.com/FiapChallenge">
                    <p>Copyright © 2023. Guinchei, Inc.</p>
                </a>
            </div>
        </footer>
    );
}
