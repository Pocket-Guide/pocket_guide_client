import React, { Component } from 'react';
import { getRecommendedLocatons } from '../actions/locations'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GoogleMaps from '../components/recommendation/GoogleMaps'
import Location from '../components/recommendation/Location'
import { Link } from 'react-router';
import { associateLocationToPlan, deleteAssociationFromPlan, createPlan } from '../actions/locations';
import  Modal  from '../components/recommendation/Modal'

class RecommendationPage extends Component {
  constructor(props){
    super(props)
    this.state = {modalIsOpen: false}
  }
  componentDidMount(){
    this.props.getRecommendedLocatons(this.props.params.planId)
  }

  handleAssociateLocation(e){
    let index = e.target.dataset.index
    this.props.associateLocationToPlan(index)
  }

  deleteAssociation(e){
    let index = e.target.dataset.index
    this.props.deleteAssociationFromPlan(index)
  }

  handleCreatePlan(){
    let planId = this.props.params.planId
    let data = {
      locations: this.props.locations
    }
    this.props.createPlan(JSON.stringify(data), planId)
  }

  openModal(e){
    this.setState({modalIsOpen: true})
    let dataset = e.target.dataset
    this.location ={
      name: dataset.name,
      introduction: dataset.introduction,
      url: dataset.url
    }
  }

  closeModal(){
   this.setState({modalIsOpen: false})
  }

  preventEvent(e){
    e.stopPropagation()
  }

  render() {
    let locationList = this.props.locations.map((location, index) => {
      if (location.status === 0){
        return <Location location={location}
                index={index}
                handleSubmit={this.handleAssociateLocation.bind(this)}
                text="Add"
                cssName="decide-btn"
                openModal={this.openModal.bind(this)} />
      } else {
        return <Location location={location}
                index={index}
                handleSubmit={this.deleteAssociation.bind(this)}
                text="Remove"
                cssName="decided-btn"
                openModal={this.openModal.bind(this)}/>
      }
    })

    let { planId } = this.props.params
    return(
      <div id="recommendation" >
        <div className="location_main">
          <img src="/assets/images/forest.jpg" className="location_main_pic" />
        </div>
        <h2 className="recommendation_title">
          Your Recommendation
        </h2>
        <div className="locations_picture">
          <div className="row location-list">
            { locationList }
          </div>
        </div>
        <div className="add-plan-btn"><Link to={`/plans/${planId}`} onClick={this.handleCreatePlan.bind(this)}>Create My Plan</Link></div>
        {(()=> {
          if (this.state.modalIsOpen) {
            return <Modal closeModal={this.closeModal.bind(this)} preventEvent={this.preventEvent.bind(this)} location={this.location} />
          }
        })()}
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
    associateLocationToPlan: bindActionCreators(associateLocationToPlan ,dispatch),
    deleteAssociationFromPlan: bindActionCreators(deleteAssociationFromPlan, dispatch),
    createPlan: bindActionCreators(createPlan, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendationPage)
