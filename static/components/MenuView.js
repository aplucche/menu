import React, { Component, PropTypes } from 'react'
import StyleSelect from './StyleSelect'
import Menu from './Menu'

class MenuView extends Component {
  render() {
    const { recipes, categories, selectedStyle, styles, changeSelectedStyle, isEditingStyle, toggleEditStyle, saveStyle } = this.props
    return (
      <div className='menuViewContainer'>
      <StyleSelect selectedStyle={selectedStyle} 
                   styles={styles} 
                   changeSelectedStyle={changeSelectedStyle}
                   isEditingStyle={isEditingStyle}
                   toggleEditStyle={toggleEditStyle}
                   saveStyle={saveStyle}
                   />
      <MenuSelect />
        <Menu recipes={recipes} categories={categories} menuStyle={styles[selectedStyle]}/>
      </div>
      )
  }
}

export default MenuView