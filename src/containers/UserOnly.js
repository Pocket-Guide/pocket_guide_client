import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from '../components/partials/Header'
import { deleteOauthToken } from '../actions/users'
import { bindActionCreators } from 'redux';
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


function mapStateToProps(state, ownProps) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    deleteOauthToken: bindActionCreators(deleteOauthToken, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserOnly);

export default Authenticated(UserOnly)
