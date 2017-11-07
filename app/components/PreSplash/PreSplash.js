import React, { Component} from 'react';
import PropTypes           from 'prop-types';
import styled              from 'styled-components/native';
import {View, Animated}    from 'react-native'

const Wrapper = styled.View`
  flex: 1;
  background: white;
  align-items: center;
  justify-content: center;
`
const Img = styled(Animated.Image)`
  height: 250px;
  resize-mode: contain;
`

class PreSplash extends Component {
  state = {
    rotation: new Animated.Value(0)
  }

  componentDidMount() {
    const { rotation } = this.state

    this.interval = setInterval(() => {
      Animated.sequence([
        Animated.timing(rotation, {toValue: -1, duration: 150}),
        Animated.timing(rotation, {toValue: 1, duration: 150}),
        Animated.timing(rotation, {toValue: 0, duration: 250})
      ]).start()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  getTransform(){
    return { 
      transform: [{
        rotate:this.state.rotation.interpolate({
          inputRange: [-1, 1],
          outputRange: ['-20deg', '20deg']
        })
      }] 
    }
  }

  render() {
    return (
      <Wrapper>
        <Img 
          style={this.getTransform()}
          source={require('../../images/logo.jpg')}
        />
      </Wrapper>
    );
  }
}

export default PreSplash;
