import fetch from 'isomorphic-fetch'

//recipe actions
export const EDIT_ITEM = 'EDIT_ITEM'
export const FORM_CANCEL_CLICK = 'FORM_CANCEL_CLICK'
export const FORM_SAVE_CLICK = 'FORM_SAVE_CLICK'
export const TOGGLE_SELECTED = 'TOGGLE_SELECTED'
export const ADD_RECIPE = 'ADD_RECIPE'

export const RECIPES_FETCH_START = 'RECIPES_FETCH_START'
export const RECIPES_FETCH_SUCCESS = 'RECIPES_FETCH_SUCCESS'
export const RECIPES_FETCH_ERROR = 'RECIPES_FETCH_ERROR'

//api actions
export function recipesFetchStart(userId) {
  return {type: RECIPES_FETCH_START, userId}
}

export function recipesFetch(userId) {
  return dispatch => {
    dispatch(recipesFetchStart(userId))
    return fetch('../api/v1/recipes')
      .then(response => response.json())
      .then(json => dispatch(recipesFetchSuccess(userId, json)))
  }
}

export function recipesFetchSuccess(userId, json) {
  console.log(json)
  return {
    type: RECIPES_FETCH_SUCCESS, 
    userId,
    //data: json.data.children.map(child => child.data)
    data: json
  }
}

export function recipesFetchError(userId) {
  return {type: RECIPES_FETCH_ERROR, userId}
}

//recipe actions
export function editItem(id) {
  return { type: EDIT_ITEM, id }
}

export function formCancelClick(id) {
  return { type: FORM_CANCEL_CLICK, id }
}

export function formSaveClick(id, updatedRecipe) {
  return { type: FORM_SAVE_CLICK, id, updatedRecipe }
}

export function toggleSelected(id) {
  return { type: TOGGLE_SELECTED, id }
}
export function addRecipe(recipe) {
  return { type: ADD_RECIPE, recipe }
}


//styles actions
export const CHANGE_SELECTED_STYLE = 'CHANGE_SELECTED_STYLE'
export const TOGGLE_EDIT_STYLE = 'TOGGLE_EDIT_STYLE'
export const SAVE_STYLE = 'SAVE_STYLE'

export function changeSelectedStyle (style) {
  return {type: CHANGE_SELECTED_STYLE, style}
}

export function toggleEditStyle () {
  return {type: TOGGLE_EDIT_STYLE}
}

export function saveStyle (style, styleData) {
  return {type: SAVE_STYLE, style, styleData}
}


//application
export const CHANGE_VIEW = 'CHANGE_VIEW'

export function changeView(viewName) {
  return {type: CHANGE_VIEW, viewName}
}