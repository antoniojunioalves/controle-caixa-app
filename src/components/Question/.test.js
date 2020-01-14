import React from 'react';

import { render, fireEvent } from '@testing-library/react'

import Question from '../Question'

describe('Agrupador ',() => {
  var props

  beforeEach(() =>{
    props = {
      descricao: 'Descrição teste',
      handleConfirmar: jest.fn()
    }
    console.log('BeforeEach')
  })

  test('Render component Question', () => {
    const { getByTestId } = render(<Question />)
    expect(getByTestId('question-component')).toBeInTheDocument()
  })

  test('Render component Question click confirmar', () => {
    const { getByTestId, debug } = render(<Question {...props} />)
    const button = getByTestId('btn-confirmar')
    debug(button)
    fireEvent.click(button)
    expect(props.handleConfirmar).toBeCalled()
  })

})
