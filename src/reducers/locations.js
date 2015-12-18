import fetcher from '../fetcher';
import { FETCH_RECOMMENDED_LOCATIONS_SUCCESS } from '../constants/ActionTypes';

const initialState = {
  locations: []
};

export default function plans(state=initialState, action) {
  switch(action.type) {
  case FETCH_RECOMMENDED_LOCATIONS_SUCCESS:
    return Object.assign({}, state, {
      locations: action.body
    })
  default:
    return state;
  }
}

