import React from 'react';
import { Link } from 'react-router-dom';

export default function index() {
    return (
        <div id='erro404'>
            <div>
                <h1>ERRO 404</h1>
                <h2>Esta página não existe</h2>
            </div>
            <Link to='/'>Voltar para a página inicial</Link>
        </div>
    );
}
