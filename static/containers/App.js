import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from '../actions'

import RecipeView from '../components/RecipeView'
import RecipeForm from '../components/RecipeForm'
import ViewSelect from '../components/ViewSelect'
import MenuView from '../components/MenuView'
import StaticView from '../components/StaticView'

import fillerData from '../dev/FillerData'
import menuStyleData from '../dev/MenuStyleData'
import SavedMenuData from '../dev/SavedMenuData'

class App extends Component {

  //componentDidMount() {
  //  this.setState(Object.assign({},this.state, fillerData, {styles: menuStyleData}, {staticMenu: SavedMenuData}))
  //
  // }
  //editItem(id) {
  //  var editedRecipes = this.state.recipes.map(recipe => 
  //          (recipe.id===id) ? Object.assign({}, recipe, {'isEditing':true}) : recipe)
  //  this.setState(Object.assign({}, this.state, {'recipes': editedRecipes}))
  //}
  /*
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
  */
  /*
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
*/
  componentWillMount() {
    const urlHash = window.location.hash.substr(1)
    if (urlHash !== '') {
      this.setState(Object.assign({}, this.state, {'view': 'StaticView'}, SavedMenuData[urlHash]))
    }
  }

  render() {
    const { actions, recipes, categories, selectedStyle, styles, isEditingStyle, view} = this.props

    return (
      <div className='appContainer'>
        {(() => {
          switch (view) {
            case "RecipeView": return (
                  <div>
                    <ViewSelect changeView={actions.changeView}/>
                    <RecipeView recipes={recipes} 
                      categories={categories}
                      editItem={actions.editItem}
                      formCancelClick={actions.formCancelClick}
                      formSaveClick={actions.formSaveClick}
                      toggleSelected={actions.toggleSelected}
                    />
                    </div>)
            case "MenuView": return (
                  <div>
                    <ViewSelect changeView={actions.changeView}/>
                    <MenuView recipes={recipes} 
                      selectedStyle={selectedStyle} 
                      styles={styles}
                      categories={categories}
                      isEditingStyle={isEditingStyle}
                      changeSelectedStyle={actions.changeSelectedStyle}
                      toggleEditStyle={actions.toggleEditStyle}
                      saveStyle={actions.saveStyle}
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
    view: state.application.view,
    categories: state.application.categories,
    recipes: state.recipes,
    selectedStyle: state.styles.selectedStyle,
    styles: state.styles.styles,
    isEditingStyle: state.styles.isEditingStyle,
    staticMenu: state.application.staticMenu
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App)