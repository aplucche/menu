import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class MenuSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {expanded: false, showGeneratedLink: false}
  }

  componentDidMount() {
    this.props.actions.menusFetch()
  }
  render() {
    const { actions, recipes, categories, styles, selectedStyle, savedMenus } = this.props
    const menuData = JSON.stringify({recipes: recipes, categories: categories, styles: styles, selectedStyle: selectedStyle})

    return (
      <div className='menuSaveContainer'>
      <div className='savedMenuList' style={ (this.state.expanded===true) ? { 'display':'inline' }:{ 'display':'none' }}>
        {Object.keys(savedMenus).map((menuName) => <li key={menuName}>{menuName}</li>)}

      </div>
      <button className='toggleMenuSelect' 
        onClick={()=>this.setState({expanded: !this.state.expanded})}>{(this.state.expanded)?'-':'+'}</button><br />
      {(this.state.showGeneratedLink === true) ? 
        <div>
        <div>Link: </div>
        <input className='generatedLinkTextBox' type='text' readOnly  defaultValue={()=> window.location.toString() + '/' + ReactDOM.findDOMNode(this.refs.menuName).value}/>
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

export default MenuSelect