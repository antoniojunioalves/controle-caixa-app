import React from 'react';

import './Question.css';

interface QuestionProps {
  descricao?: string;
  handleConfirmar?: () => void;
  handleCancelar?: () => void;
}

const Question: React.FC<QuestionProps> = ({ descricao = '', handleConfirmar = () => undefined, handleCancelar = () => undefined }) => (
  <div data-testid='question-component' className='question-full-screen'>
    <div className='question-main'>
      <label className='question-description'>{descricao}</label>
      <button data-testid='btn-confirmar' className='question-button2 question-button' onClick={handleConfirmar}> Confirmar </button>
      <button data-testid='btn-cancelar' className='question-button2 question-button' onClick={handleCancelar}> Cancelar </button>
    </div>
  </div>
);

export default Question;
