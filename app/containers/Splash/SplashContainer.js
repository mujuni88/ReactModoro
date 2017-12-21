import React, {Component}         from 'react'
import PropTypes                  from 'prop-types'
import { Splash }                 from 'components'
import { handleAuthWithFirebase } from 'rdx/modules/authentication'
import { connect }                from 'react-redux'

class SplashContainer extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  handleLoginFinished = (error, result) => {
    if(error){
      console.warn('Error in handleLoginFinished: ', error)
    } else if(result.isCancelled === true){
      console.log('Auth cancelled')
    } else {
      this.props.dispatch(handleAuthWithFirebase())
    }

  }
  render () {
    return (
      <Splash onLoginFinished={this.handleLoginFinished}/>
    )
  }
}

export default connect()(SplashContainer)
