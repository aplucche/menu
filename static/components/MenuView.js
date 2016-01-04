import React, { Component, PropTypes } from 'react'
import StyleSelect from './StyleSelect'

class MenuView extends Component {
  render() {
    const { recipes, selectedStyle, styles } = this.props
    return (
      <div className='menuViewContainer'>
      <StyleSelect selectedStyle={selectedStyle} styles={styles}/>
      {recipes.map(recipe => (recipe.isSelected === true) ? 
        <div className='menuItem' key={recipe.id}>
          <div className='menuItemName'>{recipe.name}</div>
          <div className='menuItemDescription'>{recipe.description}</div>
        </div>

        : '')}
      </div>
      )
  }
}

export default MenuView