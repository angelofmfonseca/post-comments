import * as PostsAPIUtil from '../util/posts_api_util'
import * as CatAPIUtil from '../util/cat_api_util'
import { RETRIEVE_CAT, RETRIEVE_POSTS } from './types'

export const retrievePosts = posts => ({
  type: RETRIEVE_POSTS,
  posts
})
export const dispatchPosts = function() {
  return function (dispatch) {
    return PostsAPIUtil.fetchPosts()
      .then((res) => {return(res.json())})
      .then(function(posts) {
        return dispatch(retrievePosts(posts))
      }
    )
  }
}
export const retrieveCat = categories => ({
  type: RETRIEVE_CAT,
  categories
})
export const dispatchCat = function() {
  return function (dispatch) {
    return CatAPIUtil.fetchCat()
      .then((res) => {return(res.json())})
      .then(function(data) {
        return dispatch(retrieveCat(data.categories))
      }
    )
  }
}
