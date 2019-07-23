import React from 'react'
import './menu.css'

export default () => (
    <nav>
        <div>
            <ul className='menu'>
                <li className='botao'><a className='texto-botao' href='#/'>Financeiro Bão</a></li>
                <li className='botao'><a className='texto-botao' href='#/dashboard'>Dashboard</a></li>
                <li className='botao'><a className='texto-botao' href='#/relatorios'>Relatórios</a></li>
            </ul>
        </div>
    </nav>    
)