/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React            from 'react'
import { AppContainer } from 'containers'
import { Provider }     from 'react-redux'
import thunk            from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import * as reducers    from 'rdx'
import { 
  createStore, 
  applyMiddleware, 
  combineReducers
} from 'redux'

const store = createStore(
  combineReducers(reducers), 
  composeWithDevTools(applyMiddleware(thunk))
)

export default function ReactModoro () {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}
