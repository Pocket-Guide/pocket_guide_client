import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Location extends Component {
  render(){
    let { id, name, captured_images, introduction } = this.props.location
    console.log(captured_images[0].name)
    let { url } = captured_images[0].name
    return(
      <div className="col-md-6 location-box">
        <div className="location-list-item">
          <img src={url} />
          <h3>{name}</h3>
          <div className="intro-box">{introduction}</div>
          <div className="detail-btn"><Link to={`locations/${id}`}>Show Detail</Link></div>
          <div className="decide-btn"><Link to="#">Add it</Link></div>
        </div>
      </div>
    )
  }
}