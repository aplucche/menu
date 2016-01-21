import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class StyleSelect extends Component {
  render() {
    const { actions, selectedStyle, styleTemplates, isEditingStyle } = this.props
    return (
      <div className='styleSelectContainer'>
        <div className='menuViewSection' onClick={()=>actions.menuViewToggleExpanded('styleSelect', false)}>
          <div className='menuViewSectionLabel'>Edit Style</div>
        </div>
        <div className='currentStyle'> {'current style: ' + selectedStyle}</div>
        {Object.keys(styleTemplates).map(style =>
          <div key={style} className='styleItem'><a href='#' onClick={() => actions.changeSelectedStyle(style) } >{style}</a></div>)}
        {
          (isEditingStyle === true)
          ? <div>
              <button onClick={() => actions.toggleEditStyle() } >cancel</button>  
          <button className='formSave' 
                  onClick={() => actions.saveStyle(selectedStyle, ReactDOM.findDOMNode(this.refs.styleEditBox).value)}
                  >save</button>
              <textarea className='styleEditBox' name='styleEditBox' 
                    ref='styleEditBox' 
                    rows='9' 
                    defaultValue={ JSON.stringify(styleTemplates[selectedStyle], null, 4) }/>
            </div>
          : <button onClick={() => actions.toggleEditStyle() } >Edit Selected Style</button>
        }

      </div>
    )
  }
}

export default StyleSelect