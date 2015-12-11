import React, { Component } from 'react';

export default class Choice extends Component {
  render(){
    let { content, id } = this.props.choice
    let { question_id } = this.props
    return(
      <div className="choice">
        <input type="radio" name="choice_id" value={id} className="radio_question" data-question_id={question_id} id={`radio_${id}`}/>
        <label htmlFor={`radio_${id}`} className='radio'><span>{ content }</span></label>
      </div>
    );
  }
}