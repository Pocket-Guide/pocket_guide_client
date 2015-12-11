import fetcher from '../fetcher';
import { POST_OAUTH_TOKEN_SUCCESS, DELETE_OAUTH_TOKEN } from '../constants/ActionTypes';

const initialState = {
  access_token: localStorage.getItem('access_token')
};

export default function current_user(state=initialState, action){
  switch(action.type){
  case POST_OAUTH_TOKEN_SUCCESS:
    fetcher.setToken(action.body.access_token);
    localStorage.setItem('access_token', fetcher._token);
    return Object.assign({}, state, {
      access_token: fetcher._token
    });
  case DELETE_OAUTH_TOKEN:
    fetcher.setToken(null);
    localStorage.removeItem('access_token');
    return Object.assign({}, state, {
      access_token: null
    });
  default:
    return state;
  }
}