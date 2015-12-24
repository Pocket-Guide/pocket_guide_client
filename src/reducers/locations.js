import fetcher from '../fetcher';
import { FETCH_RECOMMENDED_LOCATIONS_SUCCESS,
        FETCH_LOCATION_SUCCESS,
        ASSOCIATE_LOCATION_TO_PLAN_SUCCESS,
        DELETE_ASSOCIATION_SUCCESS,
        CREATE_PLAN_SUCCESS
         } from '../constants/ActionTypes';

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
  case ASSOCIATE_LOCATION_TO_PLAN_SUCCESS:
    state.locations[action.index].status = 1
    return Object.assign({}, state,{
      locations: state.locations
    })
  case DELETE_ASSOCIATION_SUCCESS:
    state.locations[action.index].status = 0
    return Object.assign({}, state,{
      locations: state.locations
    })
  case CREATE_PLAN_SUCCESS:
    return Object.assign({}, state, {
      locations: action.body
    })
  default:
    return state;
  }
}

