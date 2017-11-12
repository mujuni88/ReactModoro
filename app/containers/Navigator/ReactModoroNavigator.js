import React, { Component } from 'react'
import { NavigatorIOS, Text } from 'react-native'
import { SplashContainer, FooterTabsContainer } from 'containers'

export default class ReactModoroNavigator extends Component {
  render () {
    return (
      <NavigatorIOS
        initialRoute={{
          component: FooterTabsContainer,
          title: 'Splash Screen'
        }}
        style={{ flex: 1 }}
      />
    )
  }
}
