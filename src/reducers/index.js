import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import current_user from './current_user';
import questions from './questions';
import plans from './plans';
import step from './step';
import answers from './answers';
import locations from './locations';

const rootReducer = combineReducers({
  plans,
  locations,
  questions,
  current_user,
  step,
  answers,
  form
});

export default rootReducer;
