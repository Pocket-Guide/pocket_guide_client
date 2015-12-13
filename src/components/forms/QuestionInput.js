import React, { Component, PropTypes } from 'react';
import Choice from './Choice'

export default class QuestionInput extends Component {
  render(){
    let { content, choices, id } = this.props.question
    let choiceForms = choices.map((choice) => {
      return <Choice choice={choice} question_id={id} />
    })
    return(
      <div className="quesiton-input">
        <h1>{ content }</h1>
        <div className="choice-forms"  onChange={this.props.handleSubmitChoice}>
          { choiceForms }
        </div>
      </div>
    );
  }
}

