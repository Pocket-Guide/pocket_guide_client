import React, { Component } from 'react'
import SignInForm from '../components/authentication/SignInForm'
import SignUpForm from '../components/authentication/SignUpForm'

export default class AuthenticationPage extends Component{
  render(){
    console.log(this.props)
    return(
      <div>
        <SignUpForm />
      </div>
    );
  }
}