import fetcher from '../fetcher';
import { POST_OAUTH_TOKEN_SUCCESS,
        POST_OAUTH_TOKEN_FAILURE,
        POST_OAUTH_TOKEN_REQUEST,
        DELETE_OAUTH_TOKEN,
        POST_USER_FAILURE,
        POST_USER_SUCCESS
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
          .then((json) => {
            dispatch(postUserSuccess(json.body))
            return Promise.resolve()
          })
          .catch(ex => dispatch(postUserFailure(ex)))
  }
}

function postUserSuccess(body) {
  return {
    type: POST_USER_SUCCESS,
    body
  }
}

function postUserFailure(ex){
  return {
    type: POST_USER_FAILURE,
    ex
  }
}

export function deleteOauthToken(){
  return {
    type: DELETE_OAUTH_TOKEN
  }
}
