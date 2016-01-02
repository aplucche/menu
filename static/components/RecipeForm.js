import React, { Component, PropTypes } from 'react'

class RecipeForm extends Component {
  render() {
    const { recipe, formCancelClick } = this.props
    return (
      <div className='formContainer'>
        <label forHtml='recipeName'>Name:</label>
          <br/>
          <input name='recipeName' type='text' defaultValue={ recipe.name }/>
          <br/>
        <label forHtml='recipeDescription'>Description:</label>
          <br/>
          <input name='recipeDescription' type='text' defaultValue={ recipe.description }/>
          <br/>
        <label forHtml='recipeLink'>Link:</label>
          <br/>
          <input name='recipeLink' type='text' defaultValue={ recipe.link }/>
          <br/>
        <label forHtml='recipeNotes'>Notes:</label>
          <br/>
          <textarea name='recipeNotes' rows='3' defaultValue={ recipe.notes }/>
        <div className='formButtonRow'>
          <button className='formSave'>save</button>
          <button className='formCancel' onClick={() => formCancelClick(recipe.id) }>cancel</button>
        </div>
      </div>
      )
  }
}

export default RecipeForm