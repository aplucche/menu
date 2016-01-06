import React, { Component, PropTypes } from 'react'
import RecipeItem from './RecipeItem'
import RecipeForm from './RecipeForm'

class RecipeView extends Component {
  renderRecipe(recipe) {
    const { editItem, formCancelClick, toggleSelected, formSaveClick } = this.props

    if (recipe.isEditing === true) {
      return (<RecipeForm recipe={recipe} formCancelClick={formCancelClick} formSaveClick={formSaveClick}/>)
    } else {
      return (<RecipeItem recipe={recipe} editItem={editItem} toggleSelected={toggleSelected}/>)
    }
  }
  render() {
    const { recipes, categories } = this.props

    return (
      <div className='listContainer'>
        {categories.map(category => 
          <div key={category} className='categoryContainer'> 
            <div className='category'>{category}</div>
              {recipes.map(recipe =>
                (recipe.category === category) ? <div key={recipe.id}>{this.renderRecipe(recipe)}</div> : null)}
          </div>
        )}
      </div>
    )
  }
}

export default RecipeView