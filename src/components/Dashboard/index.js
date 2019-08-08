import React from 'react'
import { connect } from 'react-redux'

import { searchMonths } from '../Actions'
import './dashboard.css'
import Month from '../Month'

const dashboard = props => {
  const { searchMonths, months } = props

  const renderMonths = () => {
    return months.map(month => (
      < Month month={month} />
    ))
  }

  return (
    <div className='dashboard-main'>
      <button onClick={() => searchMonths(6)} />
      {renderMonths()}
    </div>
  )
}

const mapStateToProps = state => ({ months: state.months })

const mapDispatchToProps = dispatch => ({
  searchMonths: (month) => dispatch(searchMonths(month))
})

export default connect(mapStateToProps, mapDispatchToProps)(dashboard)