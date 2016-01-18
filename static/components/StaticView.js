import React, { Component, PropTypes } from 'react'
import Menu from './Menu'

class StaticView extends Component {
  setMenuProperties(savedMenus, urlHash) {
    var recipes = []
    var menuStyle = {
      menuContainer: {}, 
      menuHeader: {}
    }
    if(urlHash in savedMenus && urlHash!=='') {
      recipes = savedMenus[urlHash].recipes
      menuStyle = savedMenus[urlHash].styles[savedMenus[urlHash].selectedStyle]
    }
    return { recipes: recipes, menuStyle: menuStyle }
  }
  render() {
    const {savedMenus, urlHash, categories, headerData } = this.props
    const menu = this.setMenuProperties(savedMenus, urlHash)
    console.log(menu)
    return (
      <Menu recipes={menu.recipes} categories={categories} headerData={headerData} menuStyle={menu.menuStyle}/>
    )
  }
}

export default StaticView