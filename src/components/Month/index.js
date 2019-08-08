import React from 'react'

import './month.css'

export default ({ month }) => {
  return (
    <section className='month-main'>
      <div className='month-title' >{month.mes}</div>

      <div className='month-sub-title'></div>
      <div className='month-sub-title'>Pagar</div>
      <div className='month-sub-title'>Receber</div>

      {/* Separar para poder aumentar a quantidade Fazer um loop futuramente para 
            incrementar baseado na lista retornada pelo backend */}
      {
        month.parcelas.map(parcela => {
          const css = parcela.tipoLancamento === 'Crédito' ? 'month-line-revenue' : 'month-line-expense'
          return (
            <>
              <div className={css}>{parcela.descricao}</div>
              <div className={css}></div>
              <div className={css}>R$: 100,00</div>
            </>
          )
        }

        )
      }
    </section>
  )
}