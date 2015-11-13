import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

const initialState = {}

function sample(state=initialState, action){
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({
  sample,
  form: formReducer
});

export default rootReducer;
