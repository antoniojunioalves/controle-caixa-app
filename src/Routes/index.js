import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../components/Dashboard'
import Wait from '../components/Wait'

export default () => (
  <Router history={hashHistory}>
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/relatorios' component={Wait} />
    <Route path='/wait' component={Wait} />
    <Redirect from='*' to='/wait' />
  </Router>
)