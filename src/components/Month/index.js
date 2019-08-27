import React from 'react'

import './month.css'

const convertValueCurr = (value) => {
  let valueCurrency = value ? value : 0

  return valueCurrency.toLocaleString(
    'pt-BR',
    {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL'
    })
}

export default ({ month }) => {
  const saldo = (month.totalCredito - month.totalDebito) < 0 ? 'month-line-totalizer negativo' : 'month-line-totalizer'

  return (
    <section className='month-main'>
      <div className='month-title' >{month.mes}</div>

      <div className="month-line">
        <div className='month-pag-rec'></div>
        <div className='month-pag-rec'>Pagar</div>
        <div className='month-pag-rec'>Receber</div>
        <div className='month-pag-rec'>Ações</div>
      </div>

      <div>
        {month.parcelas.map(parcela => {
          const credito = parcela.tipoLancamento === 'C'
          const monthLine = credito ? 'month-line-revenue' : 'month-line-expense'
          // PREENCHER O parcela._id no backend - para parar de acontecer o erro no console de key
          return (
            <div key={parcela._id} className="month-line">
              <div className={monthLine}>{parcela.descricao}</div>
              <div className={monthLine}>{convertValueCurr(!credito ? parcela.valor : 0)}</div>
              <div className={monthLine}>{convertValueCurr(credito ? parcela.valor : 0)}</div>
            </div>
          )
        })}
      </div>

      <div className="month-line ultimo">
        <div className='month-line-totalizer'>Totalizador</div>
        <div className='month-line-totalizer'>{convertValueCurr(month.totalDebito)}</div>
        <div className='month-line-totalizer'>{convertValueCurr(month.totalCredito)}</div>

        <div className='month-line-totalizer'>-</div>
        <div className='month-line-totalizer'>Saldo</div>
        <div className={saldo}>{convertValueCurr(month.totalCredito - month.totalDebito)}</div>
      </div>
    </section>
  )
}