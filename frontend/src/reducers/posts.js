import { ADD_POST, UPDATE_POST, DELETE_POST, RETRIEVE_POSTS, RETRIEVE_COMMENTS } from '../actions/types'

export function posts(state = {}, action) {
  switch (action.type) {
    case ADD_POST:
    case UPDATE_POST:
      return {
        ...state,
        [action.post.id]: action.post
      }
    case DELETE_POST:
        delete state[action.post.id]
        return {
          ...state,
        }
    case RETRIEVE_POSTS:
      const posts_obj = {};
      for (let post of action.posts) {
        posts_obj[post.id] = post;
      }
      return posts_obj
    case RETRIEVE_COMMENTS:
      const comments_obj = {};
      for (let comment of action.comments) {
        comments_obj[comment.id] = comment;
      }
      return {
        ...state,
        [action.parentId]: {
          ...state[action.parentId],
          comments: comments_obj
        }
      }
    default:
      return state
  }
}
export default posts
