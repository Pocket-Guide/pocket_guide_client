import fetcher from '../fetcher';
import { PRESERV_ANSWER } from '../constants/ActionTypes';

const initialState = {
  answers: []
};

export default function answer(state=initialState, action) {
  switch(action.type) {
  case PRESERV_ANSWER:
    return Object.assign({}, state, {
      answers: action.answer
    })
  default:
    return state;
  }
}

