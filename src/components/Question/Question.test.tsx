import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Question from './index';

describe('Question', () => {
  const props = {
    descricao: 'Descrição teste',
    handleConfirmar: jest.fn(),
    handleCancelar: jest.fn(),
  };

  beforeEach(() => {
    props.handleConfirmar.mockClear();
    props.handleCancelar.mockClear();
  });

  test('Render component Question', () => {
    const { getByTestId } = render(<Question />);
    expect(getByTestId('question-component')).toBeTruthy();
  });

  test('Render component Question click confirmar', () => {
    const { getByTestId } = render(<Question {...props} />);
    const button = getByTestId('btn-confirmar');
    fireEvent.click(button);
    expect(props.handleConfirmar).toHaveBeenCalled();
  });
});
