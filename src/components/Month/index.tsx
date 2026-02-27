import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { payed, showQuestion } from '../../actions';
import { formatCurrencyValue, setOverflow } from '../../utils';
import { MonthData } from '../../types';

import backPayIcon from '../../imgs/backPayIcon.png';
import payIcon from '../../imgs/payIcon.png';
import removeIcon from '../../imgs/removeIcon.png';
import './month.css';

interface OwnProps {
  month: MonthData;
}

const mapDispatchToProps = {
  showQuestion,
  payed,
};

const connector = connect(null, mapDispatchToProps);
type Props = OwnProps & ConnectedProps<typeof connector>;

class Month extends Component<Props> {
  handleRemoveTitulo(titulo_id: number): void {
    this.props.showQuestion(titulo_id);
    setOverflow('hidden');
  }

  handlePayed(pay: boolean, idTitulo: number, idParcela: number): void {
    const currentMonth = new Date().getMonth() + 1;
    this.props.payed(pay, idTitulo, idParcela, currentMonth);
  }

  render(): JSX.Element {
    const { totalCredito, totalDebito, mes, parcelas } = this.props.month;
    const saldo = totalCredito - totalDebito < 0 ? 'negativo' : 'positivo';
    const saldoMes = totalCredito - totalDebito;

    return (
      <section className='month-main'>
        <div className='month-header'>
          <p className='month-title'>{mes}</p>
          <div className='month-balance-resume'>
            <span>Saldo do mês</span>
            <strong className={saldo}>{formatCurrencyValue(saldoMes)}</strong>
          </div>
        </div>

        <div className='month-line month-line-head'>
          <div className='month-pag-rec'></div>
          <div className='month-pag-rec'>Pagar</div>
          <div className='month-pag-rec'>Receber</div>
          <div className='month-pag-rec'>Ações</div>
        </div>

        <div>
          {parcelas.map((parcela, index) => {
            const { tipoLancamento, descricao, valor, titulo_id, parcela_id, pago, qtdTotalParcelas, nroParcela } = parcela;
            const ultimaParcela = qtdTotalParcelas === nroParcela;
            const parcelaUnica = qtdTotalParcelas === 1;

            const credito = tipoLancamento === 'C';
            let monthLine = 'month-line';
            monthLine += credito ? ' month-line-revenue' : ' month-line-expense';
            monthLine += pago ? ' month-line-payed' : '';
            monthLine += ultimaParcela && !parcelaUnica && !pago ? ' parcel-last' : '';

            const descricaoCompleta = parcelaUnica ? descricao : `${descricao} ${nroParcela}/${qtdTotalParcelas}`;
            const situacao = pago ? 'Pago' : 'Pendente';

            return (
              <div key={parcela_id || index} className={monthLine}>
                <div className='month-description'>
                  <span>{descricaoCompleta}</span>
                  <small>{situacao}</small>
                </div>
                <div>{formatCurrencyValue(!credito ? valor : 0)}</div>
                <div>{formatCurrencyValue(credito ? valor : 0)}</div>

                <div className='month-container-button'>
                  <button
                    className='month-button month-button-pay'
                    title={pago ? 'Desfazer pagamento' : 'Marcar como pago'}
                    onClick={() => this.handlePayed(!pago, titulo_id, parcela_id)}
                  >
                    <img src={pago ? backPayIcon : payIcon} alt='Mudar status do pagamento' />
                  </button>
                  <button
                    className='month-button month-button-remove'
                    title='Excluir lançamento'
                    onClick={() => this.handleRemoveTitulo(titulo_id)}
                  >
                    <img src={removeIcon} alt='Excluir lançamento' />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className='month-line month-line-totalizer'>
          <div>Total do mês</div>
          <div>{formatCurrencyValue(totalDebito)}</div>
          <div>{formatCurrencyValue(totalCredito)}</div>
          <div></div>

          <div></div>
          <div className={saldo}>Saldo</div>
          <div className={saldo}>{formatCurrencyValue(saldoMes)}</div>
          <div></div>
        </div>
      </section>
    );
  }
}

export default connector(Month);
