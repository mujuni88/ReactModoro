import React      from 'react'
import PropTypes  from 'prop-types'
import Icon       from 'react-native-vector-icons/Ionicons'
import { colors } from 'styles'
import styled     from 'styled-components/native'
import { prop }   from 'styled-tools'

Gear.propTypes = {
 size   : PropTypes.number,
 onPress: PropTypes.func.isRequired
}

export default function Gear ({size = 30, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        name='ios-settings-outline'
        size={size}
        color={colors.blue}
      />
    </TouchableOpacity>
  )
}

const Button = styled.TouchableOpacity`
  color: ${colors.blue};
`
