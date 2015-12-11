import fetcher from '../fetcher';
import { POST_OAUTH_TOKEN_SUCCESS,
        POST_OAUTH_TOKEN_FAILURE,
        POST_OAUTH_TOKEN_REQUEST,
        DELETE_OAUTH_TOKEN
} from '../constants/ActionTypes'

export function postOauthToken(data){
  return dispatch => {
    dispatch(postOauthTokenRequest());
    return fetcher.post('http://localhost:3000/oauth/token', data)
          .then(json => dispatch(postOauthTokenSuccess(json.body)))
          .catch(ex => dispatch(postOauthTokenFailure(ex)))
  };
}

function postOauthTokenRequest() {
  return {
    type: POST_OAUTH_TOKEN_REQUEST
  };
}

function postOauthTokenSuccess(body) {
  return {
    type: POST_OAUTH_TOKEN_SUCCESS,
    body
  };
}

function postOauthTokenFailure(ex){
  return {
    type: POST_OAUTH_TOKEN_FAILURE,
    ex
  }
}


export function postUser(data){
  return dispatch => {
    return fetcher.post("http://localhost:3000/tourists", data)
          .then(json => dispatch(postUserSuccess(json.body)))
          .catch(ex => dispatch(postUserFailure(ex)))
  }
}

function postUserSuccess(body) {
  type: POST_USER_SUCCESS,
  body
}

function postUserFailure(ex){

}

export function deleteOauthToken(){
  return {
    type: DELETE_OAUTH_TOKEN
  }
}
