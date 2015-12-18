import React, { Component } from 'react'
import { connect } from 'react-redux';
import UnauthorizedHeader from '../components/partials/UnauthorizedHeader'
import AuthorizedHeader from '../components/partials/AuthorizedHeader'
import { deleteOauthToken } from '../actions/users'
import { bindActionCreators } from 'redux';
import Authenticated from './Authenticated';


class UserExcepting extends Component {
  render(){
    let { current_user } = this.props.state
    return(
      <div id="user_excepting">
        {(() => {
          if(!current_user.access_token){
            return <UnauthorizedHeader />
          } else {
            return <AuthorizedHeader />
          }
        })()}
        { this.props.children }
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
    return { state };
  }

  function mapDispatchToProps(dispatch) {
    return {

    }
  }


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserExcepting);
