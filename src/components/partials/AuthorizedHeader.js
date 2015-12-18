import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AuthorizedHeader extends Component {
  render(){
    return(
      <nav id="top_header">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="#">My Page</Link></li>
          <li><Link to="/plans">Planning</Link></li>
          <li><Link to="#" onClick={this.props.deleteOauthToken}>Log Out</Link></li>
        </ul>
      </nav>
    )
  }
}