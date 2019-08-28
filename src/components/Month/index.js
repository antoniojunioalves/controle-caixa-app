import React from 'react'

import { formatCurrencyValue } from '../../utils'
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
        {month.parcelas.map((parcela, index) => {
          const credito = parcela.tipoLancamento === 'C'
          const monthLine = credito ? 'month-line-revenue' : 'month-line-expense'
          return (
            <div key={index} className="month-line">
              <div className={monthLine}>{parcela.descricao}</div>
              <div className={monthLine}>{formatCurrencyValue(!credito ? parcela.valor : 0)}</div>
              <div className={monthLine}>{formatCurrencyValue(credito ? parcela.valor : 0)}</div>
            </div>
          )
        })}
      </div>

      <div className="month-line ultimo">
        <div className='month-line-totalizer'>Totalizador</div>
        <div className='month-line-totalizer'>{formatCurrencyValue(month.totalDebito)}</div>
        <div className='month-line-totalizer'>{formatCurrencyValue(month.totalCredito)}</div>

        <div className='month-line-totalizer'>-</div>
        <div className='month-line-totalizer'>Saldo</div>
        <div className={saldo}>{formatCurrencyValue(month.totalCredito - month.totalDebito)}</div>
      </div>
    </section>
  )
}