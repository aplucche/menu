import React, { Component, PropTypes } from 'react'
import RecipeItem from './RecipeItem'
import RecipeForm from './RecipeForm'

class RecipeList extends Component {
  render() {
    const { recipes, editItem} = this.props
    return (
      <div className='listContainer'>
          {recipes.map(recipe => (recipe.isEditing === true) 
            ? <RecipeForm/>
            :<RecipeItem recipe={recipe} editItem={editItem}/>)}
      </div>
    )
  }
}

export default RecipeList