import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Menu from '../Menu';

test('Render component Menu', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Menu />
    </MemoryRouter>,
  );

  expect(getByTestId('menu-component')).toBeTruthy();
});
