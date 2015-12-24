  import fetcher from '../fetcher';
import { POST_OAUTH_TOKEN_SUCCESS, DELETE_OAUTH_TOKEN, GET_CURRENT_USER_SUCCESS} from '../constants/ActionTypes';

const initialState = {
  access_token: localStorage.getItem('access_token'),
  current_user: {}
};

export default function current_user(state=initialState, action){
  switch(action.type){
  case POST_OAUTH_TOKEN_SUCCESS:
    console.log(action.body)
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
  case GET_CURRENT_USER_SUCCESS:
    fetcher.setToken(state.access_token);
    console.log(state.access_token)
    return Object.assign({}, state, {
      current_user: action.body
    })
  default:
    return state;
  }
}
