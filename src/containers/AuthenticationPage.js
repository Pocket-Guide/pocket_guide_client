import React, { Component } from 'react'
import { connect } from 'react-redux';
import SignInForm from '../components/authentication/SignInForm'
import SignUpForm from '../components/authentication/SignUpForm'


function mapStateToProps(state, ownProps) {
  let pathProps = ownProps.location.pathname
  return {
    pathProps,
    state
  }
}

class AuthenticationPage extends Component{
  render(){
    let form;
    if (this.props.pathProps === "/sign_up") {
      form = < SignUpForm />
    } else {
      form = < SignInForm />
    }
    return(
      <div>
        { form }
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(AuthenticationPage);
