import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as monthsActions from '../../actions'

import './dashboard.css'
import Month from '../Month'
import NewRegistry from '../NewRegistry'
import Question from '../Question'
import { setOverflow } from '../../utils'

class dashboard extends Component {

  constructor(props) {
    super(props)
    this.renderMonths = this.renderMonths.bind(this)
  }

  componentDidMount() {
    let dataAtual = new Date();
    // Sempre encaminha o mês atual ao abrir a tela
    this.props.searchMonths(dataAtual.getMonth() + 1)
  }

  renderMonths() {
    return this.props.months.map(month => (
      <Month key={month.mes} month={month} />
    ))
  }

  render() {
    return (
      <div className='dashboard-main'>
        <div className='dashboard-buttons'>
          <button
            title="Incluir"
            onClick={() => { this.props.showRegistry(true) }}
          >
            Incluir
          </button>
        </div>
        <div className='dashboard-months'>{this.renderMonths()}</div>
        {this.props.newRegistry && <NewRegistry />}
        {this.props.idTitulo &&
          <Question
            descricao="Deseja realmente excluir esse título ?"
            handleConfirmar={() => {
              const mesAtual = new Date().getMonth() + 1;
              this.props.removeTitulo(this.props.idTitulo, mesAtual)
              this.props.showQuestion(null)
              setOverflow('visible')
            }}
            handleCancelar={() => {
              this.props.showQuestion(null)
              setOverflow('visible')
            }}
          />
        }
      </div >
    )
  }
}

const mapStateToProps = state => ({
  months: state.months,
  newRegistry: state.newRegistry,
  idTitulo: state.idTitulo
})

const mapDispatchToProps = dispatch => bindActionCreators(monthsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(dashboard)