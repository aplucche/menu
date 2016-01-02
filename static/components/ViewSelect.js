import React, { Component, PropTypes } from 'react'

class ViewSelect extends Component {
  render() {
    return (
      <div className='viewSelectContainer'>
        <button>Recipe View</button>
        <button>Menu View</button>
      </div>
      )
  }
}

export default ViewSelect