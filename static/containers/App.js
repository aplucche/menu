import React, { Component, PropTypes } from 'react'
import RecipeList from '../components/RecipeList'
import RecipeForm from '../components/RecipeForm'
import fillerData from '../dev/FillerData'

class App extends Component {
 constructor(props) {
    super(props);
    this.state = fillerData
  }
  editItem(id) {
    var editedRecipes = this.state.recipes.map(recipe => 
            (recipe.id===id) ? Object.assign({}, recipe, {'isEditing':true}) : recipe)
    this.setState(Object.assign({}, this.state, {'recipes': editedRecipes}))
  }
  formCancelClick(id) {
    var editedRecipes = this.state.recipes.map(recipe => 
            (recipe.id===id) ? Object.assign({}, recipe, {'isEditing':false}) : recipe)
    this.setState(Object.assign({}, this.state, {'recipes': editedRecipes}))
  }
  toggleSelected(id) {
    var editedRecipes = this.state.recipes.map(recipe => 
            (recipe.id===id) ? Object.assign({}, recipe, {'isSelected':!recipe.isSelected}) : recipe)
    this.setState(Object.assign({}, this.state, {'recipes': editedRecipes}))
  }

  render() {
    const { recipes } = this.state
    return (
      <div className='appContainer'>
          <RecipeList recipes={ recipes } 
                      editItem={this.editItem.bind(this)}
                      formCancelClick={this.formCancelClick.bind(this)}
                      toggleSelected={this.toggleSelected.bind(this)}
          />       
      </div>
    )
  }
}

export default App