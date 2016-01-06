import React, { Component, PropTypes } from 'react'

class Menu extends Component {
  render() {
    const { recipes, menuStyle } = this.props
    return (
      <div className='menuContainer' style={menuStyle.menuContainer} >
        <div className='menuHeader' style={menuStyle.menuHeaderStyle} >
          <div className='menuTitle'>{menuStyle.menuHeader.title}</div>
          <div className='menuDescription'>{menuStyle.menuHeader.description}</div>
          <div className='menuDate'>{menuStyle.menuHeader.date}</div>
        </div>
        {recipes.map(recipe => (recipe.isSelected === true) ? 
        <div className='menuItem' style={menuStyle.menuItem} key={recipe.id}>
          <div className='menuItemName' style={menuStyle.menuItemName} >{recipe.name}</div>
          <div className='menuItemDescription' style={menuStyle.menuItemDescription} >{recipe.description}</div>
        </div>
        : '')}
      </div>
    )
  }
}

export default Menu