import fetcher from '../fetcher';
import { POST_PLAN_SUCCESS, POST_PLAN_FAILURE } from '../constants/ActionTypes';

const initialState = {
  plan: {}
};

export default function plan(state=initialState, action) {
  switch(action.type) {
  case POST_PLAN_SUCCESS:
    return Object.assign({}, state, {
      tour: action.body
    })
  default:
    return state;
  }
}

