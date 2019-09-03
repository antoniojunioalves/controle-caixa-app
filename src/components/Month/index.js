import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { formatCurrencyValue } from '../../utils'
import removeIcon from '../../imgs/removeIcon.png'
import payIcon from '../../imgs/payIcon.png'
import backPay from '../../imgs/backPay.png'
import './month.css'

import * as monthsActions from '../../actions'

class Month extends Component {
  constructor(props) {
    super(props)
    this.handleRemoveTitulo = this.handleRemoveTitulo.bind(this)
  }

  handleRemoveTitulo(titulo_id) {
    this.props.showQuestion(true)

    // const mesAtual = new Date().getMonth() + 1;
    // if (resposta) {
    //   this.props.removeTitulo(titulo_id, mesAtual)
    // } else {

    // }
  }

  render() {
    const { totalCredito, totalDebito, mes, parcelas } = this.props.month
    const saldo = (totalCredito - totalDebito) < 0 ? 'month-line-totalizer negativo' : 'month-line-totalizer'
    console.log(parcelas)
    return (
      <section className='month-main'>
        <div className='month-title' >{mes}</div>

        <div className="month-line">
          <div className='month-pag-rec'></div>
          <div className='month-pag-rec'>Pagar</div>
          <div className='month-pag-rec'>Receber</div>
          <div className='month-pag-rec'>Ações</div>
        </div>

        <div>
          {parcelas.map((parcela, index) => {
            const credito = parcela.tipoLancamento === 'C'
            const monthLine = credito ? 'month-line-revenue' : 'month-line-expense'
            const monthLineButton = 'month-button ' + monthLine
            return (
              <div key={index} className="month-line">
                <div className={monthLine}>{parcela.descricao}</div>
                <div className={monthLine}>{formatCurrencyValue(!credito ? parcela.valor : 0)}</div>
                <div className={monthLine}>{formatCurrencyValue(credito ? parcela.valor : 0)}</div>

                <div className={'month-container-button'}>
                  <button
                    className={monthLineButton}
                    onClick={() => {
                      console.log(parcela.titulo_id)
                    }}
                  >
                    <img src={parcela.pago ? backPay : payIcon} alt="Like" />
                  </button>
                  <button
                    className={monthLineButton}
                    onClick={() => {
                      this.handleRemoveTitulo(parcela.titulo_id)
                    }}
                  >
                    <img src={removeIcon} alt="Like" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="month-line">
          <div className='month-line-totalizer'>Totalizador</div>
          <div className='month-line-totalizer'>{formatCurrencyValue(totalDebito)}</div>
          <div className='month-line-totalizer'>{formatCurrencyValue(totalCredito)}</div>
          <div className='month-line-totalizer'>_</div>

          <div className='month-line-totalizer'>-</div>
          <div className='month-line-totalizer'>Saldo</div>
          <div className={saldo}>{formatCurrencyValue(totalCredito - totalDebito)}</div>
          <div className='month-line-totalizer'>_</div>
        </div>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(monthsActions, dispatch)

export default connect(null, mapDispatchToProps)(Month)