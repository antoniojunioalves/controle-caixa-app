import React from 'react';

import wait from '../../imgs/MoneySplash.png';
import './wait.css';

export default () => (
  <div className="wait">
    <header className="wait-header">
      <img
        className="wait-logo"
        src={wait}
        alt="logo" />
      <p>Aguarde...</p>
    </header>
  </div>
)