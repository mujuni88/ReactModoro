import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { prop } from 'styled-tools'
import { LoginButton } from 'react-native-fbsdk'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

const Wrapper = styled.View`
  flex: 1;
  background: white;
  align-items: center;
  justify-content: center;
`
const Img = styled.Image`
  height: ${prop('height', '250px')};
  resize-mode: contain;
`
const Slogan = styled.Text`
  font-size; 40px;
  margin: 20px;
  text-align: center;
  color: #0077cc;
`

Splash.propTypes = {
  onLoginFinished: PropTypes.func.isRequired
}
export default function Splash ({ onLoginFinished }) {
  const _height = height * 0.4 > 300 ? 300 : height * 0.4
  return (
    <Wrapper>
      <Img height={_height} source={require('../../images/logo.jpg')} />
      <Slogan>ReactModoro</Slogan>
      <LoginButton
        styles={{
          marginTop: 10,
          marginBottom: 10
        }}
        onLoginFinished={onLoginFinished}
      />
    </Wrapper>
  )
}
