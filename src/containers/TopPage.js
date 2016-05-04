import React, { Component } from "react"
import { Link } from 'react-router';

export default class TopPage extends Component{
  render() {
    return (
      <div id="top">
        <div className="top_page">
          <div className="content col-md-6 col-md-offset-3">
            <h1>Pocket Guide</h1>
            <p>We recommend your Japanese travel Plan</p>
            <Link to="/plans" className="start_link">Get Started</Link>
          </div>
        </div>
        <div className="second-content">
          <h2>We suggest the best plan</h2>
          <p>We suggest the best plan by using statistic.</p>
          <p> The plan is based on redords of the past.</p>
          <p>That is to say, as time go on, we can suggest optimal plan.</p>
          <p>In addtion, locations that we suggest have been carefully selected.</p>
          <p>We guarantee a pleasant journey.</p>
        </div>
        <div className="third-content">
          <div className="third-content-box">
            <h2>Under developing specification</h2>
            <div className="col-md-6">
              <i className="fa fa-weixin fa-5x"></i>
              <h4> Chat System</h4>
              <p> we will develop chat system in order to conntact with japanese.</p>
            </div>
            <div className="col-md-6">
              <i className="fa fa-cog fa-5x"></i>
              <h4> Customize System</h4>
              <p>This syetem is to manage the plan more ueseful.For example you will make time schedule and find optimal route.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
