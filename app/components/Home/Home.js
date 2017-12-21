import React                       from 'react'
import PropTypes                   from 'prop-types'
import styled                      from 'styled-components/native'
import { prop }                    from 'styled-tools'
import { Dimensions }              from 'react-native'
import { ReactModoroNavbar, Gear } from 'components'

const { height } = Dimensions.get('window')

const Wrapper = styled.View`
  flex: 1;
  background: white;
`
const Img = styled.Image`
  height: ${prop('height', '250px')};
  resize-mode: contain;
`
const Text = styled.Text`
  font-size; 40p;
  margin: 20px;
  text-align: center;
  color: #0077cc;
`

Home.propTypes = {
}
export default function Home (props) {
  const _height = height * 0.4 > 300 ? 300 : height * 0.4
  return (
    <Wrapper>
      <ReactModoroNavbar 
        title='Home'
        rightButton={<Gear onPress={() => console.log('Gear!')} />
        } 
      />
      <Img height={_height} source={require('../../images/logo.jpg')} />
      <Text>Home</Text>
    </Wrapper>
  )
}
