import { EDIT_POST, RETRIEVE_POST, CREATE_POST } from '../actions/types'

export function post(state = {}, action) {
  switch(action.type) {
    case RETRIEVE_POST:
    case EDIT_POST:
    case CREATE_POST:
      return { 
        ...state,
        [action.post.id]: action.post 
      }
    default:
      return state
  }
}
export default post
