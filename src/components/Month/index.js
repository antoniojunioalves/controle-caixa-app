import React from 'react'

import './month.css'

export default ({ month }) => {
  const saldo = (month.totalCredito - month.totalDebito) < 0 ? 'month-line-totalizer negativo' : 'month-line-totalizer'

  return (
    <section className='month-main'>
      <div className='month-title' >{month.mes}</div>

      <div className="month-line">
        <div className='month-pag-rec'></div>
        <div className='month-pag-rec'>Pagar</div>
        <div className='month-pag-rec'>Receber</div>
      </div>

      <div>
        {month.parcelas.map(parcela => {
          const credito = parcela.tipoLancamento === 'C'
          const monthLine = credito ? 'month-line-revenue' : 'month-line-expense'
          return (
            <div key={parcela._id} className="month-line">
              <div className={monthLine}>{parcela.descricao}</div>
              <div className={monthLine}>{(!credito ? parcela.valor : 0).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</div>
              <div className={monthLine}>{(credito ? parcela.valor : 0).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</div>
            </div>
          )
        })}
      </div>

      <div className="month-line ultimo">
        <div className='month-line-totalizer'>Totalizador</div>
        <div className='month-line-totalizer'>{month.totalDebito.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</div>
        <div className='month-line-totalizer'>{month.totalCredito.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</div>

        <div className='month-line-totalizer'>-</div>
        <div className='month-line-totalizer'>Saldo</div>
        <div className={saldo}>{(month.totalCredito - month.totalDebito).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</div>
      </div>
    </section>
  )
}