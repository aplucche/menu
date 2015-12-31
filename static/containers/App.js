import React, { Component, PropTypes } from 'react'
import RecipeList from '../components/RecipeList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {recipes : [
              {
                "id" : 1,
                "name" :"Sausage Herb Stuffing",
                "link" :"http://www.foodnetwork.com/recipes/ina-garten/sausage-and-herb-stuffing-recipe.html",
                "category" :"side",
                "notes" :""
              },
              {
                "id" : 2,
                "name" :"Butternut Squash Soup",
                "link" :"http://www.foodnetwork.com/recipes/food-network-kitchens/butternut-squash-soup-recipe1.html?vty=recipes/butternut-squash-soup-recipe.html",
                "category" :"appetizer",
                "notes" :"###Tips at###  http://cookieandkate.com/2015/roasted-butternut-squash-soup/"
              },
              {
                "id" : 3,
                "name" :"Fitgerald",
                "link" :"http://www.thekitchn.com/forgotten-gin-cocktails-part-1-166935",
                "category" :"drinks",
                "notes" :""
              },
              {
                "id" : 4,
                "name" :"Baked Apples",
                "link" :"http://www.thekitchn.com/recipe-baked-apples-stuffed-with-oatmeal-brown-sugar-75752",
                "category" :"dessert",
                "notes" :""
              },
              {
                "id" : 5,
                "name" :"Cranberry Sauce",
                "link" :"http://www.foodnetwork.com/recipes/food-network-kitchens/perfect-cranberry-sauce-recipe.html",
                "category" :"side",
                "notes" :""
              }
            ]
    }
  }
  render() {
    const { recipes } = this.state
    return (
      <RecipeList recipes={ recipes }/>       
    )
  }
}

export default App