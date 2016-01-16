import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from '../actions'

import RecipeView from '../components/RecipeView'
import RecipeForm from '../components/RecipeForm'
import ViewSelect from '../components/ViewSelect'
import MenuView from '../components/MenuView'
import StaticView from '../components/StaticView'

class App extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.recipesFetch(1)
    actions.menusFetch()
  }
  render() {
    const { view, actions, recipes, categories, selectedStyle, styles, 
            isEditingStyle, urlHash, savedMenus, menuViewExpandedItems } = this.props
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
                      actions={actions}
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
                      actions={actions}
                      savedMenus={savedMenus}
                      menuViewExpandedItems={menuViewExpandedItems}
                    />
                    </div>)
            case "StaticView": return (
                    <StaticView savedMenus={savedMenus}
                      urlHash={urlHash}
                      categories={categories}
                    />
                    )
          }
        })()}
     </div>
    )
  }
}

function mapStateToProps(state) {
  const urlHash = window.location.hash.substr(1)
  const viewSet = (()=> (urlHash==='') ? state.application.view : 'StaticView')()
  return {
    view: viewSet,
    categories: state.application.categories,
    recipes: state.recipes,
    selectedStyle: state.styles.selectedStyle,
    styles: state.styles.styles,
    isEditingStyle: state.styles.isEditingStyle,
    savedMenus: state.application.savedMenus,
    urlHash: urlHash,
    menuViewExpandedItems: state.application.menuViewExpandedItems
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