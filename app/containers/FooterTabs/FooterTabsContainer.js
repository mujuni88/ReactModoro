import { connect } from 'react-redux'
import { setFooterTab } from 'rdx/modules/activeFooterTab'
import { FooterTabs } from 'components'

function mapStateToProps ({ activeFooterTab }, {navigator}) {
  return {
    activeFooterTab,
    navigator
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onTabSelect: (tab) => dispatch(setFooterTab(tab))
  } 
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterTabs)
