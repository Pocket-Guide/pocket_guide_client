import fetcher from '../fetcher';
import { FETCH_RECOMMENDED_LOCATIONS_SUCCESS, FETCH_LOCATION_SUCCESS } from '../constants/ActionTypes';

const initialState = {
  locations: [],
  current_location: {}
};

export default function plans(state=initialState, action) {
  switch(action.type) {
  case FETCH_RECOMMENDED_LOCATIONS_SUCCESS:
    return Object.assign({}, state, {
      locations: action.body
    })
  case FETCH_LOCATION_SUCCESS:
    return Object.assign({}, state, {
      current_location: action.body
    })
  default:
    return state;
  }
}

