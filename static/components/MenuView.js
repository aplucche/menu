import React, { Component, PropTypes } from 'react'
import StyleSelect from './StyleSelect'

class MenuView extends Component {
  render() {
    const { recipes, selectedStyle, styles, changeSelectedStyle, isEditingStyle, toggleEditStyle, saveStyle } = this.props
    return (
      <div className='menuViewContainer'>
      <StyleSelect selectedStyle={selectedStyle} 
                   styles={styles} 
                   changeSelectedStyle={changeSelectedStyle}
                   isEditingStyle={isEditingStyle}
                   toggleEditStyle={toggleEditStyle}
                   saveStyle={saveStyle}
                   />
      {recipes.map(recipe => (recipe.isSelected === true) ? 
        <div className='menuItem' style={styles[selectedStyle]} key={recipe.id}>
          <div className='menuItemName'>{recipe.name}</div>
          <div className='menuItemDescription'>{recipe.description}</div>
        </div>

        : '')}
      </div>
      )
  }
}

export default MenuView