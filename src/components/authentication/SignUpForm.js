import React, { Component, PropTypes } from 'react';
import { connectReduxForm } from 'redux-form';
import Input from '../forms/Input';


class SignUpForm extends Component {
  render() {
    const { fields: { name, email, password, password_confirmation }, handleSubmit } = this.props;
    return(
      <div id="banner">
        <div id="form-main">
          <div id="form-div">
            <h2>Sign Up</h2>
            <form className="form" id="form1">
              <Input
                field={name}
                placeholder="Name"
              />
              <Input
                field={email}
                placeholder="Email"
                type="email"
              />
              <Input
                field={password}
                placeholder="Password"
                type="password"
              />
              <Input
                field={password_confirmation}
                placeholder="Password Confirmation"
                type="password"
              />
              <div class="submit">
                <input type="submit" value="SEND" id="button-blue" onClick={handleSubmit} />
                <div class="ease"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

SignUpForm = connectReduxForm({
  form: "auth",
  fields: ['name', 'email', 'password', 'password_confirmation'],
})(SignUpForm);

export default SignUpForm;
