import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers'
import createLogger from 'redux-logger'

const logger = createLogger({ collapsed: true })
const createStoreWithMiddleware = applyMiddleware(logger)(createStore)
let store = createStoreWithMiddleware(rootReducer)
let rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)