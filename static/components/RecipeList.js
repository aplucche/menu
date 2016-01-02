import React, { Component, PropTypes } from 'react'
import RecipeItem from './RecipeItem'
import RecipeForm from './RecipeForm'

class RecipeList extends Component {
  render() {
    const { recipes, editItem, formCancelClick} = this.props
    return (
      <div className='listContainer'>
          {recipes.map(recipe => (recipe.isEditing === true) 
            ? <RecipeForm key={recipe.id} recipe={recipe} formCancelClick={formCancelClick}/>
            :<RecipeItem key={recipe.id} recipe={recipe} editItem={editItem}/>)}
      </div>
    )
  }
}

export default RecipeList