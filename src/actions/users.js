import fetcher from '../fetcher';
import { POST_OAUTH_TOKEN_SUCCESS,
        POST_OAUTH_TOKEN_FAILURE,
        POST_OAUTH_TOKEN_REQUEST,
        DELETE_OAUTH_TOKEN,
        POST_USER_FAILURE,
        POST_USER_SUCCESS,
        GET_USER_FAILURE,
        GET_USER_SUCCESS,
        GET_CURRENT_USER_SUCCESS,
        GET_CURRENT_USER_FAILURE,
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

export function getUser(id){
  return dispatch => {
    return fetcher.get(`http://localhost:3000/tourists/${id}`)
          .then(json => dispatch(getUserSuccess(json.boy)))
          .then(ex => dispatch(getUserFailure(ex)))
  }
}

function getUserSuccess(body){
  return {
    type: GET_USER_SUCCESS,
    body
  }
}

function getUserFailure(ex){
  return {
    type: GET_USER_FAILURE,
    body
  }
}

export function getCurrentUser(){
  return dispatch => {
    return fetcher.get("http://localhost:3000/current_tourist/me")
          .then(json => dispatch(getCurrentUserSuccess(json.body)))
          .catch(ex => dispatch(getCurrentUserFailure(ex)))
  }
}

function getCurrentUserSuccess(body){
  return {
    type: GET_CURRENT_USER_SUCCESS,
    body
  }
}

function getCurrentUserFailure(ex){
  return {
    type: GET_CURRENT_USER_FAILURE,
    ex
  }
}