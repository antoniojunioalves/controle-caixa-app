import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as ActionsMonths from '../Actions'

import './dashboard.css'
import Month from '../Month'

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
    console.log(this.props.months)
    return this.props.months.map(month => (
      <Month key={month.mes} month={month} />
    ))
  }

  render() {
    return (
      <div className='dashboard-main'>
        <div className='dashboard-buttons'>
          <button title='Incluir'>
            Incluir
          </button>
        </div>
        <div className='dashboard-months'>{this.renderMonths()}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ months: state.months })

const mapDispatchToProps = dispatch => bindActionCreators(ActionsMonths, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(dashboard)