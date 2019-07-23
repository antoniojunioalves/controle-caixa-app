import React from 'react'

import imgLogo from '../../imgs/imgLogo.png'
import './menu.css'

export default () => (
    <nav>
        <div className='principal-menu'>
            <img className='img-logo' src={imgLogo}/>
            <ul className='menu'>
                <li className='botao'><a className='texto-botao' href='#/'>Financeiro Bão</a></li>
                <li className='botao'><a className='texto-botao' href='#/dashboard'>Dashboard</a></li>
                <li className='botao'><a className='texto-botao' href='#/relatorios'>Relatórios</a></li>
            </ul>
        </div>
    </nav>    
)