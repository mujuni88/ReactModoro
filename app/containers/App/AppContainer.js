import React from 'react'
import { ReactModoroNavigator } from 'containers'
import { View } from 'react-native'

export default function AppContainer () {
  return (
    <View style={{flex: 1}}>
      <ReactModoroNavigator />
    </View>
  )
}
