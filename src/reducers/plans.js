import fetcher from '../fetcher';
import { POST_PLAN_SUCCESS, POST_PLAN_FAILURE, FETCH_PLAN_SUCCESS } from '../constants/ActionTypes';

const initialState = {
  plans: [],
  current_plan: {}
};

export default function plans(state=initialState, action) {
  switch(action.type) {
  case POST_PLAN_SUCCESS:
    return Object.assign({}, state, {
      current_plan: action.body
    })
  case FETCH_PLAN_SUCCESS:
    console.log(action.body)
    return Object.assign({}, state, {
      current_plan: action.body
    })
  default:
    return state;
  }
}

