import React from 'react';
import { Link } from 'react-router-dom';

import imgLogo from '../../imgs/imgLogo.png';
import './menu.css';

export default () => (
  <nav className='menu-nav' data-testid='menu-component'>
    <div className='menu-main'>
      <div className='menu-brand'>
        <img className='img-logo' src={imgLogo} alt='Imagem da Logo' />
        <div className='menu-brand-text'>
          <strong>Controle Caixa</strong>
          <span>Planejamento financeiro mensal</span>
        </div>
      </div>
      <ul className='menu'>
        <li>
          <Link className='menu-link' to='/wait'>Financeiro Bão</Link>
        </li>
        <li>
          <Link className='menu-link' to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link className='menu-link' to='/relatorios'>Relatórios</Link>
        </li>
      </ul>
    </div>
  </nav>
);
