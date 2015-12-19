import React, { Component } from 'react';
import { Link } from 'react-router';

export default class UnauthorizedHeader extends Component {
  render() {
    return(
      <nav id="top_header">
        <ul>
          <li><Link to="/home">HOME</Link></li>
          <li><Link to="/sign_in">SIGN IN</Link></li>
          <li><Link to="/sign_up">SIGN UP</Link></li>
        </ul>
      </nav>
    );
  }
}
