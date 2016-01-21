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
    actions.changeSelectedStyle('basic')
    actions.menusFetch()
  }
  render() {
    const { view, actions, recipes, categories, selectedStyle, styleTemplates, headerData, selectedStyleData,
            isEditingStyle, urlHash, savedMenus, menuViewExpandedItems } = this.props
    return (
      <div className='appContainer'>
        {(() => {
          switch (view) {
            case "RecipeView": return (
                  <div>
                    <ViewSelect actions={actions}/>
                    <RecipeView recipes={recipes} 
                      categories={categories}
                      actions={actions}
                    />
                    </div>)
            case "MenuView": return (
                  <div>
                    <ViewSelect actions={actions}/>
                    <MenuView recipes={recipes} 
                      selectedStyle={selectedStyle} 
                      styleTemplates={styleTemplates}
                      headerData={headerData}
                      categories={categories}
                      isEditingStyle={isEditingStyle}
                      actions={actions}
                      savedMenus={savedMenus}
                      selectedStyleData={selectedStyleData}
                      menuViewExpandedItems={menuViewExpandedItems}
                    />
                    </div>)
            case "StaticView": return (
                    <StaticView savedMenus={savedMenus}
                      urlHash={urlHash}
                      categories={categories}
                      headerData={headerData}
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
    selectedStyleData: state.styles.selectedStyleData,
    styleTemplates: state.styles.styleTemplates,
    headerData: state.styles.headerData,
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