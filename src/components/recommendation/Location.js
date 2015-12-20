import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Location extends Component {
  render(){
    let { id, name, captured_images } = this.props.location
    console.log(captured_images[0].name)
    let { url } = captured_images[0].name
    return(
      <Link to={`/locations/${id}`}>
        <li>
          <img src={url} />
        </li>
      </Link>
    )
  }
}