import React, { Component, PropTypes } from 'react'

class StyleSelect extends Component {
  render() {
    const { selectedStyle, styles } = this.props
    return (
      <div className='styleSelectContainer'>
        {Object.keys(styles).map(style => <div key={style} className='styleItem'>{style}</div>)}
        <div>{selectedStyle}</div>
      </div>
    )
  }
}

export default StyleSelect