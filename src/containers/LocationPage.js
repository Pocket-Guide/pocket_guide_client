import React, { Component } from 'react';
import { fetchLocation } from '../actions/locations'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class LocationPage extends Component {
  componentDidMount(){

  }
  render(){
    return(
      <div>Location page</div>
    );
  }
}

function mapStateToProps(state) {
  return { state }
}

function mapDispatchToProps(dispatch) {
  return{
    fetchLocation: bindActionCreators(fetchLocation, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationPage)
