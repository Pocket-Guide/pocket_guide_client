import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import current_user from './current_user'

const initialState = {}

const rootReducer = combineReducers({
  current_user,
  form
});

export default rootReducer;
