import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render(){
    return(
      <header id="top_header" className="navbar navbar-default">
        <div className="container">
          <a className="navbar-brand logo">Pocket Guide</a>
          <nav className="nav nav-top">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/">Home</Link></li>
              <li><Link to="#">My Page</Link></li>
              <li><Link to="/plans">Planning</Link></li>
              <li><Link to="#" onClick={this.props.deleteOauthToken}>Log Out</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}