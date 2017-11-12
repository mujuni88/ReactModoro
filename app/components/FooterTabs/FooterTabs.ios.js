import React                                   from 'react'
import PropTypes                               from 'prop-types'
import styled                                  from 'styled-components/native'
import { TabBarIOS }                           from 'react-native'
import Icon                                    from 'react-native-vector-icons/Ionicons'
import { colors }                              from 'styles'
import { HomeContainer, LeaderboardContainer } from 'containers'


FooterTabs.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  navigator: PropTypes.object.isRequired,
  onTabSelect: PropTypes.func.isRequired
}

export default function FooterTabs ({activeFooterTab, navigator, onTabSelect}) {
  return (
    <TabBarIOS tintColor={colors.active}>
      <Icon.TabBarItem
        iconSize={35}
        iconName='ios-home-outline'
        title='Home'
        selected={activeFooterTab === 'home'}
        onPress={() => onTabSelect('home')}
      >
        <HomeContainer navigator={navigator} />
      </Icon.TabBarItem>
      <Icon.TabBarItem
        iconSize={35}
        iconName='ios-trophy-outline'
        title='Leaderboard'
        selected={activeFooterTab === 'leaderboard'}
        onPress={() => onTabSelect('leaderboard')}
      >
        <LeaderboardContainer navigator={navigator} />
      </Icon.TabBarItem>
    </TabBarIOS>

  )
}

const Text = styled.Text`
  color: #0077cc;
  margin-top: 100px;
` 

