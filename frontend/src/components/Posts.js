import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as action from '../actions/Posts'
import Post from './Post'
import './App.css';

class Posts extends Component {
  updatePostVote = (post, option) => {
    const delta = option.option === "upVote" ? 1 : -1;
    post.voteScore += delta;
    this.props.dispatch(action.updatePostVote(post, option))
  }
  render() {
    let posts = [];
    const { store, match, sort, desc } = this.props
    if (match) {
      posts = store.posts.filter((post) => {
        return post.category === match.params.category
      })
    } else {
      posts = store.posts;
    }
    posts.sort(function(a, b) {
      if (desc) {
        return b[sort] - a[sort]
      } else {
        return a[sort] - b[sort]
      }
    })
    return (
      <section className="mainSection">
        <section className="allPosts">
          { posts.map((post) =>
            <Post key={ post.id } post={ post }></Post>
          ) }
        </section>
      </section>
    );
  }
}
function mapStateToProps(store) {
  const postKeys = Object.keys(store.posts);
  return {
    store: {
      posts: postKeys.map((key) => ({
        ...store.posts[key]
      }))
    }
  }
}
export default connect(mapStateToProps)(Posts);
