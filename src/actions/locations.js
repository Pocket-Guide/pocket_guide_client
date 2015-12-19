import fetcher from '../fetcher'
import { FETCH_RECOMMENDED_LOCATIONS_SUCCESS,
        FETCH_RECOMMENDED_LOCATIONS_FAILURE,
        FETCH_LOCATION_SUCCESS,
        FETCH_LOCATION_FAILURE
         } from '../constants/ActionTypes'

export function getRecommendedLocatons(planId){
  return dispatch => {
    return fetcher.get(`http://localhost:3000/current_tourist/me/plans/${planId}/locations`)
          .then(json => dispatch(fetchLocationsSuccess(json.body)))
          .catch(ex => dispatch(fetchLocationsFailure(ex)))
  }
}

function fetchLocationsSuccess(body){
  return {
    type: FETCH_RECOMMENDED_LOCATIONS_SUCCESS,
    body
  }
}

function fetchLocationsFailure(ex){
  return{
    type: FETCH_RECOMMENDED_LOCATIONS_FAILURE,
    ex
  }
};


export function fetchLocation(id){
  return dispatch => {
    return fetcher.get(`http://localhost:3000/locations/${id}`)
          .then(json => dispatch(fetchLocationSuccess(json.body)))
          .catch(ex => dispatch(fetchLocationFailure(ex)))

  }
}

function fetchLocationSuccess(body) {
  return {
    type: FETCH_LOCATION_SUCCESS,
    body
  }
}

function fetchLocationFailure(ex) {
  return {
    type: FETCH_LOCATION_FAILURE,
    ex
  }
}