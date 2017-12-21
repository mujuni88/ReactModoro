import React from 'react'
import PropTypes from 'prop-types'
import NavigationBar from 'react-native-navbar'

ReactModoroNavbar.propTypes = {
  title:       PropTypes.string,
  rightButton: PropTypes.func,
  leftButton:  PropTypes.func
}

const defaultBtnAttrs = {
    style: { marginLeft: 10, justifyContent: 'center'}
}
export default function ReactModoroNavbar ({title, rightButton, leftButton}) {
  const optionalAttrs = {}

  leftButton && (optionalAttrs.leftButton = React.cloneElement(leftButton, defaultBtnAttrs))
  rightButton && (optionalAttrs.rightButton = React.cloneElement(rightButton, defaultBtnAttrs))

  return (
    <NavigationBar 
      {...optionalAttrs}
      title={{title: title}}
    />
  )
}
