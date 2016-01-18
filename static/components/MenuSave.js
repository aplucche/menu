import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class MenuSave extends Component {
  constructor(props) {
    super(props)
    this.state = {showGeneratedLink: false}
  }
  render() {
    const { actions, recipes, categories, styles, selectedStyle, savedMenus, headerData } = this.props
    const menuData = JSON.stringify({recipes: recipes, categories: categories, styles: styles, selectedStyle: selectedStyle, headerData: headerData})
    const currentURL = window.location.toString()
    return (
      <div className='menuSaveContainer'>
      {(this.state.showGeneratedLink === true) ? 
        <div>
        <div>Link: </div>
        <input className='generatedLinkTextBox' type='text' readOnly  defaultValue={()=> currentURL + '#' + ReactDOM.findDOMNode(this.refs.menuName).value}/>
        </div> :
        <div className='saveMenuForm'>
          <button onClick={ ()=> (actions.menuCreate(menuData, ReactDOM.findDOMNode(this.refs.menuName).value), this.setState({showGeneratedLink: true}))}>
            Save and Generate Link </button>
          <input className='enterMenuNameForm' ref='menuName' type='text'/>
        </div>
      }

      </div>
      )
  }
}

export default MenuSave