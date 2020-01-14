import React from 'react'

import './Question.css'

export default (props) => {
  return (
    <div data-testid='question-component' className='question-full-screen'>
      <div className='question-main' >
        <label className='question-description'>
          {props.descricao}
        </label>
        <button data-testid='btn-confirmar' className='question-button2 question-button' onClick={props.handleConfirmar}> Confirmar </button>
        <button data-testid='btn-cancelar' className='question-button2 question-button' onClick={props.handleCancelar}> Cancelar </button>
      </div>
    </div>
  )
}