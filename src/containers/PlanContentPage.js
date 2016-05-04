import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Location from '../components/plan/Location'
import { fetchPlan } from '../actions/plans'
import  Modal  from '../components/recommendation/Modal'

class PlanContentPage extends Component {
  constructor(props){
    super(props)
    this.state = {modalIsOpen: false}
  }

  componentDidMount(){
    this.props.fetchPlan(this.props.params.planId)
  }

  openModal(e){
    console.log("aa")
    this.setState({modalIsOpen: true})
    let dataset = e.target.dataset
    this.location ={
      name: dataset.name,
      introduction: dataset.introduction,
      url: dataset.url,
      longitude: dataset.longitude,
      latitude: dataset.latitude
    }
  }

  closeModal(){
   this.setState({modalIsOpen: false})
  }

  preventEvent(e){
    e.stopPropagation()
  }

  render (){
    let { locations } = this.props.current_plan
    if (!locations){
      locations = []
    }
    let locationList = locations.map((location) => {
        return <Location location={location} openModal={this.openModal.bind(this)}/>
    })
    console.log(locationList)
    return(
      <div id="plan-locations">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 locations-table">
              <h1>This is Your Plan</h1>
              <div className="table">
                <div className="tbody">
                  <div className="table-row clearfix">
                    <div className="table-head pull-left">
                      Plan Title
                    </div>
                    <div className="table-data pull-left"> Kyoto Tour Plan1 </div>
                  </div>
                  <div className="location-list">
                    <div className="location-title">
                      Locations
                    </div>
                  </div>
                  <div>
                    <div>
                      {locationList}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  let { current_plan } = state.plans
  return { state, current_plan }
}

function mapDispatchToProps(dispatch){
  return{
    fetchPlan: bindActionCreators(fetchPlan, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanContentPage)