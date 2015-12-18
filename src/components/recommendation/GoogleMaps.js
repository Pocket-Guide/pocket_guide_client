import React, {PropTypes, Component} from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render';
import PlaceIndication from './PlaceIndication';
import GoogleMap from 'google-map-react';

export default class GoogleMaps extends Component {



  constructor(props) {
    super(props);
  }

  render() {
    return (
       <GoogleMap
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}>
        <PlaceIndication lat={59.955413} lng={30.337844} />
      </GoogleMap>
    );
  }
}

GoogleMaps.defaultProps ={
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
}