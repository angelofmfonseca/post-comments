import * as CommentsAPIUtil from '../util/comments_api_util'
import { UPDATE_COMMENT, ADD_COMMENT } from './types'

export const addCommentAsync =  comment => dispatch => {
  return CommentsAPIUtil.addComment(comment)
    .then((addedComment) => {
      dispatch(addComment(addedComment));
    });
};
const addComment = (comment) => {
  return { 
    type: ADD_COMMENT,
    comment: comment
  }
}
export const updateCommentAsync =  comment => dispatch => {
  return CommentsAPIUtil.updateComment(comment)
    .then((updatedComment) => {
      dispatch(updateComment(updatedComment));
    });
};
const updateComment = (comment) => {
  return {
    type: UPDATE_COMMENT,
    comment: comment
 }
}
