import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class MenuSelect extends Component {
  componentDidMount() {
    this.props.actions.menusFetch()
  }
  render() {
    const { actions, savedMenus } = this.props

    return (
      <div className='menuSelectContainer'>
        <div className='menuViewSection' onClick={()=>actions.menuViewToggleExpanded('menuSelect', false)}>
          <div className='menuViewSectionLabel'>Select A Saved Menu</div>
        </div>
        <div className='savedMenuList'>
          {Object.keys(savedMenus).map((menuName) => <li key={menuName}>{menuName}</li>)}
        </div>
      </div>
    )
  }
}

export default MenuSelect