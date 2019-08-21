import React, { Component } from 'react'

import { urlAPI } from '../Actions'
import './NewRegistry.css'

const initialState = {
  descricao: 'Antônio',
  valorTotal: 500,
  qtdParcelas: 10,
  primeiroVenc: '',
  pago: false,
  tipoLancamento: 'D'
  // descricao: '',
  // valorTotal: 0,
  // qtdParcelas: 1,
  // primeiroVenc: '',
  // pago: false,
  // tipoLancamento: 'D'
}

class NovoLancamento extends Component {
  state = { ...initialState }

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
    console.log(primeiroVenc)

    const dataInsercao = new Date();

    let parcelas = []

    // const { ano, mes, dia } = { ...primeiroVenc.split('-') }
    const dataArray = { ...primeiroVenc.split('-') }
    let ano = parseInt(dataArray[0])
    let mes = parseInt(dataArray[1])
    // let dia = parseInt(dataArray[2])

    for (let i = 1; i <= qtdParcelas; i++) {
      mes += 1
      if (mes === 13) {
        ano = ano + 1
        mes = 1
      }

      const valor = valorTotal / qtdParcelas

      const parcela = {
        nroParcela: i,
        mes,
        ano,
        valor,
        pago
      }

      parcelas.push(parcela)
    }

    // const titulo = {
    //   descricao,
    //   tipoLancamento,
    //   dataInsercao,
    //   parcelas
    // }

    console.log(JSON.stringify({
      descricao,
      tipoLancamento,
      dataInsercao,
      parcelas
    }))

    fetch(urlAPI, {
      headers: {
        "Content-Type": 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        descricao,
        tipoLancamento,
        dataInsercao,
        parcelas
      })
    })
      .then((response) => { console.log('Sucesso ', response) })
      .catch((error) => { console.log('Error ', error) })
  }

  render() {
    return (
      <div className='newregistry-main' >
        <div className='description'>
          <label>Descrição: </label>
          <input
            type='text'
            value={this.state.descricao}
            onChange={(e) => { this.setState({ ...this.state, descricao: e.target.value }) }}
          />
        </div>
        <div className='parcelas'>
          <label>Valor: </label>
          <input
            type='text'
            value={this.state.valorTotal}
            onChange={(e) => { this.setState({ ...this.state, valorTotal: e.target.value }) }}
          />
        </div>
        <div className='parcelas'>
          <label>Parcelas: </label>
          <input
            type='text'
            value={this.state.qtdParcelas}
            onChange={(e) => { this.setState({ ...this.state, qtdParcelas: e.target.value }) }}
          />
        </div>
        <div className='parcelas'>
          <label>1º Vencimento</label>
          <input
            type='date'
            value={this.state.primeiroVenc}
            onChange={(e) => { this.setState({ ...this.state, primeiroVenc: e.target.value }) }}
          />
        </div>
        <div className='pago'>
          <input
            type='checkbox'
            value={this.state.pago}
            onChange={(e) => { this.setState({ ...this.state, pago: e.target.value }) }}
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
        <div>
          <button onClick={this.incluirNovoLancamento}> Salvar </button>
        </div>
      </div>
    )
  }
}

export default NovoLancamento
