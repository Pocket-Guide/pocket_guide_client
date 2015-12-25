import React, {PropTypes, Component} from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render';
import PlaceIndication from './PlaceIndication';
import GoogleMap from 'google-map-react';

export default class GoogleMaps extends Component {



  constructor(props) {
    super(props);
  }

  render() {
    let { latitude, longitude } = this.props
    return (
       <GoogleMap
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}>
        <PlaceIndication lat={latitude} lng={longitude} />
      </GoogleMap>
    );
  }
}

GoogleMaps.defaultProps ={
    center: {lat: 35.681382, lng: 139.766084},
    zoom: 12,
    greatPlaceCoords: {lat: 35.681382, lng: 139.766084}
}