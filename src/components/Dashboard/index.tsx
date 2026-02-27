import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { removeTitulo, searchMonths, showQuestion, showRegistry } from '../../actions';
import { formatCurrencyValue, setOverflow } from '../../utils';
import { MonthData, RootState } from '../../types';

import './dashboard.css';
import Month from '../Month';
import NewRegistry from '../NewRegistry';
import Question from '../Question';

interface Summary {
  totalPagar: number;
  totalReceber: number;
  totalItens: number;
  pendentes: number;
}

const mapStateToProps = (state: RootState) => ({
  months: state.months,
  newRegistry: state.newRegistry,
  idTitulo: state.idTitulo,
});

const mapDispatchToProps = {
  searchMonths,
  showRegistry,
  removeTitulo,
  showQuestion,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

class Dashboard extends Component<Props> {
  componentDidMount(): void {
    const dataAtual = new Date();
    this.props.searchMonths(dataAtual.getMonth() + 1);
  }

  getSummary(): Summary {
    const initialValue: Summary = {
      totalPagar: 0,
      totalReceber: 0,
      totalItens: 0,
      pendentes: 0,
    };

    return this.props.months.reduce((acc, month: MonthData) => {
      const monthTotals = month.parcelas.reduce((monthAcc, parcela) => {
        const isCredito = parcela.tipoLancamento === 'C';
        const valor = Number(parcela.valor || 0);

        if (isCredito) {
          monthAcc.totalReceber += valor;
        } else {
          monthAcc.totalPagar += valor;
        }

        if (!parcela.pago) {
          monthAcc.pendentes += 1;
        }

        monthAcc.totalItens += 1;
        return monthAcc;
      }, {
        totalPagar: 0,
        totalReceber: 0,
        totalItens: 0,
        pendentes: 0,
      });

      return {
        totalPagar: acc.totalPagar + monthTotals.totalPagar,
        totalReceber: acc.totalReceber + monthTotals.totalReceber,
        totalItens: acc.totalItens + monthTotals.totalItens,
        pendentes: acc.pendentes + monthTotals.pendentes,
      };
    }, initialValue);
  }

  renderMonths(): JSX.Element[] {
    return this.props.months.map((month) => <Month key={month.mes} month={month} />);
  }

  render(): JSX.Element {
    const summary = this.getSummary();
    const saldoTotal = summary.totalReceber - summary.totalPagar;
    const { idTitulo } = this.props;

    return (
      <div className='dashboard-main'>
        <div className='dashboard-header'>
          <div className='dashboard-heading'>
            <h1>Visão Financeira Anual</h1>
            <p>Controle pagamentos, recebimentos e acompanhe pendências de forma rápida.</p>
          </div>
          <button className='dashboard-add-button' title='Incluir' onClick={() => this.props.showRegistry(true)}>
            + Novo lançamento
          </button>
        </div>

        <div className='dashboard-summary'>
          <article className='summary-card summary-card-credit'>
            <span>Total a receber</span>
            <strong>{formatCurrencyValue(summary.totalReceber)}</strong>
          </article>
          <article className='summary-card summary-card-debit'>
            <span>Total a pagar</span>
            <strong>{formatCurrencyValue(summary.totalPagar)}</strong>
          </article>
          <article className='summary-card summary-card-balance'>
            <span>Saldo consolidado</span>
            <strong>{formatCurrencyValue(saldoTotal)}</strong>
          </article>
          <article className='summary-card'>
            <span>Lançamentos pendentes</span>
            <strong>{summary.pendentes} de {summary.totalItens}</strong>
          </article>
        </div>

        <div className='dashboard-months-header'>
          <h2>Detalhamento por mês</h2>
        </div>
        <div className='dashboard-months'>{this.renderMonths()}</div>
        {this.props.newRegistry && <NewRegistry />}
        {idTitulo !== null && (
          <Question
            descricao='Deseja realmente excluir esse título ?'
            handleConfirmar={() => {
              const mesAtual = new Date().getMonth() + 1;
              this.props.removeTitulo(idTitulo, mesAtual);
              this.props.showQuestion(null);
              setOverflow('visible');
            }}
            handleCancelar={() => {
              this.props.showQuestion(null);
              setOverflow('visible');
            }}
          />
        )}
      </div>
    );
  }
}

export default connector(Dashboard);
