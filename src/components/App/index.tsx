import React from 'react';
import { HashRouter } from 'react-router-dom';

import Menu from '../Menu';
import Routes from '../../routes';

const App: React.FC = () => (
  <HashRouter>
    <Menu />
    <Routes />
  </HashRouter>
);

export default App;
