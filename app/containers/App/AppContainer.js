import React                    from 'react'
import PropTypes                from 'prop-types'
import { ReactModoroNavigator } from 'containers'
import { View }                 from 'react-native'
import { PreSplash }            from 'components'

AppContainer.propTypes = {
  isAuthenticating: PropTypes.bool.isRequired
}
export default function AppContainer ({isAuthenticating = true}) {
  return (
    <View style={{flex: 1}}>
      {isAuthenticating 
        ? <PreSplash />
        : <ReactModoroNavigator /> 
      }
    </View>
  )
}

