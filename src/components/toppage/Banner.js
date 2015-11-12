import React, { Component } from 'react'

export default class Banner extends Component{
  render(){
    return(
      <div id="banner">
        <h2>Pocket Guide</h2>
        <p>Let's fun to tour</p>
        <ul>
          <li className="sign_up_list"><a href="/sign_up" className="button">Sign Up</a></li>
          <li><a href="#" className="button">Learn More</a></li>
        </ul>
      </div>
    );
  }
}