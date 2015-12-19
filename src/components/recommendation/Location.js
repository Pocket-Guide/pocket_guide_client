import React, { Component } from 'react';

export default class Location extends Component {
  render(){
    let { name, captured_images } = this.props.location
    console.log(captured_images[0].name)
    let { url } = captured_images[0].name
    return(
      <li>
        <img src={url} />
      </li>
    )
  }
}