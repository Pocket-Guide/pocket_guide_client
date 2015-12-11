import React, { Component, PropTypes } from 'react';
import { connectReduxForm } from 'redux-form';
import Input from '../forms/Input';

let SignInForm = class SignInForm extends Component {
  render() {
    const { fields: { name, email }, handleSubmit } = this.props;
    return(
      <div id="banner">
        <div id="form-main">
          <div id="form-div">
            <h2>Sign In</h2>
            <form className="form" id="form1" onSubmit={handleSubmit}>
              <Input
                field={name}
                placeholder="Name"
              />
              <Input
                field={email}
                placeholder="Email"
                type="email"
              />
              <div class="submit">
                <button id="button-blue" onClick={handleSubmit} >Submit</button>
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
};

SignInForm = connectReduxForm({
  form: "auth",
  fields: ['name', 'email'],
})(SignInForm);

export default SignInForm;
