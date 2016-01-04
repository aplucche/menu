import React, { Component, PropTypes } from 'react'

class MenuView extends Component {
  render() {
    const { recipes } = this.props
    return (
      <div className='menuViewContainer'>
      {recipes.map(recipe => (recipe.isSelected === true) ? 
        <div className='menuItem'>
          <div className='menuItemName'>{recipe.name}</div>
          <div className='menuItemDescription'>{recipe.description}</div>
        </div>

        : '')}
      </div>
      )
  }
}

export default MenuView