import React, { Component }     from 'react'
import PropTypes                from 'prop-types'
import { ReactModoroNavigator } from 'containers'
import { View }                 from 'react-native'
import { PreSplash }            from 'components'
import { connect }              from 'react-redux'
import { firebaseAuth }         from 'config/constants'
import { onAuthChange }         from 'rdx/modules/authentication'

class AppContainer extends Component {
  static propTypes = {
    dispatch:         PropTypes.func.isRequired,
    isAuthenticating: PropTypes.bool.isRequired,
    isAuthed:         PropTypes.bool.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    firebaseAuth.onAuthStateChanged(user => dispatch(onAuthChange(user)))
  }

  render(){
    const { isAuthed, isAuthenticating } = this.props

    return (
      <View style={{ flex: 1 }}>
        {isAuthenticating ? <PreSplash /> : <ReactModoroNavigator isAuthed={isAuthed} />}
      </View>
    )
  }
}

function mapStateToProps ({ authentication }) {
  const { isAuthenticating, isAuthed } = authentication
  return {
    isAuthenticating,
    isAuthed
  }
}
export default connect(mapStateToProps)(AppContainer)
