import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        { this.props.children }
      </div>
    );
  }
}

export default connect()(App);
