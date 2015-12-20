import React, { Component } from 'react';
import { fetchLocation } from '../actions/locations'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  GoogleMaps  from '../components/recommendation/GoogleMaps'

class LocationPage extends Component {
  componentDidMount(){
    this.props.fetchLocation(this.props.params.locationId)
  }
  render(){
    let { name, introduction, captured_images } = this.props.current_location
    return(
      <div id="location-page">
        {(() =>{
          if (captured_images) {
            let { url } = captured_images[0].name
            return <img src={ url } className="location-image" width="100%" height="100%" />
          }
        })()}
        <div className="over-image"></div>
        <div className="row location-contents">
          <div className="table-location">
            <div className="location-title">
              <h2>{ name }</h2>
            </div>
            <div className="bottom-content">
              <div className="left-content">
                {(() =>{
                  if (captured_images) {
                    let { url } = captured_images[0].name
                    return <img src={ url } className="location-image-content" width="100%" height="100%" />
                  }
                })()}
                <div className="google-map">
                  <GoogleMaps />
                </div>
              </div>
              <div className="location-introduction">
                  { introduction }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let { current_location } = state.locations
  return { state, current_location }
}

function mapDispatchToProps(dispatch) {
  return{
    fetchLocation: bindActionCreators(fetchLocation, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationPage)
