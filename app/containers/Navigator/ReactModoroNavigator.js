import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StackNavigator } from 'react-navigation'
import { NavigatorIOS } from 'react-native'

import {
  SplashContainer,
  FooterTabsContainer,
  SettingsContainer,
} from 'containers'

const App = StackNavigator({
  Home: { screen: FooterTabsContainer },
  Splash: { screen: SplashContainer },
  Settings: { screen: SettingsContainer },
})

export default class ReactModoroNavigator extends Component {
  state = { settingsIcon: null }

  static propTypes = {
    isAuthed: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    Icon.getImageSource('ios-settings-outline', 30).then(source =>
      this.setState({ settingsIcon: source })
    )
  }

  renderScene = (route, navigator) => {
    const { isAuthed } = this.props

    if (isAuthed) {
      return <FooterTabsContainer navigator={navigator} />
    } else if (route.settings === true) {
      return <SettingsContainer navigator={navigator} />
    }

    return <SplashContainer />
  }

  onSettingsPress = () => {
    this.nav.push({
      settings: true,
      component: SettingsContainer,
      title: 'Settings',
    })
  }
  render() {
    if (!this.state.settingsIcon) return null

    return (
      <NavigatorIOS
        ref={e => (this.nav = e)}
        initialRoute={{
          title: 'Home',
          component: this.renderScene,
          rightButtonIcon: this.state.settingsIcon,
          onRightButtonPress: this.onSettingsPress,
          onLeftButtonPress: () => this.nav.pop(),
        }}
        style={{ flex: 1 }}
      />
    )
  }
}
