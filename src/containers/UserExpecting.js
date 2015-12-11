import React, { Component } from 'react'
import { connect } from 'react-redux';
import TopHeader from '../components/partials/TopHeader'
import { deleteOauthToken } from '../actions/users'
import { bindActionCreators } from 'redux';
import Authenticated from './Authenticated';


class UserExpecting extends Component {
  render(){
    return(
      <div id="user_expecting">
        <TopHeader />
        { this.props.children }
      </div>
    )
  }
}

export default connect(
)(UserExpecting);
