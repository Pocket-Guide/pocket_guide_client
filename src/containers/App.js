import React, { Component } from 'react';
import Header from "../components/partials/Header"
import Banner from "../components/toppage/Banner"
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
      </div>
    );
  }
}

