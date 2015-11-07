import React, { Component } from 'react';

export default class SignInForm extends Component {
  render() {
    return(
      <div id="banner">
        <div id="form-main">
          <div id="form-div">
            <h2>Sign In</h2>
            <form className="form" id="form1">
              <p className="name">
                <input name="name" type="text" className="feedback-input" placeholder="Name" id="name" />
              </p>
              <p class="email">
                <input name="email" type="text" className="feedback-input" id="email" placeholder="Email" />
              </p>
              <p class="password">
                <input name="password" type="text" className="feedback-input" id="password" placeholder="Password" />
              </p>
              <p class="password_confirmation">
                <input name="password_confirmation" type="text" className="feedback-input" id="password" placeholder="Password Confirmation" />
              </p>
              <div class="submit">
                <input type="submit" value="SEND" id="button-blue"/>
                <div class="ease"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
