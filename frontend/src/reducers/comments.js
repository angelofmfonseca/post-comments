import { RETRIEVE_COMMENTS, ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from '../actions/types'

const comments = (state = {}, action) => {
  switch (action.type) {
    case RETRIEVE_COMMENTS:
      const comments_obj = {};
      for (let comment of action.comments) {
        comments_obj[comment.id] = comment;
      }
      return comments_obj
    case ADD_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment
      }
    case UPDATE_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment
      }
    case DELETE_COMMENT:
      let newState = {...state};
      delete newState[action.comment.id];
      return newState;
    default:
      return state
  }
}
export default comments
