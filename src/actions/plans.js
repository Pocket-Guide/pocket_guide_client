import fetcher from '../fetcher';
import { POST_PLAN_SUCCESS, POST_PLAN_FAILURE, FETCH_PLAN_FAILURE, FETCH_PLAN_SUCCESS } from '../constants/ActionTypes'

export function postPlans(data) {
  return dispatch => {
    return fetcher.post("http://localhost:3000/current_tourist/me/plans", data)
          .then((json) => {
            dispatch(postPlanSuccess(json.body))
            return Promise.resolve(json.body)
          })
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

export function fetchPlan(planId){
  return dispatch => {
    return fetcher.get(`http://localhost:3000/current_tourist/me/plans/${planId}`)
          .then(json => dispatch(fetchPlanSuccess(json.body)))
          .catch(ex => dispatch(fetchPlanFailure(ex)))
  }
}

function fetchPlanSuccess(body) {
  return {
    type: FETCH_PLAN_SUCCESS,
    body
  }
}

function fetchPlanFailure(ex) {
  return {
    type: FETCH_PLAN_FAILURE,
    ex
  }
}
