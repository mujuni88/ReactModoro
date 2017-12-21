import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

export default function Settings (props) {
  return (
    <Wrapper><Text>Settings</Text></Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
  background: white;
  align-items: center;
  justify-content: center;
`
