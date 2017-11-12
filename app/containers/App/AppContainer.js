import React from 'react'
import PropTypes from 'prop-types'
import { ReactModoroNavigator } from 'containers'
import { View } from 'react-native'
import { PreSplash } from 'components'
import { connect } from 'react-redux'

AppContainer.propTypes = {
  isAuthenticating: PropTypes.bool.isRequired
}
function AppContainer ({ isAuthenticating = false }) {
  return (
    <View style={{ flex: 1 }}>
      {isAuthenticating ? <PreSplash /> : <ReactModoroNavigator />}
    </View>
  )
}

function mapStateToProps ({ authentication }) {
  return {
    isAuthenticating: authentication.isAuthenticating
  }
}
export default connect(mapStateToProps)(AppContainer)
