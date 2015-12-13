import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render(){
    return(
      <header id="top_header" class="alt">
        <h1>Pocket Guide</h1>
        <nav id="nav">
          <ul>
            <li>Home</li>
            <li><Link to="#">My Page</Link></li>
            <li><Link to="/plans">Planning</Link></li>
            <li><Link to="#" onClick={this.props.deleteOauthToken}>Log Out</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}