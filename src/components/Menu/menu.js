import React from 'react'
import './menu.css'

export default () => (
    <nav>
        <div id='navbar'>
            <ul className='menu'>
                <li className='menu-itens'><a href='#/'>Financeiro Bão</a></li>
                <li className='menu-itens'><a href='#/dashboard'>Dashboard</a></li>
                <li className='menu-itens'><a href='#/relatorios'>Relatórios</a></li>
            </ul>
        </div>
    </nav>    
)