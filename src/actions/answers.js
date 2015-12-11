import fetcher from '../fetcher';
import { PRESERV_ANSWER } from '../constants/ActionTypes'

export function preserveAnswer(answer){
  return dispatch => {
    type: PRESERV_ANSWER,
    answer
  }
}