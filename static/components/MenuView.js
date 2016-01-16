import React, { Component, PropTypes } from 'react'
import StyleSelect from './StyleSelect'
import MenuSelect from './MenuSelect'
import HeaderSelect from './HeaderSelect'
import MenuSave from './MenuSave'
import Menu from './Menu'

class MenuView extends Component {
  render() {
    const { actions, recipes, categories, selectedStyle, styles, 
            changeSelectedStyle, isEditingStyle, toggleEditStyle, saveStyle, savedMenus, menuViewExpandedItems } = this.props
    return (
      <div className='menuViewContainer'>
      {(menuViewExpandedItems.styleSelect === true) ?
        <StyleSelect actions={actions}
                     selectedStyle={selectedStyle} 
                     styles={styles} 
                     changeSelectedStyle={changeSelectedStyle}
                     isEditingStyle={isEditingStyle}
                     toggleEditStyle={toggleEditStyle}
                     saveStyle={saveStyle}
                     />: 
        <div className='menuViewSection' onClick={()=>actions.menuViewToggleExpanded('styleSelect', true)}>
          <div className='menuViewSectionLabel'>Edit Style</div>
        </div>}
      {(menuViewExpandedItems.headerSelect === true) ?
        <HeaderSelect actions={actions}/>: 
        <div className='menuViewSection' onClick={()=>actions.menuViewToggleExpanded('headerSelect', true)}>
          <div className='menuViewSectionLabel'>Edit Menu Headers</div>
        </div>}
      {(menuViewExpandedItems.menuSelect === true) ?
        <MenuSelect actions={actions}
                    savedMenus={savedMenus}/>: 
        <div className='menuViewSection' onClick={()=>actions.menuViewToggleExpanded('menuSelect', true)}>
          <div className='menuViewSectionLabel'>Select A Saved Menu</div>
        </div>}
        <MenuSave actions={actions}
                    recipes={recipes}
                    categories={categories}
                    styles={styles}
                    selectedStyle={selectedStyle}
                    savedMenus={savedMenus}/>
        <Menu recipes={recipes} categories={categories} menuStyle={styles[selectedStyle]}/>
      </div>
      )
  }
}

export default MenuView