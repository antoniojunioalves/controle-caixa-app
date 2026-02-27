import React from 'react';

import wait from '../../imgs/MoneySplash.png';
import './wait.css';

const Wait: React.FC = () => (
  <div className='wait'>
    <header className='wait-header'>
      <img className='wait-logo' src={wait} alt='logo' />
      <p>Aguarde...</p>
    </header>
  </div>
);

export default Wait;
