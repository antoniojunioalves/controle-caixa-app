import React, { Component } from 'react'
import { connect } from 'react-redux'

import { searchMonths } from '../Actions'
import './dashboard.css'
import Month from '../Month'

class dashboard extends Component {
  constructor(props) {
    super(props)
    this.renderMonths = this.renderMonths.bind(this)
  }

  componentDidMount() {
    this.props.searchMonths(6)
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
        {this.renderMonths()}
      </div>
    )
  }
}

const mapStateToProps = state => ({ months: state.months })

const mapDispatchToProps = dispatch => ({
  searchMonths: (month) => dispatch(searchMonths(month))
})

export default connect(mapStateToProps, mapDispatchToProps)(dashboard)