import React from 'react'
import { render } from '@testing-library/react'
import Menu from '../Menu'

test('Render component Menu', () => {
  const { getByTestId } = render(<Menu />)
  const menu = getByTestId('menu-component')
  expect(menu).toBeInTheDocument()
})