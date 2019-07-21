import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../components/Dashboard/dashboard.js'

export default () => (
    <Router history={hashHistory}>
        <Route path='/dashboard' component={Dashboard} />
        <Redirect from='*' to='/dashboard' />
    </Router>
)
