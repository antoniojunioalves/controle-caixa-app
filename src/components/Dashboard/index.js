import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as ActionsMonths from '../Actions'

import './dashboard.css'
import Month from '../Month'
import NewRegistry from '../NewRegistry'

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
            title='Incluir'
            onClick={() => { this.props.updateShowNewRegistry(true) }}
          >
            Incluir
          </button>
        </div>
        <div className='dashboard-months'>{this.renderMonths()}</div>
        {this.props.showNewRegistry && <NewRegistry />}
      </div >
    )
  }
}

const mapStateToProps = state => ({
  months: state.months,
  showNewRegistry: state.showNewRegistry
})

const mapDispatchToProps = dispatch => bindActionCreators(ActionsMonths, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(dashboard)