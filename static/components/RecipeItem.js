import React, { Component, PropTypes } from 'react'

class RecipeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {expanded : false}
    this.toggleExpanded = this.toggleExpanded.bind(this) 
  }
  toggleExpanded() {
    this.setState( { expanded : !this.state.expanded } );
  }
  render() {
    const { recipe, editItem } = this.props
    const { expanded } = this.state
    return (
      <div className='listItemContainer'>
        <div className='listFirstRow'>
          <div className='recipeName'>
            {recipe.name}
          </div>
          <button className='editButton' onClick={() => editItem(recipe.id) }>edit</button>
        </div>
        <div className='recipeDescription'>
          {recipe.description}
        </div>
        <div className='recipeLink'>
            <a href={recipe.link} target='_blank'>{recipe.link.substring(0,32) + '...'}</a>
        </div>
        <div className='notesButtonContainer'>
          <button  className='notesButton'
            style={ (recipe.notes.length > 0) ? {'display':'inline'}:{'display':'none'}} 
            onClick={this.toggleExpanded}>{expanded?'-':'+'}
          </button>
        </div>
        <div className='recipeNotes' style={expanded?{'display':'inline'}:{'display':'none'}}>
          {recipe.notes}
        </div>
      </div>
    )
  }
}

export default RecipeItem