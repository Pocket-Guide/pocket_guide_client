import React, { Component } from 'react'
import { connect } from 'react-redux';
import AuthorizedHeader from '../components/partials/AuthorizedHeader'
import Authenticated from './Authenticated';


class UserOnly extends Component {
  render(){
    let { id } = this.props.current_user
    return(
      <div id="user_only">
        <AuthorizedHeader deleteOauthToken={this.props.deleteOauthToken} userId={id} />
        { this.props.children }
      </div>
    )
  }
}

connect(
)(UserOnly);

export default Authenticated(UserOnly)