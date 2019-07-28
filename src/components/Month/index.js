import React from 'react'

import './month.css'

export default () => (
    <section className='mes-principal'>        
        <div className='mes-titulo' >Junho</div>

        <div className='mes-sub-titulo'></div>
        <div className='mes-sub-titulo'>Pagar</div>
        <div className='mes-sub-titulo'>Receber</div>

        {/* Separar para poder aumentar a quantidade Fazer um loop futuramente para 
            incrementar baseado na lista retornada pelo backend */}
        <div className='linha-receita'>Antônio</div>
        <div className='linha-receita'></div>
        <div className='linha-receita'>R$: 100,00</div>

        <div className='linha-receita'>Andréia</div>
        <div className='linha-receita'></div>
        <div className='linha-receita'>R$: 100,00</div>

        <div className='linha-despesa'>Mesa 1/10</div>
        <div className='linha-despesa'>R$: 99,00</div>
        <div className='linha-despesa'></div>

        <div className='linha-despesa'>Forno 1/8</div>
        <div className='linha-despesa'>R$: 72,00</div>
        <div className='linha-despesa'></div>
        
        {/* TODO: Fixar como última linha sempre */}
        <div className='linha-totalizador'>Totalizador</div>
        <div className='linha-totalizador'>R$: 171,00</div>
        <div className='linha-totalizador'>R$: 200,00</div>        

        <div className='linha-totalizador'></div>
        <div className='linha-totalizador'></div>
        <div className='linha-totalizador'>R$: 29,00</div>        
    </section>
)