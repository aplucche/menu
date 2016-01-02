import React, { Component, PropTypes } from 'react'
import RecipeList from '../components/RecipeList'
import RecipeForm from '../components/RecipeForm'

class App extends Component {
 constructor(props) {
    super(props);
    this.state = {recipes : [
              {
                "id" : 1,
                "name" :"Sausage Herb Stuffing",
                "description": "",
                "link" :"http://www.foodnetwork.com/recipes/ina-garten/sausage-and-herb-stuffing-recipe.html",
                "category" :"side",
                "notes" :"",
                "isEditing": false
              },
              {
                "id" : 2,
                "name" :"Butternut Squash Soup",
                "description": "",
                "link" :"http://www.foodnetwork.com/recipes/food-network-kitchens/butternut-squash-soup-recipe1.html?vty=recipes/butternut-squash-soup-recipe.html",
                "category" :"appetizer",
                "notes" :"###Tips at###  http://cookieandkate.com/2015/roasted-butternut-squash-soup/",
                "isEditing": false
              },
              {
                "id" : 3,
                "name" :"Fitgerald",
                "description": "Hendrix gin with lemon simple syrup and bitters",
                "link" :"http://www.thekitchn.com/forgotten-gin-cocktails-part-1-166935",
                "category" :"drink",
                "notes" :"",
                "isEditing": false
              },
              {
                "id" : 4,
                "name" :"Baked Apples",
                "description" :"filled with cinnamon and oats",
                "link" :"http://www.thekitchn.com/recipe-baked-apples-stuffed-with-oatmeal-brown-sugar-75752",
                "category" :"dessert",
                "notes" :"",
                "isEditing": false
              },
              {
                "id" : 5,
                "name" :"Cranberry Sauce",
                "description": "",
                "link" :"http://www.foodnetwork.com/recipes/food-network-kitchens/perfect-cranberry-sauce-recipe.html",
                "category" :"side",
                "notes" :"",
                "isEditing": true
              },
              {
                "id" : 6,
                "name" :"Mojito",
                "description": "Muddled mint and simple syrup with rum and club soda",
                "link" :"http://www.foodnetwork.com/recipes/food-network-kitchens/perfect-cranberry-sauce-recipe.html",
                "category" :"drink",
                "notes" :"",
                "isEditing": false
              }
            ]
    }
  }
  editItem(id) {
  var editedRecipes = this.state.recipes.map(recipe => 
          (recipe.id===id) ? Object.assign({}, recipe, {'isEditing':true}) : recipe)
  this.setState(Object.assign({}, this.state, {'recipes': editedRecipes}))
  }
  render() {
    const { recipes } = this.state
    return (
      <div className='appContainer'>
          <RecipeList recipes={ recipes } editItem={this.editItem.bind(this)}/>       
      </div>
    )
  }
}

export default App