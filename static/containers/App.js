import React, { Component, PropTypes } from 'react'
import RecipeList from '../components/RecipeList'
import RecipeForm from '../components/RecipeForm'
import fillerData from '../dev/FillerData'
import ViewSelect from '../components/ViewSelect'
import MenuView from '../components/MenuView'

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
  formSaveClick(id, updatedRecipe) {
    updatedRecipe.isEditing = false
    var editedRecipes = this.state.recipes.map(recipe => 
            (recipe.id===id) ? Object.assign({}, recipe, updatedRecipe) : recipe)
    this.setState(Object.assign({}, this.state, {'recipes': editedRecipes}))
  }

  render() {
    const { recipes } = this.state
    return (
      <div className='appContainer'>
        <ViewSelect />
        <MenuView />
        <RecipeList recipes={ recipes } 
                      editItem={this.editItem.bind(this)}
                      formCancelClick={this.formCancelClick.bind(this)}
                      formSaveClick={this.formSaveClick.bind(this)}
                      toggleSelected={this.toggleSelected.bind(this)}
          />       
      </div>
    )
  }
}

export default App