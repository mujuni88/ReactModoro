import { connect } from 'react-redux'
import { Leaderboard } from 'components'

function mapStateToProps (props, {navigator}) {
  return {
    navigator
  }
}

export default connect(
  mapStateToProps
)(Leaderboard)
