import React from 'react'

import imgLogo from '../../imgs/imgLogo.png'
import './menu.css'

export default () => (
  <nav data-testid='menu-component'>
    <div className='menu-main'>
      <img className='img-logo' src={imgLogo} alt='Imagem da Logo' />
      <ul className='menu'>
        <li className='menu-button'><a className='menu-text-button' href='#/'>Financeiro Bão</a></li>
        <li className='menu-button'><a className='menu-text-button' href='#/dashboard'>Dashboard</a></li>
        <li className='menu-button'><a className='menu-text-button' href='#/relatorios'>Relatórios</a></li>
      </ul>
    </div>
  </nav>
)