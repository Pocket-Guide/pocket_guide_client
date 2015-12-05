import fetcher from '../fetcher';
import { POST_OAUTH_TOKEN_SUCCESS } from '../constants/ActionTypes';

const initialState = {
  access_token: localStorage.getItem('access_token')
};

export default function current_user(state=initialState, action){
  switch(action.type){
  case POST_OAUTH_TOKEN_SUCCESS:
    console.log(action.body.access_token)
    fetcher.setToken(action.body.access_token);
    localStorage.setItem('access_token', fetcher.token);
    return Object.assign({}, state, {
      access_token: fetcher.token
    });
  default:
    return state;
  }
}