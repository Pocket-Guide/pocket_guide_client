import React, { Component, PropTypes } from 'react';

export default class PlanInput extends Component {
  render(){
    let { handlePlanTitleSubmit } = this.props
    return(
      <div className="quesiton-input text-center">
        <h1>Plan Title</h1>
        <input type="text" name="content" placeholder="2016/12/1 ~ 12/3 Plan1" className="tour_content" onBlur={ handlePlanTitleSubmit } />
      </div>
    );
  }
}
