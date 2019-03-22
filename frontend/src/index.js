import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'
import * as action from './actions'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
store.dispatch(action.dispatchCat())
store.dispatch(action.dispatchPosts())
ReactDOM.render(
<Provider store={ store }>
  <BrowserRouter><App /></BrowserRouter>
</Provider>, document.getElementById('root'))
registerServiceWorker();
