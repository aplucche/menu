import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class AddRecipe extends Component {
  constructor(props) {
    super(props)
    this.state = {expanded: false}
  }
  render() {
    const { categories, actions } = this.props

    return (
      <div className='AddRecipeContainer'>
        {(this.state.expanded===true) ? 
        <div className='formContainer'>
          <div className='formButtonRow'>
            <button className='formSave' onClick={()=> actions.recipeCreate(
                {
                  'name': ReactDOM.findDOMNode(this.refs.addRecipeName).value,
                  'description': ReactDOM.findDOMNode(this.refs.addRecipeDescription).value,
                  'link': ReactDOM.findDOMNode(this.refs.addRecipeLink).value,
                  'notes': ReactDOM.findDOMNode(this.refs.addRecipeNotes).value,
                  'category': ReactDOM.findDOMNode(this.refs.addRecipeCategory).value,
                  'userid' : 1
                }  
              , 1 ,this.setState({expanded: false}))}>save</button>
            <button className='collapseAddRecipeForm' onClick={()=>this.setState({expanded: false})}>cancel</button>
          </div>
          <label forHtml='recipeName'>Name:</label>
            <input name='recipeName' ref='addRecipeName' type='text' defaultValue=''/>
          <label forHtml='recipeDescription'>Description:</label>
            <input name='recipeDescription' ref='addRecipeDescription' type='text' defaultValue=''/>
          <label forHtml='recipeLink'>Link:</label>
            <input name='recipeLink' ref='addRecipeLink' type='text' defaultValue=''/>
          <label forHtml='recipeCategory'>Category:</label>
            <select name='recipeCategory' ref='addRecipeCategory'>
              {categories.map(category => <option key={category} value={category}>{category}</option>)}
            </select>
          <label forHtml='recipeNotes'>Notes:</label>
            <textarea name='recipeNotes' ref='addRecipeNotes' rows='3' defaultValue=''/>
        </div>
        : <button className='expandAddRecipeForm' onClick={()=>this.setState({expanded: true})}>Add Item</button>}

      </div>
    )
  }

}

export default AddRecipe