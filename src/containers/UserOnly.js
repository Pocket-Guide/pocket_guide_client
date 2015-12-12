import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from '../components/partials/Header'
import Authenticated from './Authenticated';


class UserOnly extends Component {
  render(){
    return(
      <div id="user_only">
        <Header deleteOauthToken={this.props.deleteOauthToken} />
        { this.props.children }
      </div>
    )
  }
}

connect()(UserOnly);

export default Authenticated(UserOnly)