import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AuthorizedHeader extends Component {
  render(){
    return(
      <nav id="top_header">
        <ul>
          <li className="col-md-3"><Link to="/">HOME</Link></li>
          <li className="col-md-3"><Link to="#">MY PAGE</Link></li>
          <li className="col-md-3"><Link to="/plans">PLANNING</Link></li>
          <li className="col-md-3"><Link to="#" onClick={this.props.deleteOauthToken}>LOG OUT</Link></li>
        </ul>
      </nav>
    )
  }
}