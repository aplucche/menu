import React, { Component, PropTypes } from 'react'
import RecipeItem from './RecipeItem'
import RecipeForm from './RecipeForm'
import AddRecipe from './AddRecipe'

class RecipeView extends Component {
  renderRecipe(recipe) {
    const { actions, categories } = this.props

    if (recipe.isEditing === true) {
      return (<RecipeForm recipe={recipe} categories={categories} actions={actions}/>)
    } else {
      return (<RecipeItem recipe={recipe} actions={actions}/>)
    }
  }
  render() {
    const { recipes, categories, actions} = this.props

    return (
      <div className='RecipeViewContainer'>
        <AddRecipe actions={actions} categories={categories}/>
        <div className='listContainer'>
          {categories.map(category => 
            <div key={category} className='categoryContainer'> 
              <div className='category'>{category}</div>
                {recipes.map(recipe =>
                  (recipe.category === category) ? <div key={recipe.id}>{this.renderRecipe(recipe)}</div> : null)}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default RecipeView