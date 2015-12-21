import React, { Component } from "react"
import { Link } from 'react-router';

export default class TopPage extends Component{
  render() {
    return (
      <div className="top_page">
        <div className="content col-md-6 col-md-offset-3">
          <h1>Pocket Guide</h1>
          <p>We recommend your Japan travel Plan</p>
          <Link to="/plans" className="start_link">Get Started</Link>
        </div>
      </div>
    );
  }
}
