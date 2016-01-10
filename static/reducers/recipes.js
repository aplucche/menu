import { EDIT_ITEM, FORM_SAVE_CLICK, FORM_CANCEL_CLICK, TOGGLE_SELECTED } from '../actions'

const initialState = [
              {
                "id" : 1,
                "name" :"Sausage Herb Stuffing",
                "description": "",
                "link" :"http://www.foodnetwork.com/recipes/ina-garten/sausage-and-herb-stuffing-recipe.html",
                "category" :"Sides",
                "notes" :"",
                "isSelected": true,
                "isEditing": false
              },
              {
                "id" : 2,
                "name" :"Butternut Squash Soup",
                "description": "",
                "link" :"http://www.foodnetwork.com/recipes/food-network-kitchens/butternut-squash-soup-recipe1.html?vty=recipes/butternut-squash-soup-recipe.html",
                "category" :"Appetizers",
                "notes" :"### Additional Cooking Tips At http://cookieandkate.com/2015/roasted-butternut-squash-soup/",
                "isSelected": false,
                "isEditing": false
              },
              {
                "id" : 3,
                "name" :"Fitgerald",
                "description": "Hendrix gin with lemon, simple syrup and bitters",
                "link" :"http://www.thekitchn.com/forgotten-gin-cocktails-part-1-166935",
                "category" :"Cocktails",
                "notes" :"",
                "isSelected": true,
                "isEditing": false
              },
              {
                "id" : 4,
                "name" :"Baked Apples",
                "description" :"filled with cinnamon and oats",
                "link" :"http://www.thekitchn.com/recipe-baked-apples-stuffed-with-oatmeal-brown-sugar-75752",
                "category" :"Desserts",
                "notes" :"",
                "isSelected": true,
                "isEditing": false
              },
              {
                "id" : 5,
                "name" :"Cranberry Sauce",
                "description": "",
                "link" :"http://www.foodnetwork.com/recipes/food-network-kitchens/perfect-cranberry-sauce-recipe.html",
                "category" :"Sides",
                "notes" :"",
                "isSelected": true,
                "isEditing": false
              },
              {
                "id" : 6,
                "name" :"Mojito",
                "description": "Muddled mint and simple syrup with rum and club soda",
                "link" :"http://www.foodnetwork.com/recipes/food-network-kitchens/perfect-cranberry-sauce-recipe.html",
                "category" :"Cocktails",
                "notes" :"",
                "isSelected": false,
                "isEditing": false
              },
              {
                "id" : 7,
                "name" :"Creme Brulee",
                "description": "",
                "link" :"http://www.foodnetwork.com/recipes/ina-garten/creme-brulee-recipe.html",
                "category" :"Desserts",
                "notes" :"",
                "isSelected": false,
                "isEditing": false
              },
              {
                "id" : 8,
                "name" :"Old Fashioned Diplomat",
                "description": "Diplomatico Reserva Exclusiva, Angostura Bitters, Brown Sugar, Lemon Juice",
                "link" :"http://www.minettatavernny.com/menus/dinner.pdf",
                "category" :"Cocktails",
                "notes" :"",
                "isSelected": false,
                "isEditing": false
              },
              {
                "id" : 9,
                "name" :"Bun Bo Hue",
                "description": "",
                "link" :"http://wanderingchopsticks.blogspot.com/2008/06/bun-bo-hue-vietnamese-hue-style-beef.html",
                "category" :"Entrees",
                "notes" :"",
                "isSelected": false,
                "isEditing": false
              },
              {
                "id" : 10,
                "name" :"Bun Rieu Cua",
                "description": "",
                "link" :"http://www.theravenouscouple.com/2010/01/bun-rieu-cua-crab-noodle-soup.html",
                "category" :"Entrees",
                "notes" :"",
                "isSelected": true,
                "isEditing": false
                }
]

export default function recipes(state=initialState, action) {
  switch (action.type) {
    case EDIT_ITEM:
      return state.map(recipe =>
        (recipe.id===action.id) ? Object.assign({}, recipe, {'isEditing':true}) : recipe
      )
    case FORM_SAVE_CLICK:
      return state.map(recipe => 
        (recipe.id===action.id) ? Object.assign({}, recipe, action.updatedRecipe, {'isEditing':false}) : recipe
      )
    case FORM_CANCEL_CLICK:
      return state.map(recipe =>
        (recipe.id===action.id) ? Object.assign({}, recipe, {'isEditing':false}) : recipe
      )
    case TOGGLE_SELECTED:
      return state.map(recipe =>
        (recipe.id===action.id) ? Object.assign({}, recipe, {'isSelected':!recipe.isSelected}) : recipe
      )
    default:
      return state
  }
}