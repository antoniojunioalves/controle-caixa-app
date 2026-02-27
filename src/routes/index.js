import React from 'react';
import * as RouterDom from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import Wait from '../components/Wait';

const isRouterV6 = Boolean(RouterDom.Routes);

const renderRoutesV6 = () => {
  const { Navigate, Route, Routes } = RouterDom;

  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/relatorios' element={<Wait />} />
      <Route path='/wait' element={<Wait />} />
      <Route path='*' element={<Navigate to='/wait' replace />} />
    </Routes>
  );
};

const renderRoutesV5 = () => {
  const { Redirect, Route, Switch } = RouterDom;

  return (
    <Switch>
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/relatorios' component={Wait} />
      <Route path='/wait' component={Wait} />
      <Redirect from='*' to='/wait' />
    </Switch>
  );
};

export default () => (isRouterV6 ? renderRoutesV6() : renderRoutesV5());
