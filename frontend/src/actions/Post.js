import * as PostsAPIUtil from '../util/posts_api_util'
import { DELETE_POST, UPDATE_POST, RETRIEVE_POST } from './types'

export function deletePost (post) {
  PostsAPIUtil.deletePost(post)
    .then((res) => { return res.text() })
  return {
    type: DELETE_POST,
    post
  }
}
export const retrievePost = post => ({
  type: RETRIEVE_POST,
  post
})
export const dispatchPost = function(id) {
  return function (dispatch) {
    return PostsAPIUtil.fetchPost(id)
      .then((res) => {return(res.json())})
      .then(function(post) {
        return dispatch(retrievePost(post))
      }
    )
  }
}
export const updatePostVote = (post, option) => {
  PostsAPIUtil.updatePostVote(post.id, option)
  return {
    type: UPDATE_POST,
    post
  }
}
