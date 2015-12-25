import React, { Component } from 'react';
import { Link } from 'react-router';

export default class UnauthorizedHeader extends Component {
  render() {
    return(
      <nav id="top_header">
        <ul>
          <li className="col-md-4"><Link to="/home">HOME</Link></li>
          <div className="col-md-8">
            <li className="col-md-3 col-md-offset-6"><Link to="/sign_in">SIGN IN</Link></li>
            <li className="col-md-3"><Link to="/sign_up">SIGN UP</Link></li>
          </div>
        </ul>
      </nav>
    );
  }
}
