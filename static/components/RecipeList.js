import React, { Component, PropTypes } from 'react'
import RecipeItem from './RecipeItem'

class RecipeList extends Component {
  render() {
    const { recipes } = this.props
    return (
      <div>
        <ul>
          {recipes.map(recipe => <RecipeItem recipe={recipe}/>)}
        </ul>
      </div>
    )
  }
}

export default RecipeList