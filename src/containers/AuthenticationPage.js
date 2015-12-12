import React, { Component } from 'react'
import { connect } from 'react-redux';
import SignInForm from '../components/authentication/SignInForm'
import SignUpForm from '../components/authentication/SignUpForm'
import { postOauthToken, postUser } from '../actions/users';
import { bindActionCreators } from 'redux';

class AuthenticationPage extends Component{
  handleSignInSubmit(data) {
    data.grant_type = "password"
    data.scope = "tourist"
    this.props.postOauthToken(JSON.stringify(data))
  }

  handleSignUpSubmit(data) {
    data.scope = "tourist"
    this.props.postUser(JSON.stringify(data))
    .then(() => {
      this.props.history.pushState(null, '/sign_in')
    })
  }

  componentWillUpdate(nextProps){
    this.redirectToTop(nextProps);
  }

  componentWillMount() {
    this.redirectToTop(this.props);
  }

  redirectToTop(props) {
    const { current_user } = props.state;
    if (current_user.access_token) {
      this.props.history.pushState(null, '/')
    }
  }

  render(){
    let form;
    if (this.props.pathProps === "/sign_up") {
      form = < SignUpForm onSubmit={ this.handleSignUpSubmit.bind(this) }/>
    } else {
      form = < SignInForm onSubmit={ this.handleSignInSubmit.bind(this) }/>
    }
    return(
      <div>
        { form }
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let pathProps = ownProps.location.pathname
  return {
    pathProps,
    state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postOauthToken: bindActionCreators(postOauthToken, dispatch),
    postUser: bindActionCreators(postUser, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticationPage);
