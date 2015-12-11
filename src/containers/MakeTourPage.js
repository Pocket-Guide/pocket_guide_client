import React, { Component } from 'react';
import TourForm from '../components/planning/TourForm';
import { connect } from 'react-redux';
import { postTours } from '../actions/tours';
import { bindActionCreators } from 'redux';

class MakeTourPage extends Component {
  handleTourSubmit(data){
    this.props.postTours(JSON.stringify(data))
    this.props.history.pushState(null, '/questions')
  }

  render(){
    return(
      <div id="make_tour_page">
        <TourForm onSubmit={ this.handleTourSubmit.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps(state){
  const { tour } = state;
  return { tour };
}

function mapDispatchToProps(dispatch) {
  return {
    postTours: bindActionCreators(postTours, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MakeTourPage);
