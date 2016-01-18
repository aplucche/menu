import React, { Component, PropTypes } from 'react'

class ViewSelect extends Component {
  render() {
    const { actions } = this.props 
    return (
      <div className='viewSelectContainer'>
        <button onClick={() => actions.changeView('RecipeView') }>Recipe View</button>
        <button onClick={() => actions.changeView('MenuView') }>Menu View</button>
      </div>
      )
  }
}

export default ViewSelect