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
          {Object.keys(savedMenus).map((menuName) => <div><a onClick={ ()=>actions.loadSavedMenu(menuName, savedMenus[menuName]) } href='#' key={menuName}>{menuName}</a></div>)}
        </div>
      </div>
    )
  }
}

export default MenuSelect