import React, { Component, PropTypes } from 'react'

class Menu extends Component {
  render() {
    const { recipes, categories, menuStyle } = this.props
    const usedCategoriesSet = new Set(recipes.map(recipe => recipe.category))
    const usedCategories = categories.filter(category => usedCategoriesSet.has(category))

    return (
      <div className='menuContainer' style={menuStyle.menuContainer} >
        <div className='menuHeader' style={menuStyle.menuHeaderStyle} >
          <div className='menuTitle'>{menuStyle.menuHeader.title}</div>
          <div className='menuDescription'>{menuStyle.menuHeader.description}</div>
          <div className='menuDate'>{menuStyle.menuHeader.date}</div>
        </div>
        {usedCategories.map(category => 
          <div key={category} style={menuStyle.menuCategoryContainer} className='menuCategoryContainer'> 
            <div className='menuCategory' style={menuStyle.menuCategory}>{category}</div>
            {recipes.map(recipe => (recipe.isSelected === true && recipe.category===category) ? 
            <div className='menuItem' style={menuStyle.menuItem} key={recipe.id}>
              <div className='menuItemName' style={menuStyle.menuItemName} >{recipe.name}</div>
              <div className='menuItemDescription' style={menuStyle.menuItemDescription} >{recipe.description}</div>
            </div>
            : '')}
          </div>
        )}
      </div>
    )
  }
}

export default Menu