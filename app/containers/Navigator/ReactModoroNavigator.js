import React, {Component} from 'react'
import {NavigatorIOS, Text} from 'react-native'
import { SplashContainer } from 'containers'

console.log('SPLASH', SplashContainer)

export default class ReactModoroNavigator extends Component {
  render(){
    return (
      <NavigatorIOS
        initialRoute={{
          component: SplashContainer,
          title: 'Splash Screen'
        }}
        style={{flex: 1}}
      />
    )
  }
}
