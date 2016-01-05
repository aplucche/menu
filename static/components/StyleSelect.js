import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class StyleSelect extends Component {
  render() {
    const { selectedStyle, styles, changeSelectedStyle, isEditingStyle, toggleEditStyle, saveStyle} = this.props
    return (
      <div className='styleSelectContainer'>
        {Object.keys(styles).map(style =>
          <div key={style} className='styleItem'><a href='#' onClick={() => changeSelectedStyle(style) } >{style}</a></div>)}
        {
          (isEditingStyle === true)
          ? <div>
              <button onClick={() => toggleEditStyle() } >cancel</button>  
          <button className='formSave' 
                  onClick={() => saveStyle(selectedStyle, ReactDOM.findDOMNode(this.refs.styleEditBox).value)}
                  >save</button>
              <textarea name='styleEditBox' 
                    ref='styleEditBox' 
                    rows='5' 
                    defaultValue={ JSON.stringify(styles[selectedStyle]) }/>
            </div>
          : <button onClick={() => toggleEditStyle() } >Edit Selected Style</button>
        }

      </div>
    )
  }
}

export default StyleSelect