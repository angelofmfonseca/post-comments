import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import CreateButton from './CreateButton'
import Posts from './Posts'
import Post from './Post'
import Sorter from './Sorter'
import PostForm from './PostForm'
import './App.css';

class App extends Component {
  state = {
    posts: {
      sort: 'voteScore',
      desc: true,
      options: [
        { text: "Vote Score", value: 'voteScore' },
        { text: "Date", value: 'timestamp' }
      ]
    },
    post:[]
  }
  sortPosts = (sort) => {
    const desc = this.state.posts.sort === sort ? !this.state.posts.desc : this.state.posts.desc
    this.setState({
      posts: {
        ...this.state.posts,
        sort: sort,
        desc: desc
      }
    })
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" render={() => (
          <div>
            <CreateButton />
          </div>
        )} />
        <Route exact path="/:category" render={() => (
          <div>
            <CreateButton />
          </div>
        )} />
        <Route exact path="/" render={() => (
          <section>
            <Sorter options={ this.state.posts.options } sortPosts={ this.sortPosts } sort={ this.state.posts.sort } />
            <Posts sort={ this.state.posts.sort } desc={ this.state.posts.desc } />
          </section>
        )} />
        <Route exact path="/:category" render={({ match }) => (
          <section>
            <Sorter options={ this.state.posts.options } sortPosts={ this.sortPosts } sort={ this.state.posts.sort } />
            <Posts match={ match } sort={ this.state.posts.sort } desc={ this.state.posts.desc } />
          </section>
        )} />
        <Route exact path="/:category/:id" render={({ match, history }) => (
          <Post match={ match } history={ history } />
        )} />
        <Route exact path="/create" render={({ history }) => (
          <PostForm history={ history }/>
        )} />
        <Route exact path="/edit/:id" render={({ match, history }) => (
          <PostForm match={ match } history={history} />
        )} />
        <Route exact path="/404" render={() => (
          <section className="detail">
            <h1 className="titlePost">The page you are looking for could not be found.</h1>
          </section>
        )} />
      </div>
    );
  }
}

export default App;
