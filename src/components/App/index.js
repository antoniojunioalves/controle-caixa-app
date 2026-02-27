import React from 'react';
import { HashRouter } from 'react-router-dom';

import Menu from '../Menu';
import Routes from '../../routes';

export default () => (
  <HashRouter>
    <Menu />
    <Routes />
  </HashRouter>
);
