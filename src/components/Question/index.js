import React from 'react'

import './Question.css'

export default (props) => {
  return (
    <div className='question-full-screen'>
      <div className='question-main' >
        <label className='question-description'>
          {props.descricao}
        </label>
        <button className='question-button2 question-button' onClick={props.handleConfirmar}> Confirmar </button>
        <button className='question-button2 question-button' onClick={props.handleCancelar}> Cancelar </button>
      </div>
    </div>
  )
}