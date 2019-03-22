import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'

import * as action from '../actions/CommentForm'

class CommentForm extends Component {
  addComment = () => {
    this.props.dispatch(action.addCommentAsync({ ...this.props.comment, id: uuidv4() }))
  }
  updateComment = () => {
    this.props.dispatch(action.updateCommentAsync({ id: uuidv4(), ...this.props.comment }))
  }
  render() {
    const { comment, edit } = this.props
    return (
      <div className="addComment">
        <form>
          <div className="formGroup">
            <div className="formInput">
              <label>Add a Comment</label>
              <textarea 
                name="body" 
                value={ comment.body } 
                onChange={ (e) => this.props.updateComment({ body: e.target.value }) }>
              </textarea>
            </div>
          </div>
          <div className="formGroup">
            <div className="formInput">
              <label>Your Name</label>
              <input 
                name="author" 
                value={ comment.author } 
                type="text" 
                onChange={ (e) => this.props.updateComment({ author: e.target.value }) } 
              />
            </div>
          </div>
          <div className="formGroup">
            <div className="formInput">
              { edit ? (
                <button onClick={ (e) => {
                  e.preventDefault()
                  this.updateComment()
                } }>
                Update
                </button>
              ): (
                <button onClick={ (e) => {
                  e.preventDefault()
                  this.addComment()
                } }>
                Publish
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default connect()(CommentForm)
