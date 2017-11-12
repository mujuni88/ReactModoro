/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react'
import { Text } from 'react-native'
import { AppContainer } from 'containers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import * as reducers from 'rdx'

const store = createStore(combineReducers(reducers), applyMiddleware(thunk))

export default function ReactModoro () {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}
