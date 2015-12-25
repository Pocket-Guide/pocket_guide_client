import React, { Component } from 'react';
import GoogleMaps from './GoogleMaps';

export default class Modal extends Component {
  render(){
    let { closeModal, preventEvent, location} = this.props
    console.log(this.props)
    let { name, introduction, url, latitude, longitude } = location
    return(
      <div className="modal-window" onClick={closeModal}>
        <div className="modal-panel" onClick={preventEvent}>
          <div id="location-page">
            <div className="row location-contents">
              <div className="table-location">
                <div className="location-title">
                  <h2>{ name }</h2>
                </div>
                <div className="bottom-content">
                  <div className="left-content">
                    <img src={ url } className="location-image-content" width="100%" height="100%" />
                    <div className="google-map">
                      <GoogleMaps latitude={latitude} longitude={longitude} />
                    </div>
                  </div>
                  <div className="location-introduction">
                      { introduction }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}