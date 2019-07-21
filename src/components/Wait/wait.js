import React from 'react';
import wait from '../../imgs/MoneySplash.png';
import './wait.css';

export default () => (
    <div className="Wait">
        <header className="Wait-header"> 
            <img 
                className="Wait-logo"
                src={wait}
                alt="logo"/>
                <p>Aguarde...</p>
        </header>
    </div>
)