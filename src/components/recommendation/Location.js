import React, { Component } from 'react';
import { Link } from 'react-router';
import  Modal  from 'react-modal'

export default class Location extends Component {
  render(){
    let { id, name, captured_images, introduction, status } = this.props.location
    let { handleSubmit, index, text, cssName, openModal } = this.props
    let { url } = captured_images[0].name
    return(
      <div className="col-md-6 location-box">
        <div className="location-list-item">
          <img src={url} />
          <h3>{name}</h3>
          <div className="intro-box">{introduction}</div>
          <div className="detail-btn"><a data-introduction={introduction} data-url={url} data-name={name} onClick={openModal}>Show Detail</a></div>
          <div className={cssName}>
            <a onClick={handleSubmit} data-index={index} data-location_id={id} >{ text }</a>
          </div>
        </div>
      </div>
    )
  }
}