import React, { Component, PropTypes } from 'react'
import StyleSelect from './StyleSelect'
import MenuSelect from './MenuSelect'
import Menu from './Menu'

class MenuView extends Component {
  render() {
    const { actions, recipes, categories, selectedStyle, styles, 
            changeSelectedStyle, isEditingStyle, toggleEditStyle, saveStyle, savedMenus } = this.props
    return (
      <div className='menuViewContainer'>
        <StyleSelect selectedStyle={selectedStyle} 
                     styles={styles} 
                     changeSelectedStyle={changeSelectedStyle}
                     isEditingStyle={isEditingStyle}
                     toggleEditStyle={toggleEditStyle}
                     saveStyle={saveStyle}
                     />
        <MenuSelect actions={actions}
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