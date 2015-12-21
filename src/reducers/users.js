import { GET_USER_SUCCESS } from '../constants/ActionTypes';

const initialState ={

}

export function users(state=initialState, action){
  switch(action.type){
  case GET_USER_SUCCESS:
    const user = action.body
    return Object.assign({}, state,
      [user.id]: user
    )
  default:
    return state;
  }
}