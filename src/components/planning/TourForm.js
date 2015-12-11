import React, { Component, PropTypes } from 'react';
import { connectReduxForm } from 'redux-form';

let TourForm = class TourForm extends Component {
  render(){
    const {fields: { content }, handleSubmit} = this.props;
    return(
      <div className="tour_form_container center-block">
        <form className="tour_form">
          <h2>Plan Title</h2>
          <input type="text" name="content" placeholder="2016/12/1 ~ 12/3 Plan1" className="tour_content" defaultValue="" {...content} />
          <div class="submit">
            <button className="btn btn-tour" onClick={handleSubmit} >Answer Some Questions >> </button>
          </div>
        </form>
      </div>
    );
  }
}


TourForm.PropTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

TourForm = connectReduxForm({
  form: "tour",
  fields: ["content"]
})(TourForm);

export default TourForm;
