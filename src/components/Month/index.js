import React from 'react'

import './month.css'

export default () => (
    <section className='month-main'>        
        <div className='month-title' >Junho</div>

        <div className='month-sub-title'></div>
        <div className='month-sub-title'>Pagar</div>
        <div className='month-sub-title'>Receber</div>

        {/* Separar para poder aumentar a quantidade Fazer um loop futuramente para 
            incrementar baseado na lista retornada pelo backend */}
        <div className='month-line-revenue'>Antônio</div>
        <div className='month-line-revenue'></div>
        <div className='month-line-revenue'>R$: 100,00</div>

        <div className='month-line-revenue'>Andréia</div>
        <div className='month-line-revenue'></div>
        <div className='month-line-revenue'>R$: 100,00</div>

        <div className='month-line-expense'>Mesa 1/10</div>
        <div className='month-line-expense'>R$: 99,00</div>
        <div className='month-line-expense'></div>

        <div className='month-line-expense'>Forno 1/8</div>
        <div className='month-line-expense'>R$: 72,00</div>
        <div className='month-line-expense'></div>
        
        {/* TODO: Fixar como última linha sempre */}
        <div className='month-line-totalizer'>Totalizador</div>
        <div className='month-line-totalizer'>R$: 171,00</div>
        <div className='month-line-totalizer'>R$: 200,00</div>        

        <div className='month-line-totalizer'></div>
        <div className='month-line-totalizer'></div>
        <div className='month-line-totalizer'>R$: 29,00</div>        
    </section>
)