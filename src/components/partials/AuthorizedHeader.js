import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AuthorizedHeader extends Component {
  render(){
    let { userId } = this.props
    return(
      <div id="top_header">
        <div className="container header-box">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to={`/users/${userId}`}>MY PAGE</Link></li>
            <li><Link to="/plans">PLANNING</Link></li>
            <li className="pull-right"><Link to="#" onClick={this.props.deleteOauthToken}>LOG OUT</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}