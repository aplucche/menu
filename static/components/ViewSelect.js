import React, { Component, PropTypes } from 'react'

class ViewSelect extends Component {
  render() {
    const { changeView } = this.props 
    return (
      <div className='viewSelectContainer'>
        <button onClick={() => changeView('RecipeView') }>Recipe View</button>
        <button onClick={() => changeView('MenuView') }>Menu View</button>
      </div>
      )
  }
}

export default ViewSelect