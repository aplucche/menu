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
    const { recipe } = this.props
    const { expanded } = this.state
    return (
      <li>
        <div className='recipeName'>
          {recipe.name}
        </div>
        <div className='recipeLink'>
            <a href={recipe.link} target='_blank'>{recipe.link.substring(0,32) + '...'}</a>
        </div>
        <button 
          style={ (recipe.notes.length > 0) ?{'display':'inline'}:{'display':'none'}} 
          onClick={this.toggleExpanded}>{expanded?'-':'+'}
        </button>
        <div className='recipeNotes' style={expanded?{'display':'inline'}:{'display':'none'}}>
          {recipe.notes}
        </div>

      </li>
    )
  }
}

export default RecipeItem