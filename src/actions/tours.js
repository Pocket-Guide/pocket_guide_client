import fetcher from '../fetcher';
import { POST_TOUR_SUCCESS, POST_TOUR_FAILURE } from '../constants/ActionTypes'

export function postTours(data) {
  return dispatch => {
    return fetcher.post("http://localhost:3000/current_tourist/me/tours", data)
          .then(json => dispatch(postTourSuccess(json.body)))
          .catch(ex => dispatch(postTourFailure(ex)))
  }
}

function postTourSuccess(body){
  return {
    type: POST_TOUR_SUCCESS,
    body
  }
}

function postTourFailure(ex) {
  return {
    type: POST_TOUR_FAILURE,
    ex
  }
}