import React, { Component, PropTypes } from 'react'
import RecipeItem from './RecipeItem'

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {expanded : false}
  }
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