import fetcher from '../fetcher';
import { FETCH_QUESTIONS_FAILURE, FETCH_QUESTIONS_SUCCESS } from '../constants/ActionTypes';

const initialState = {
  questions: []
};

export default function questions(state = initialState, action) {
  switch(action.type){
  case FETCH_QUESTIONS_SUCCESS:
    return Object.assign({}, state, {
      questions: action.body
    });
  default:
    return state;
  }
}
