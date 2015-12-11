import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import current_user from './current_user';
import questions from './questions';
import tour from './tour';
import step from './step';
import answers from './answers';

const rootReducer = combineReducers({
  tour,
  questions,
  current_user,
  step,
  answers,
  form
});

export default rootReducer;
