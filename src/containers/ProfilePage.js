import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getUser } from '../actions/users'

class ProfilePage extends Component {
  componentDidMount(){
    this.props.getUser(this.props.params.userId)
  }
  render(){
    return(
      <div id="profile">
        <div className="container">
          <div className="introduction">
            <div className="row">
              <div className="col-md-4">Name</div>
              <div className="col-md-8">Jun Yamada</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
  let { user } = state
  return { state }
}

function mapDispatchToProps(dispatch){
  return{
    getUser: bindActionCreators(getUser, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage)