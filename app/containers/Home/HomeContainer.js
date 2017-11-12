import { connect } from 'react-redux'
import { Home } from 'components'

function mapStateToProps (props, {navigator}) {
  return {
    navigator
  }
}

export default connect(
  mapStateToProps
)(Home)
