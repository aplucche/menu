import React, { Component, PropTypes } from 'react'
import Menu from './Menu'

class StaticView extends Component {
  render() {
    const { recipes, categories, styles, selectedStyle } = this.props
    return (
      <Menu recipes={recipes} categories={categories} menuStyle={styles[selectedStyle]}/>
    )
  }
}

export default StaticView