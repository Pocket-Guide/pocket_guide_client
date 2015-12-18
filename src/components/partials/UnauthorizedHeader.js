import React, { Component } from 'react';
import { Link } from 'react-router';

export default class UnauthorizedHeader extends Component {
  render() {
    return(
      <nav id="top_header">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/sign_in">Sign In</Link></li>
          <li><Link to="/sign_up">Sign Up</Link></li>
        </ul>
      </nav>
    );
  }
}
