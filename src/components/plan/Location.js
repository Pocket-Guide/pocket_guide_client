import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Location extends Component {
  render(){
    let { id, name, captured_images, introduction, status, latitude, longitude  } = this.props.location
    let { openModal } = this.props
    let { url } = captured_images[0].name
    return(
      <div className="location-box">
        <div className="location-list-item">
          <img src={url} />
          <h3>{name}</h3>
          <div className="intro-box">{introduction}</div>
          <div className="detail-btn"><a data-introduction={introduction} data-url={url} data-name={name} data-latitude={latitude} data-longitude={longitude} onClick={openModal}>Show Detail</a></div>
        </div>
      </div>

    )
  }
}