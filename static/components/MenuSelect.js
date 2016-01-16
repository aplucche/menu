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
        <button onClick={()=>actions.menuViewToggleExpanded('menuSelect', false)}>-</button>
        <div className='savedMenuList'>
          {Object.keys(savedMenus).map((menuName) => <li key={menuName}>{menuName}</li>)}
        </div>
      </div>
    )
  }
}

export default MenuSelect