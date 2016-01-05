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
              <textarea className='styleEditBox' name='styleEditBox' 
                    ref='styleEditBox' 
                    rows='9' 
                    defaultValue={ JSON.stringify(styles[selectedStyle], null, 4) }/>
            </div>
          : <button onClick={() => toggleEditStyle() } >Edit Selected Style</button>
        }

      </div>
    )
  }
}

export default StyleSelect