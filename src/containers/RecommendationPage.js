import React, { Component } from 'react';
import { getRecommendedLocatons } from '../actions/locations'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GoogleMaps from '../components/recommendation/GoogleMaps'

class RecommendationPage extends Component {
  componentDidMount(){
    this.props.getRecommendedLocatons()
  }
  render() {
    return(
      <div id="recommendation">
        <div className="container">
          <div className="row">
            <div className="col-md-4 left-content text-left">
              <div className="google-map-area" >
                <GoogleMaps />
              </div>
            </div>
          </div>
          <div className="col-md-6 right-content">
            <div className="location-list"></div>
          </div>
        </div>
      </div>

    )
  }
}

function mapStateToProps(state){
  let locations = state
  let plan = state
  return { locations }
}

function mapDispatchToProps(dispatch){
  return {
    getRecommendedLocatons: bindActionCreators(getRecommendedLocatons, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendationPage)
