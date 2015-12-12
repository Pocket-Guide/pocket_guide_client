import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteOauthToken } from '../actions/users'
import { bindActionCreators } from 'redux';

export default (Component) => {
  class Authenticated extends Component {
    componentWillMount(){
      this.redirectToTop(this.props);
    }

    componentWillUpdate(nextProps) {
      this.redirectToTop(nextProps);
    }

    redirectToTop(props){
      const { current_user } = props.state;
      if (!current_user.access_token){
        this.props.history.pushState(null, '/sign_up');
      }
    }
  }

  function mapStateToProps(state, ownProps){
    return { state };
  }

  function mapDispatchToProps(dispatch) {
    return {
      deleteOauthToken: bindActionCreators(deleteOauthToken, dispatch)
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Authenticated)
}
