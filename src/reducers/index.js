import { combineReducers } from 'redux';

const initialState = {}

function sample(state=initialState, action){
  switch(action.type){
  default:
    return state
  }
}

const rootReducer = combineReducers({
  sample
});

export default rootReducer;
