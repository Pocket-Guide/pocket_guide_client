import {
  NEXT_STEP,
  PREV_STEP
} from '../constants/ActionTypes';

export function nextStep(){
  return {
    type: NEXT_STEP,
  }
}

export function prevStep(){
  return {
    type: PREV_STEP,
  }
}
