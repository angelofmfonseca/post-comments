import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as action from '../actions/Comments'
import CommentForm from './CommentForm'

const uuidv1 = require('uuid/v1');

class Comments extends Component {
  state = {
    comment: {},
    edit: false
  }
  componentWillMount() {
    this.props.dispatch(action.dispatchComments(this.props.post.id))
    this.resetComment();
  }
  resetComment = () => {
    this.setState({
      comment: {
        id: uuidv1(),
        parentId: this.props.post.id,
        timestamp: Date.now(),
        body: "",
        author: "",
        voteScore: 1,
        deleted: false,
        parentDeleted: false
      }
    })
  }
  updateComment = (item) => {
    this.setState({
      comment: {
        ...this.state.comment,
        ...item
      }
    })
  }
  updateCommentVote = (comment, option) => {
    const delta = option.option === "upVote" ? 1 : -1;
    comment.voteScore += delta;
    this.props.dispatch(action.updateCommentVote(comment, option))
  }
  editComment = (comment) => {
    comment.timestamp = Date.now()
    this.setState({
      comment: comment,
      edit: true
    })
  }
  deleteComment = (comment) => {
    this.props.dispatch(action.deleteComment(comment))
  }
  render() {
    const { store, post } = this.props
    store.comments.sort(function(a, b) {
        return b['voteScore'] - a['voteScore']
    })
    return (
      <aside className="post-comments">
        <h3 className="commentHeader">{ store.comments.length }COMMENTS</h3>
        { store.comments.map((comment)=>
          <div className="comment" key={ comment.id }>
            <div className="postButton">
              <button onClick={ (e) => this.editComment(comment) } className="commentButtons">Edit</button>
              <button onClick={ (e) => this.deleteComment(comment) } className="commentButtons">Delete</button>
            </div>
            <div className="commentVote">
              <button onClick={ (e) => this.updateCommentVote(comment, { option: "upVote" }) } className="commentButtons"><i className="fa fa-plus" aria-hidden="true"></i></button>
              <button onClick={ (e) => this.updateCommentVote(comment, { option: "downVote" }) } className="commentButtons"><i className="fa fa-minus" aria-hidden="true"></i></button>
              { comment.voteScore } Vote Score
            </div>
            <div className="commentAuthor">
              { comment.author }
              &nbsp;
              &nbsp;
              <span className="commentDate">
                { new Date(comment.timestamp).toDateString() }
              </span>
            </div>
            <div className="commentBody">
              Comment: { comment.body }
            </div>

          </div>
        )}
        <CommentForm parentId={ post.id } comment={ this.state.comment } updateComment={ this.updateComment } edit={ this.state.edit } />
      </aside>
    )
  }
}
function mapStateToProps(store) {
  const commentsKeys = Object.keys(store.comments);
  return {
    store: {
      comments: commentsKeys.map((key) => {
        return {
          ...store.comments[key]
        }
      })
    }
  }
}
export default connect(mapStateToProps)(Comments);
