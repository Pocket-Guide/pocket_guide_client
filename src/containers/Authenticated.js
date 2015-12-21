import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteOauthToken } from '../actions/users'
import { bindActionCreators } from 'redux';
import { getCurrentUser } from '../actions/users'


export default (Component) => {
  class Authenticated extends Component {
    componentWillMount(){
      this.redirectToTop(this.props);
    }

    componentWillUpdate(nextProps) {
      this.redirectToTop(nextProps);
    }

    componentDidMount(){
      const { current_user } = this.props.state;
      if (current_user.access_token){
        this.props.getCurrentUser()
      }
    }

    redirectToTop(props){
      const { current_user } = props.state;
      if (!current_user.access_token){
        this.props.history.pushState(null, '/sign_up');
      }
    }
  }

  function mapStateToProps(state, ownProps){
    let { current_user } = state.current_user
    return { state, current_user };
  }

  function mapDispatchToProps(dispatch) {
    return {
      deleteOauthToken: bindActionCreators(deleteOauthToken, dispatch),
      getCurrentUser: bindActionCreators(getCurrentUser, dispatch)
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Authenticated)
}
