import fetcher from '../fetcher';
import { FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAILURE } from '../constants/ActionTypes'

export function getQuestions() {
  return dispatch => {
    return fetcher.get("http://localhost:3000/current_tourist/me/questions")
          .then(json => dispatch(fetchQuestionsSuccess(json.body)))
          .catch(ex => dispatch(fetchQuestionsFailure(ex)))
  }
}

function fetchQuestionsSuccess(body){
  return {
    type: FETCH_QUESTIONS_SUCCESS,
    body
  }
}

function fetchQuestionsFailure(ex){
  return{
    type: FETCH_QUESTIONS_FAILURE,
    ex
  }
};
