import { EDIT_ITEM, 
         FORM_SAVE_CLICK, 
         FORM_CANCEL_CLICK, 
         TOGGLE_SELECTED, 
         ADD_RECIPE, 
         RECIPES_FETCH_START,
         RECIPES_FETCH_SUCCESS,
         RECIPES_FETCH_ERROR } from '../actions'

const initialState = [{
                "id" : 0,
                "name" :"",
                "description": "",
                "link" :"",
                "category" :"",
                "notes" :"",
                "isSelected": false,
                "isEditing": false
              }]

export default function recipes(state=initialState, action) {
  switch (action.type) {
    case RECIPES_FETCH_START:
      return state
    case RECIPES_FETCH_SUCCESS:
      const loadedRecipes = action.data.map(recipe=>Object.assign({},recipe, {isSelected:false, isEditing:false}))
      return loadedRecipes
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
    case ADD_RECIPE:
      return [
        ...state,
        {
          id: state.reduce((maxId, recipe) => Math.max(recipe.id, maxId), -1) + 1,
          name : action.recipe.name,
          description: action.recipe.description,
          link : action.recipe.link,
          category : action.recipe.category,
          notes : action.recipe.notes,
          isSelected : false,
          isEditing : false
        } 
      ]
    default:
      return state
  }
}