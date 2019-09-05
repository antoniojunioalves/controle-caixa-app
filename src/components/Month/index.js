import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { formatCurrencyValue, setOverflow } from '../../utils'
import removeIcon from '../../imgs/removeIcon.png'
import payIcon from '../../imgs/payIcon.png'
import backPayIcon from '../../imgs/backPayIcon.png'
import './month.css'

import * as monthsActions from '../../actions'

class Month extends Component {

  handleRemoveTitulo(titulo_id) {
    this.props.showQuestion(titulo_id)
    setOverflow('hidden')
  }

  handlePayed(pay, idTitulo, idParcela) {
    const currentMonth = new Date().getMonth() + 1;
    this.props.payed(pay, idTitulo, idParcela, currentMonth)
  }

  render() {
    const { totalCredito, totalDebito, mes, parcelas } = this.props.month
    const saldo = (totalCredito - totalDebito) < 0 ? 'negativo' : ''

    return (
      <section className='month-main'>
        <p className='month-title' >{mes}</p>

        <div className="month-line">
          <div className='month-pag-rec'></div>
          <div className='month-pag-rec'>Pagar</div>
          <div className='month-pag-rec'>Receber</div>
          <div className='month-pag-rec'>Ações</div>
        </div>

        <div>
          {parcelas.map((parcela, index) => {
            const { tipoLancamento, descricao, valor, titulo_id, parcela_id, pago, qtdTotalParcelas, nroParcela } = parcela
            const ultimaParcela = qtdTotalParcelas == nroParcela

            const credito = tipoLancamento === 'C'
            let monthLine = 'month-line'
            monthLine += credito ? ' month-line-revenue' : ' month-line-expense'
            monthLine += pago ? ' month-line-payed' : ''
            // monthLine += ultimaParcela ? 'month-last' : ''
            console.log(monthLine)
            const descricaoCompleta = `${descricao} ${nroParcela}/${qtdTotalParcelas}`
            return (
              <div key={index} className={monthLine}>
                <div>{descricaoCompleta}</div>
                <div>{formatCurrencyValue(!credito ? valor : 0)}</div>
                <div>{formatCurrencyValue(credito ? valor : 0)}</div>

                <div className={'month-container-button'}>
                  <button
                    className='month-button'
                    onClick={() => {
                      this.handlePayed(!pago, titulo_id, parcela_id)
                    }}
                  >
                    <img src={pago ? backPayIcon : payIcon} alt="Like" />
                  </button>
                  <button
                    className='month-button'
                    onClick={() => {
                      this.handleRemoveTitulo(titulo_id)
                    }}
                  >
                    <img src={removeIcon} alt="Like" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="month-line month-line-totalizer">
          <div>Totalizador</div>
          <div>{formatCurrencyValue(totalDebito)}</div>
          <div>{formatCurrencyValue(totalCredito)}</div>
          <div></div>

          <div></div>
          <div className={saldo}>Saldo</div>
          <div className={saldo}>{formatCurrencyValue(totalCredito - totalDebito)}</div>
          <div></div>
        </div>
      </section >
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(monthsActions, dispatch)

export default connect(null, mapDispatchToProps)(Month)