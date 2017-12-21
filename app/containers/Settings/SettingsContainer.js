import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Settings } from 'components'

export default class SettingsContainer extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  state = {
    timerDuration: null,
    restDuration: null,
  }

  handleTimerChange = (timerDuration) => {
    this.setState({timerDuration})
  }

  render() {
    return <Settings onBack={this.props.navigator.pop} />;
  }
}
