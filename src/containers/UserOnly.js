import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from '../components/partials/Header'

class UserOnly extends Component {
  render(){
    return(
      <div id="user_only">
        <Header />
        { this.props.children }
      </div>
    )
  }
}

export default connect()(UserOnly);
