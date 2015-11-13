import React, { Component } from 'react'
import { connect } from 'react-redux';
import SignInForm from '../components/authentication/SignInForm'
import SignUpForm from '../components/authentication/SignUpForm'

class AuthenticationPage extends Component{
  handleSignInSubmit(data) {
    console.log(data)
  }

  render(){
    let form;
    if (this.props.pathProps === "/sign_up") {
      form = < SignUpForm />
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

export default connect(
  mapStateToProps
)(AuthenticationPage);
