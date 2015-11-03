import React, { Component } from 'react';

export default class SignInForm extends Component {
  render() {
    return(
      <div id="form-main">
        <div id="form-div">
          <form className="form" id="form1">
            <p className="name">
              <input name="name" type="text" className="feedback-input" placeholder="Name" id="name" />
            </p>
            <p class="email">
              <input name="email" type="text" className="feedback-input" id="email" placeholder="Email" />
            </p>
            <div class="submit">
              <input type="submit" value="SEND" id="button-blue"/>
              <div class="ease"></div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
