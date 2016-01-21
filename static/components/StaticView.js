import React, { Component, PropTypes } from 'react'
import Menu from './Menu'

class StaticView extends Component {
  setMenuProperties(savedMenus, urlHash) {
    var recipes = []
    var menuStyle = {
      menuContainer: {}, 
      menuHeader: {}
    }
    var headerData={}
    if(urlHash in savedMenus && urlHash!=='') {
      recipes = savedMenus[urlHash].recipes
      menuStyle = savedMenus[urlHash].selectedStyleData
      headerData = savedMenus[urlHash].headerData
    }
    return { recipes: recipes, menuStyle: menuStyle, headerData: headerData }
  }
  render() {
    const {savedMenus, urlHash, categories } = this.props
    const menu = this.setMenuProperties(savedMenus, urlHash)
    console.log(menu)
    return (
      <Menu recipes={menu.recipes} categories={categories} headerData={menu.headerData} menuStyle={menu.menuStyle}/>
    )
  }
}

export default StaticView