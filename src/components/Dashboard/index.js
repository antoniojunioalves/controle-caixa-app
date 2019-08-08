import React from 'react'
import { connect } from 'react-redux'

import { searchMonths } from '../Actions'
import './dashboard.css'
import Month from '../Month'

const dashboard = props => {
	const { searchMonths } = props

	const renderMonths = () => {
		return (<Month />)
		// return props.months.map(month => (
		// 	<tr>
		// 		<Month />
		// 	</tr>
		// ))
	}
	return (
		<div className='dashboard-main'>
			<button onClick={() => searchMonths(6)} />
			{renderMonths()}
		</div>
	)
}

const mapStateToProps = state => ({})
// const mapStateToProps = state => ({ months: state.months })

const mapDispatchToProps = dispatch => ({
	searchMonths: (month) => dispatch(searchMonths(month))
})

export default connect(mapStateToProps, mapDispatchToProps)(dashboard)