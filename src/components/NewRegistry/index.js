import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { formatCurrencyValue } from '../../utils'
import * as monthsActions from '../../actions'
import './NewRegistry.css'

class NewRegistry extends Component {
  state = {
    descricao: '',
    valorTotal: 0,
    qtdParcelas: 1,
    primeiroVenc: '',
    pago: false,
    tipoLancamento: 'D'
  }

  constructor(props) {
    super(props)
    this.alterartipoLancamento = this.alterartipoLancamento.bind(this)
    this.incluirNovoLancamento = this.incluirNovoLancamento.bind(this)
  }

  alterartipoLancamento(tipoLancamento) {
    this.setState({ ...this.state, tipoLancamento })
  }

  incluirNovoLancamento() {
    const { descricao, valorTotal, tipoLancamento, qtdParcelas, primeiroVenc, pago } = this.state

    let parcelas = []

    const dataArray = primeiroVenc.split('-')
    let ano = parseInt(dataArray[0])
    let mes = parseInt(dataArray[1])
    // let dia = parseInt(dataArray[2])

    for (let nroParcela = 1; nroParcela <= qtdParcelas; nroParcela++) {
      if (mes === 13) {
        ano = ano + 1
        mes = 1
      }

      const valor = valorTotal / qtdParcelas
      const parcela = { nroParcela, mes, ano, valor, pago }
      parcelas.push(parcela)

      mes += 1
    }

    const dataInsercao = new Date();
    this.props.addRegistry({
      descricao,
      tipoLancamento,
      dataInsercao,
      parcelas
    })
  }

  render() {
    return (
      <div className='new-registry-full-screen'>
        <div className='new-registry-main' >
          <div className='new-registry-description'>
            <label>Descrição: </label>
            <input
              type='text'
              placeholder='Informe uma descrição'
              value={this.state.descricao}
              onChange={(e) => { this.setState({ ...this.state, descricao: e.target.value }) }}
            />
          </div>
          <div className='new-registry-grid'>
            <label>Valor: </label>
            <input
              type='text'
              value={formatCurrencyValue(this.state.valorTotal)}
              onChange={(e) => { this.setState({ ...this.state, valorTotal: e.target.value }) }}
            />
          </div>
          <div className='new-registry-grid'>
            <label>Parcelas: </label>
            <input
              type='number'
              value={this.state.qtdParcelas}
              onChange={(e) => { this.setState({ ...this.state, qtdParcelas: e.target.value }) }}
            />
          </div>
          <div className='new-registry-grid'>
            <label>1º Vencimento</label>
            <input
              type='date'
              value={this.state.primeiroVenc}
              onChange={(e) => { this.setState({ ...this.state, primeiroVenc: e.target.value }) }}
            />
          </div>
          <div className='new-registry-payed'>
            <input
              type='checkbox'
              value={this.state.pago}
              onChange={(e) => { this.setState({ ...this.state, pago: !this.state.pago }) }}
            />
            <label>Pago</label>
          </div>
          <div>
            <input
              type='radio'
              value='D'
              name='TypeRegistry'
              checked={this.state.tipoLancamento === 'D'}
              onChange={(event) => { this.alterartipoLancamento(event.target.value) }}
            />
            <label>Débito</label>
          </div>
          <div>
            <input
              type='radio'
              value='C'
              name='TypeRegistry'
              checked={this.state.tipoLancamento === 'C'}
              onChange={(event) => { this.alterartipoLancamento(event.target.value) }}
            />
            <label>Crédito</label>
          </div>
          <button className='new-registry-button new-registry-button-salvar' onClick={this.incluirNovoLancamento}> Salvar </button>
          <button className='new-registry-button new-registry-button-fechar' onClick={() => { this.props.showRegistry(false) }}> Fechar </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(monthsActions, dispatch)

export default connect(null, mapDispatchToProps)(NewRegistry)
