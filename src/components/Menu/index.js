import React from 'react';
import { Link } from 'react-router-dom';

import imgLogo from '../../imgs/imgLogo.png';
import './menu.css';

export default () => (
  <nav data-testid='menu-component'>
    <div className='menu-main'>
      <img className='img-logo' src={imgLogo} alt='Imagem da Logo' />
      <ul className='menu'>
        <li className='menu-button'>
          <Link className='menu-text-button' to='/wait'>Financeiro Bão</Link>
        </li>
        <li className='menu-button'>
          <Link className='menu-text-button' to='/dashboard'>Dashboard</Link>
        </li>
        <li className='menu-button'>
          <Link className='menu-text-button' to='/relatorios'>Relatórios</Link>
        </li>
      </ul>
    </div>
  </nav>
);
