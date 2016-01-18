import React, { Component, PropTypes } from 'react'
import Marked from 'marked'

class RecipeItem extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded : false }
    this.toggleExpanded = this.toggleExpanded.bind(this) 
  }
  toggleExpanded() {
    this.setState( { expanded : !this.state.expanded } );
  }
  render() {
    const { recipe, actions } = this.props
    const { expanded } = this.state
    return (
      <div className='listItemContainer'>
        <div className='listFirstRow'>
          <input type='checkbox' checked={recipe.isSelected} onChange={ ()=>actions.toggleSelected(recipe.id) }></input>
          <div className='recipeName'>
            {recipe.name}
          </div>
          <button className='editButton' onClick={ () => actions.editItem(recipe.id) }>edit</button>
        </div>
        <div className='recipeDescription'>
          {recipe.description}
        </div>
        <div className='recipeLink'>
            <a href={recipe.link} target='_blank'>{ recipe.link.substring(0,32) + '...' }</a>
        </div>
        <div className='notesButtonContainer'>
          <button  className='notesButton'
            style={ (recipe.notes.length > 0) ? { 'display':'inline' }:{ 'display':'none' }} 
            onClick={this.toggleExpanded}>{expanded?'-':'+'}
          </button>
        </div>
        <div className='recipeNotes' style={expanded?{ 'display':'inline' }:{ 'display':'none' }}>
          <span dangerouslySetInnerHTML={{__html: Marked(recipe.notes, {sanitize: true, gfm: true})}} />
        </div>
      </div>
    )
  }
}

export default RecipeItem