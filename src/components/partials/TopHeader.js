import React, { Component } from 'react';

export default class TopHeader extends Component {
  render() {
    return(
      <header id="header" class="alt">
        <h1>Pocket Guide</h1>
        <nav id="nav">
          <ul>
            <li>Home</li>
            <li><a href="#">Sign Up</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}
