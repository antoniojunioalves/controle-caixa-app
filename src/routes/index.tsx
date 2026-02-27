import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import Wait from '../components/Wait';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/relatorios' element={<Wait />} />
    <Route path='/wait' element={<Wait />} />
    <Route path='*' element={<Navigate to='/wait' replace />} />
  </Routes>
);

export default AppRoutes;
