import React, { Component, PropTypes } from 'react'
import StyleSelect from './StyleSelect'
import MenuSelect from './MenuSelect'
import HeaderSelect from './HeaderSelect'
import MenuSave from './MenuSave'
import Menu from './Menu'

class MenuView extends Component {
  render() {
    const { actions, recipes, categories, selectedStyle, styleTemplates, headerData, selectedStyleData,
            isEditingStyle, savedMenus, menuViewExpandedItems } = this.props
    return (
      <div className='menuViewContainer'>
      {(menuViewExpandedItems.styleSelect === true) ?
        <StyleSelect actions={actions}
                     selectedStyle={selectedStyle} 
                     selectedStyleData={selectedStyleData}
                     styleTemplates={styleTemplates} 
                     isEditingStyle={isEditingStyle}
                     />: 
        <div className='menuViewSection' onClick={()=>actions.menuViewToggleExpanded('styleSelect', true)}>
          <div className='menuViewSectionLabel'>Edit Style</div>
        </div>}
      {(menuViewExpandedItems.headerSelect === true) ?
        <HeaderSelect actions={actions} headerData={headerData}/>: 
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
                    headerData ={headerData}
                    selectedStyle={selectedStyle}
                    selectedStyleData={selectedStyleData}
                    savedMenus={savedMenus}/>
        <Menu recipes={recipes} categories={categories} headerData={headerData} menuStyle={selectedStyleData}/>
      </div>
      )
  }
}

export default MenuView