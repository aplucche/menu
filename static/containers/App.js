import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as RecipeActions from '../actions/recipes'

import RecipeView from '../components/RecipeView'
import RecipeForm from '../components/RecipeForm'
import ViewSelect from '../components/ViewSelect'
import MenuView from '../components/MenuView'
import StaticView from '../components/StaticView'

import fillerData from '../dev/FillerData'
import menuStyleData from '../dev/MenuStyleData'
import SavedMenuData from '../dev/SavedMenuData'

class App extends Component {
 constructor(props) {
    super(props);
    this.state = Object.assign({}, this.state, fillerData)
    //this.state = fillerData
    this.state.styles = menuStyleData
    this.state.staticMenu = SavedMenuData
  }
  //editItem(id) {
  //  var editedRecipes = this.state.recipes.map(recipe => 
  //          (recipe.id===id) ? Object.assign({}, recipe, {'isEditing':true}) : recipe)
  //  this.setState(Object.assign({}, this.state, {'recipes': editedRecipes}))
  //}
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
  changeView(viewName) {
    this.setState(Object.assign({}, this.state, {'view': viewName}))
  }
  changeSelectedStyle(style) {
    this.setState(Object.assign({}, this.state, {'selectedStyle': style}))
  }
  toggleEditStyle() {
    this.setState(Object.assign({}, this.state, {'isEditingStyle': !this.state.isEditingStyle}))
  }
  saveStyle(editedStyle, styleData) {
    const updatedStyles = Object.assign({}, this.state.styles, {[editedStyle]: JSON.parse(styleData)})
    this.setState(Object.assign({}, this.state, {styles: updatedStyles,'isEditingStyle': !this.state.isEditingStyle}))
    console.log(JSON.stringify(this.state, null, 2))
  }
  componentWillMount() {
    const urlHash = window.location.hash.substr(1)
    if (urlHash !== '') {
      this.setState(Object.assign({}, this.state, {'view': 'StaticView'}, this.state.staticMenu[urlHash]))
    }
  }
  render() {
    const { actions, recipes, categories, selectedStyle, styles, isEditingStyle } = this.state

    return (
      <div className='appContainer'>
        {(() => {
          switch (this.state.view) {
            case "RecipeView":   return (
                  <div>
                    <ViewSelect changeView={this.changeView.bind(this)}/>
                    <RecipeView recipes={recipes} 
                      categories={categories}
                      editItem={actions.editItem}
                      formCancelClick={this.formCancelClick.bind(this)}
                      formSaveClick={this.formSaveClick.bind(this)}
                      toggleSelected={this.toggleSelected.bind(this)}
                    />
                    </div>)
            case "MenuView": return (
                  <div>
                    <ViewSelect changeView={this.changeView.bind(this)}/>
                    <MenuView recipes={recipes} 
                      selectedStyle={selectedStyle} 
                      styles={styles}
                      categories={categories}
                      changeSelectedStyle={this.changeSelectedStyle.bind(this)}
                      isEditingStyle={isEditingStyle}
                      toggleEditStyle={this.toggleEditStyle.bind(this)}
                      saveStyle={this.saveStyle.bind(this)}
                    />
                    </div>)
            case "StaticView": return (
                    <StaticView recipes={recipes} 
                      selectedStyle={selectedStyle} 
                      styles={styles}
                      categories={categories}
                    />)
          }
        })()}
     </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(RecipeActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App)