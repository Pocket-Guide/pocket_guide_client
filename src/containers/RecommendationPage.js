import React, { Component } from 'react';
import { getRecommendedLocatons } from '../actions/locations'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GoogleMaps from '../components/recommendation/GoogleMaps'
import Location from '../components/recommendation/Location'

class RecommendationPage extends Component {
  componentDidMount(){
    this.props.getRecommendedLocatons(this.props.params.planId)
  }

  render() {
    let locationList = this.props.locations.map((location) => {
      return <Location location={location} />
    })
    return(
      <div id="recommendation" >
        <div className="location_main">
          <img src="/assets/images/forest.jpg" className="location_main_pic" />
        </div>
        <h2 className="recommendation_title">
          Your Recommendation
        </h2>
        <div className="row locations_picture">
          <ul>
            { locationList }
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  let { locations }  = state.locations
  let { plan } = state
  return { locations, plan, state }
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
