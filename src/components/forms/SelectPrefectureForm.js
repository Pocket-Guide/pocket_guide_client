import React, { Component } from 'react';

export default class SelectPrefectureForm extends Component {
  render(){
    let { options, handlePrefectureSubmit } = this.props
    let optionElements = options.map((option) => {
      return (
        <option value={option.value}>{option.label}</option>
      )
    })
    return(
      <div className="quesiton-input">
        <h1>Where do you want to go?</h1>
        <select name="prefecture" className="select-prefecture" onChange={ handlePrefectureSubmit }>
          { optionElements }
        </select>
      </div>
    )
  }
}