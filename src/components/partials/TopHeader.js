import React, { Component } from 'react';
import { Link } from 'react-router';

export default class TopHeader extends Component {
  render() {
    return(
      <header id="header" class="alt">
        <h1>Pocket Guide</h1>
        <nav id="nav">
          <ul>
            <li>Home</li>
            <li><Link to="/sign_in">Sign In</Link></li>
            <li><Link to="/sign_up">Sign Up</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}
