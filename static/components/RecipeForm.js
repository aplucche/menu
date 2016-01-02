import React, { Component, PropTypes } from 'react'

class RecipeForm extends Component {
  render() {
    const { recipe, formCancelClick, formSaveClick } = this.props
    return (
      <div className='formContainer'>
        <label forHtml='recipeName'>Name:</label>
          <br/>
          <input name='recipeName' ref='recipeName' type='text' defaultValue={ recipe.name }/>
          <br/>
        <label forHtml='recipeDescription'>Description:</label>
          <br/>
          <input name='recipeDescription' ref='recipeDescription' type='text' defaultValue={ recipe.description }/>
          <br/>
        <label forHtml='recipeLink'>Link:</label>
          <br/>
          <input name='recipeLink' ref='recipeLink' type='text' defaultValue={ recipe.link }/>
          <br/>
        <label forHtml='recipeNotes'>Notes:</label>
          <br/>
          <textarea name='recipeNotes' ref='recipeNotes' rows='3' defaultValue={ recipe.notes }/>
        <div className='formButtonRow'>
          <button className='formSave' onClick={() => formSaveClick(recipe.id, 
              {
                'name': React.findDOMNode(this.refs.recipeName).value,
                'description': React.findDOMNode(this.refs.recipeDescription).value,
                'link': React.findDOMNode(this.refs.recipeLink).value,
                'notes': React.findDOMNode(this.refs.recipeNotes).value
              }  
            )}>save</button>
          <button className='formCancel' onClick={() => formCancelClick(recipe.id) }>cancel</button>
        </div>
      </div>
      )
  }
}

export default RecipeForm