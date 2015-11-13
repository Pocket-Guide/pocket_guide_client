import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

let SignInForm = class SignInForm extends Component {
  render() {
    const { fields: { name, email }, handleSubmit } = this.props;
    return(
      <div id="banner">
        <div id="form-main">
          <div id="form-div">
            <h2>Sign In</h2>
            <form className="form" id="form1" onSubmit={handleSubmit}>
              <p className="name">
                <input type="text" name="name" className="feedback-input" placeholder="Name" id="name" {...name} />
              </p>
              <p class="email">
                <input type="email" name="email" className="feedback-input" id="email" placeholder="Email" {...email} />
              </p>
              <div class="submit">
              <button id="button-blue" onClick={handleSubmit}>Submit</button>
                <div class="ease"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired
};

SignInForm = reduxForm({
  form: "auth",
  fields: ["name", "email"]
})(SignInForm);

export default SignInForm;
