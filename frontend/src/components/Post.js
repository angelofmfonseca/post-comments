import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as action from '../actions/Post'
import { dispatchComments } from '../actions/Comments'
import Comments from './Comments'

class Post extends Component {
  state = {
    postId: null,
    listPage: false
  }

  componentWillMount() {
    if (this.props.store.posts.length) {
      if (typeof this.props.match !== 'undefined') {
        this.setState({ postId: this.props.match.params.id, listPage: false });
        this.props.dispatch(dispatchComments(this.props.match.params.id))
      } else if (typeof this.props.post !== 'undefined') {
        this.setState({ postId: this.props.post.id, listPage: true });
        this.props.dispatch(dispatchComments(this.props.post.id))
      }
    } else {
      this.props.history.push('/404');
    }
  }
  updatePostVote = (post, option) => {
    const delta = option.option === "upVote" ? 1 : -1;
    post.voteScore += delta;
    this.props.dispatch(action.updatePostVote(post, option))
  }
  deletePost = (post) => {
    this.props.dispatch(action.deletePost(post))
  }
  render() {
    const { store } = this.props
    return (
      <section className="detail">
        { store.posts.map((post) =>
          post.id === this.state.postId && (
          <section key={ post.id }>
            <article className="singlePost" >
              <div className="editDelete">
                <Link to={ `/edit/${ post.id }` } >
                  <button className="postButtons">Edit</button>
                </Link>
                <button onClick={ (e) => this.deletePost(post) } 
                        className="postButtons">Delete</button>
              </div>
              <div className="scoreCount">
                <button onClick={ (e) => this.updatePostVote(post, { option: "upVote" }) }  
                  className="postButtons">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
                <button onClick={ (e) => this.updatePostVote(post, { option: "downVote" }) } 
                  className="postButtons">
                    <i className="fa fa-minus" aria-hidden="true"></i>
                </button>
                <span className="voteCount">
                  Vote Score: { post.voteScore }
                </span>
              </div>
              { this.state.listPage ? (
              <Link to={`/${ post.category }/${ post.id }`}>
                <h2 className="titlePost">{ post.title }</h2>
              </Link>) : (
                <h1 className="titlePost">{ post.title }</h1>
              ) }
              <div className="public">
                By
                &nbsp;
                <span>
                  { post.author }
                </span>
                &nbsp;
                on
                &nbsp;
                <span>
                  { new Date(post.timestamp).toDateString() }
                </span>
              </div>
              <p className="post">{ post.body }</p>
              { this.state.listPage && (
                <p className="text-center">{ post.comments.length } COMMENTS</p>
              ) }
            </article>
            { !this.state.listPage && (
              <Comments post={ post }></Comments>
            ) }
          </section>
          )
        )}
      </section>
    );
  }
}
function mapStateToProps(store) {
  const postKeys = Object.keys(store.posts);
  return {
    store: {
      posts: postKeys.map((key) => {
        const commentKeys = (typeof store.posts[key].comments === 'object' ? Object.keys(store.posts[key].comments) : []);
        return {
          ...store.posts[key],
          comments: commentKeys.map((k) => ({
              ...store.posts[key].comments[k]
          }))
        }
      })
    }
  }
}
export default connect(mapStateToProps)(Post);
