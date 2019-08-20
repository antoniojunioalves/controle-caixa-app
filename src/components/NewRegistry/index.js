import React from 'react'

import './NewRegistry.css'
const NovoLancamento = () => {
  return (
    <div className='newregistry-main'>
      <div className='description'>
        <label>Descrição: </label>
        <input type='text' />
      </div>
      <div className='parcelas'>
        <label>Valor: </label>
        <input type='text' />
      </div>
      <div className='parcelas'>
        <label>Parcelas: </label>
        <input type='text' />
      </div>
      <div className='parcelas'>
        <label>1º Vencimento</label>
        <input type='date' />
      </div>
      <div className='pago'>
        <input type='checkbox' />
        <label>Pago</label>
      </div>
      <div>
        <input type='radio' value='D' name='TypeRegistry' checked={true} />
        <label>Débito</label>
      </div>
      <div>
        <input type='radio' value='C' name='TypeRegistry' />
        <label>Crédito</label>
      </div>
      <div>
        <button onClick={() => { }}> Salvar </button>
      </div>
    </div>
  )
}

export default NovoLancamento
