import React, { Component } from 'react';
import Header from "../components/partials/Header"

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    );
  }
}

