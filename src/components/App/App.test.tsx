import React from 'react';
import { render } from '@testing-library/react';

import App from './index';

test('should render component', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('menu-component')).toBeTruthy();
});
