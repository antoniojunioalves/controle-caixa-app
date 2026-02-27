import React from 'react';
import { render } from '@testing-library/react';

import App from '../App';

test('should render component', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('menu-component')).toBeTruthy();
});
