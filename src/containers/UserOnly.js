import React, { Component } from 'react'
import { connect } from 'react-redux';
import AuthorizedHeader from '../components/partials/AuthorizedHeader'
import Authenticated from './Authenticated';


class UserOnly extends Component {
  render(){
    return(
      <div id="user_only">
        <AuthorizedHeader deleteOauthToken={this.props.deleteOauthToken} />
        { this.props.children }
      </div>
    )
  }
}

connect()(UserOnly);

export default Authenticated(UserOnly)