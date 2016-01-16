import React, { Component, PropTypes} from 'react'

class HeaderSelect extends Component {
  render() {
    const {actions} = this.props
    return (
      <div>
        <button onClick={()=>actions.menuViewToggleExpanded('headerSelect', false)}>-</button>
      </div>)
  }
}

export default HeaderSelect