import React from 'react'

import './month.css'

export default ({ month }) => {
  return (
    <section className='month-main'>
      <div className='month-title' >{month.mes}</div>

      <div className="month-div-line">
        <div className='month-sub-title'></div>
        <div className='month-sub-title'>Pagar</div>
        <div className='month-sub-title'>Receber</div>
      </div>

      {month.parcelas.map(parcela => {
        const credito = parcela.tipoLancamento === 'C'
        const monthLine = credito ? 'month-line-revenue' : 'month-line-expense'
        return (
          <div key={parcela.descricao} className="month-div-line">
            <div className={monthLine}>{parcela.descricao}</div>
            <div className={monthLine}>{!credito ? parcela.valor : 0}</div>
            <div className={monthLine}>{credito ? parcela.valor : 0}</div>
          </div>
        )
      })}

      <div className="month-div-line">
        <div className='month-line-totalizer'>Totalizador</div>
        <div className='month-line-totalizer'>{month.totalDebito}</div>
        <div className='month-line-totalizer'>{month.totalCredito}</div>

        <div className='month-line-totalizer'></div>
        <div className='month-line-totalizer'></div>
        <div className='month-line-totalizer'>R$: {month.totalCredito - month.totalDebito}</div>
      </div>
    </section>
  )
}