import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class RecipeForm extends Component {
  render() {
    const { recipe, formCancelClick, formSaveClick, categories } = this.props
    return (
      <div className='formContainer'>
        <div className='formButtonRow'>
          <button className='formSave' onClick={() => formSaveClick(recipe.id, 
              {
                'name': ReactDOM.findDOMNode(this.refs.recipeName).value,
                'description': ReactDOM.findDOMNode(this.refs.recipeDescription).value,
                'link': ReactDOM.findDOMNode(this.refs.recipeLink).value,
                'notes': ReactDOM.findDOMNode(this.refs.recipeNotes).value,
                'category': ReactDOM.findDOMNode(this.refs.recipeCategory).value
              }  
            )}>save</button>
          <button className='formCancel' onClick={() => formCancelClick(recipe.id) }>cancel</button>
        </div>
        <label forHtml='recipeName'>Name:</label>
          <input name='recipeName' ref='recipeName' type='text' defaultValue={ recipe.name }/>
        <label forHtml='recipeDescription'>Description:</label>
          <input name='recipeDescription' ref='recipeDescription' type='text' defaultValue={ recipe.description }/>
        <label forHtml='recipeLink'>Link:</label>
          <input name='recipeLink' ref='recipeLink' type='text' defaultValue={ recipe.link }/>
          <label forHtml='recipeCategory'>Category:</label>
            <select name='recipeCategory' ref='recipeCategory' defaultValue={ recipe.category }>
              {categories.map(category => <option key={category} value={category}>{category}</option>)}
            </select>
        <label forHtml='recipeNotes'>Notes:</label>
          <textarea name='recipeNotes' ref='recipeNotes' rows='3' defaultValue={ recipe.notes }/>
      </div>
      )
  }
}

export default RecipeForm