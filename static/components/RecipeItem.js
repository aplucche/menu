import React, { Component, PropTypes } from 'react'

class RecipeItem extends Component {
  render() {
    const { name } = this.props
    return (
      <li>
      {name}
      </li>
    )
  }
}

export default RecipeItem