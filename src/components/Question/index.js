import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as monthsActions from '../../actions'
import './Question.css'

// Tu pode passar um type nele, ou alguma prop que tu quiser..ai tipo type = info mostra só a msg 
// e 1 botão..type = alert mostra a msg e o botão de confirmar e cancelar

class Question extends Component {
  state = {
    descricao: '',
  }

  render() {
    return (
      <div className='question-full-screen'>
        <div className='question-main' >
          <label className='question-description'>
            Deseja realmente excluir esse título ?
          </label>
          <button className='question-button2 question-button' onClick={() => { }}> Confirmar </button>
          <button className='question-button2 question-button' onClick={() => { this.props.showQuestion(false) }}> Cancelar </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(monthsActions, dispatch)

export default connect(null, mapDispatchToProps)(Question)
