import React, { ChangeEvent, Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { addRegistry, showRegistry } from '../../actions';
import { formatCurrencyValue } from '../../utils';
import { NewRegistryParcela, TipoLancamento } from '../../types';

import './NewRegistry.css';

interface NewRegistryState {
  descricao: string;
  valorTotal: number;
  qtdParcelas: number;
  primeiroVenc: string;
  pago: boolean;
  tipoLancamento: TipoLancamento;
}

const mapDispatchToProps = {
  addRegistry,
  showRegistry,
};

const connector = connect(null, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

class NewRegistry extends Component<Props, NewRegistryState> {
  state: NewRegistryState = {
    descricao: '',
    valorTotal: 0,
    qtdParcelas: 1,
    primeiroVenc: '',
    pago: false,
    tipoLancamento: 'D',
  };

  alterartipoLancamento(tipoLancamento: TipoLancamento): void {
    this.setState({ tipoLancamento });
  }

  incluirNovoLancamento(): void {
    const { descricao, valorTotal, tipoLancamento, qtdParcelas, primeiroVenc, pago } = this.state;

    if (!descricao.trim() || !primeiroVenc || valorTotal <= 0 || qtdParcelas <= 0) {
      return;
    }

    const parcelas: NewRegistryParcela[] = [];

    const dataArray = primeiroVenc.split('-');
    let ano = parseInt(dataArray[0] || '0', 10);
    let mes = parseInt(dataArray[1] || '0', 10);

    for (let nroParcela = 1; nroParcela <= qtdParcelas; nroParcela += 1) {
      if (mes === 13) {
        ano += 1;
        mes = 1;
      }

      const valor = valorTotal / qtdParcelas;
      const parcela = { nroParcela, mes, ano, valor, pago };
      parcelas.push(parcela);

      mes += 1;
    }

    const dataInsercao = new Date();
    this.props.addRegistry({
      descricao,
      tipoLancamento,
      dataInsercao,
      parcelas,
    });
  }

  render(): JSX.Element {
    return (
      <div className='new-registry-full-screen'>
        <div className='new-registry-main'>
          <div className='new-registry-description'>
            <label>Descrição: </label>
            <input
              type='text'
              placeholder='Informe uma descrição'
              value={this.state.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({ descricao: e.target.value })}
            />
          </div>
          <div className='new-registry-grid'>
            <label>Valor: </label>
            <input
              type='number'
              min='0'
              step='0.01'
              value={this.state.valorTotal}
              onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({ valorTotal: Number(e.target.value) || 0 })}
            />
            <small>{formatCurrencyValue(this.state.valorTotal)}</small>
          </div>
          <div className='new-registry-grid'>
            <label>Parcelas: </label>
            <input
              type='number'
              min='1'
              value={this.state.qtdParcelas}
              onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({ qtdParcelas: Number(e.target.value) || 1 })}
            />
          </div>
          <div className='new-registry-grid'>
            <label>1º Vencimento</label>
            <input
              type='date'
              value={this.state.primeiroVenc}
              onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({ primeiroVenc: e.target.value })}
            />
          </div>
          <div className='new-registry-payed'>
            <input
              type='checkbox'
              checked={this.state.pago}
              onChange={() => this.setState({ pago: !this.state.pago })}
            />
            <label>Pago</label>
          </div>
          <div>
            <input
              type='radio'
              value='D'
              name='TypeRegistry'
              checked={this.state.tipoLancamento === 'D'}
              onChange={(event: ChangeEvent<HTMLInputElement>) => this.alterartipoLancamento(event.target.value as TipoLancamento)}
            />
            <label>Débito</label>
          </div>
          <div>
            <input
              type='radio'
              value='C'
              name='TypeRegistry'
              checked={this.state.tipoLancamento === 'C'}
              onChange={(event: ChangeEvent<HTMLInputElement>) => this.alterartipoLancamento(event.target.value as TipoLancamento)}
            />
            <label>Crédito</label>
          </div>
          <button className='new-registry-button new-registry-button-salvar' onClick={() => this.incluirNovoLancamento()}> Salvar </button>
          <button className='new-registry-button new-registry-button-fechar' onClick={() => this.props.showRegistry(false)}> Fechar </button>
        </div>
      </div>
    );
  }
}

export default connector(NewRegistry);
