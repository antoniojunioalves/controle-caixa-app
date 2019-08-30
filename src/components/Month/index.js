import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { formatCurrencyValue } from '../../utils'
import './month.css'

import * as monthsActions from '../../actions'

class Month extends Component {
  constructor(props) {
    super(props)
    this.handleRemoveTituloParcela = this.handleRemoveTituloParcela.bind(this)
  }

  handleRemoveTituloParcela(titulo_id, parcela_id) {
    const resposta = window.confirm('OK para excluir a PARCELA ou em CANCELAR para excluir o TÍTULO')

    const mesAtual = new Date().getMonth() + 1;
    if (resposta) {
      this.props.removeParcela(parcela_id)
    } else {
      this.props.removeTitulo(titulo_id, mesAtual)
    }
  }

  render() {
    const { totalCredito, totalDebito, mes, parcelas } = this.props.month
    const saldo = (totalCredito - totalDebito) < 0 ? 'month-line-totalizer negativo' : 'month-line-totalizer'

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
            return (
              <div key={index} className="month-line">
                <div className={monthLine}>{parcela.descricao}</div>
                <div className={monthLine}>{formatCurrencyValue(!credito ? parcela.valor : 0)}</div>
                <div className={monthLine}>{formatCurrencyValue(credito ? parcela.valor : 0)}</div>
                <div className='month-pag-rec'>
                  <button
                    onClick={() => {
                      console.log(parcela.titulo_id)
                    }}
                  >P</button>
                  <button
                    onClick={() => {
                      this.handleRemoveTituloParcela(parcela.titulo_id, parcela.parcela_id)
                    }}
                  >X</button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="month-line ultimo">
          <div className='month-line-totalizer'>Totalizador</div>
          <div className='month-line-totalizer'>{formatCurrencyValue(totalDebito)}</div>
          <div className='month-line-totalizer'>{formatCurrencyValue(totalCredito)}</div>

          <div className='month-line-totalizer'>-</div>
          <div className='month-line-totalizer'>Saldo</div>
          <div className={saldo}>{formatCurrencyValue(totalCredito - totalDebito)}</div>
        </div>
      </section>
    )
  }
}
const mapStateToProps = state => ({
  showNewRegistry: state.showNewRegistry
})

const mapDispatchToProps = dispatch => bindActionCreators(monthsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Month)