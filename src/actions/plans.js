import fetcher from '../fetcher';
import { POST_PLAN_SUCCESS, POST_PLAN_FAILURE } from '../constants/ActionTypes'

export function postPlans(data) {
  return dispatch => {
    return fetcher.post("http://localhost:3000/current_tourist/me/plans", data)
          .then(json => dispatch(postPlanSuccess(json.body)))
          .catch(ex => dispatch(postPlanFailure(ex)))
  }
}

function postPlanSuccess(body){
  return {
    type: POST_PLAN_SUCCESS,
    body
  }
}

function postPlanFailure(ex) {
  return {
    type: POST_PLAN_FAILURE,
    ex
  }
}