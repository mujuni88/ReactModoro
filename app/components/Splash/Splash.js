import React from 'react'
import {View, Text} from 'react-native'

export default function Splash ({title}) {
  return (
    <View>
      <Text>Curent Scene: {title}</Text>
      <Text>Splash</Text>
    </View>
  )
}
