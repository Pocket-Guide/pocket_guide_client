import {
  NEXT_STEP,
  PREV_STEP,
  RESET_STEP
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

export function resetStep(){
  return {
    type: RESET_STEP
  }
}