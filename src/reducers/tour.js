import fetcher from '../fetcher';
import { POST_TOUR_SUCCESS, POST_TOUR_FAILURE } from '../constants/ActionTypes';

const initialState = {
  tour: {}
};

export default function tour(state=initialState, action) {
  switch(action.type) {
  case POST_TOUR_SUCCESS:
    return Object.assign({}, state, {
      tour: action.body
    })
  default:
    return state;
  }
}

