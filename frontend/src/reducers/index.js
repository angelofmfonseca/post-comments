import { combineReducers } from 'redux';

import comments from './comments'
import categories from './categories'
import posts from './posts'
import post from './post'

export default combineReducers({
  categories,
  posts,
  post,
  comments
})
