import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (Component) => {
  class Authenticated extends Component {
    componentWillMount(){
      this.redirectToTop(this.props);
    }

    componentWillUpdate(nextProps) {
      this.redirectToTop(this.nextProps);
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

  return connect(
    mapStateToProps
  )(Authenticated)
}