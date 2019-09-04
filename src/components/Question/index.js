import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as monthsActions from '../../actions'
import './Question.css'

class Question extends Component {
  state = {
    descricao: '',
  }

  render() {
    return (
      <div className='question-full-screen'>
        <div className='question-main' >
          <label className='question-description'>
            {this.props.descricao}
          </label>
          <button className='question-button2 question-button' onClick={this.props.handleConfirmar}> Confirmar </button>
          <button className='question-button2 question-button' onClick={this.props.handleCancelar}> Cancelar </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(monthsActions, dispatch)

export default connect(null, mapDispatchToProps)(Question)
