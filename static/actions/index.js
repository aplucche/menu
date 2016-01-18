import fetch from 'isomorphic-fetch'

//recipe actions
export const EDIT_ITEM = 'EDIT_ITEM'
export const FORM_CANCEL_CLICK = 'FORM_CANCEL_CLICK'
export const TOGGLE_SELECTED = 'TOGGLE_SELECTED'
export const ADD_RECIPE = 'ADD_RECIPE'

export const RECIPES_FETCH_START = 'RECIPES_FETCH_START'
export const RECIPES_FETCH_SUCCESS = 'RECIPES_FETCH_SUCCESS'
export const RECIPES_FETCH_ERROR = 'RECIPES_FETCH_ERROR'

export const RECIPE_CREATE_START = 'RECIPE_CREATE_START'
export const RECIPE_CREATE_SUCCESS = 'RECIPE_CREATE_SUCCESS'
export const RECIPE_CREATE_ERROR = 'RECIPE_CREATE_ERROR'

export const RECIPE_UPDATE_START = 'RECIPE_UPDATE_START'
export const RECIPE_UPDATE_SUCCESS = 'RECIPE_UPDATE_SUCCESS'
export const RECIPE_UPDATE_ERROR = 'RECIPE_UPDATE_ERROR'

export const MENU_CREATE_START = 'MENU_CREATE_START'
export const MENU_CREATE_SUCCESS = 'MENU_CREATE_SUCCESS'
export const MENU_CREATE_ERROR = 'MENU_CREATE_ERROR'

export const MENUS_FETCH_START = 'MENU_FETCH_START'
export const MENUS_FETCH_SUCCESS = 'MENU_FETCH_SUCCESS'
export const MENUS_FETCH_ERROR = 'MENU_FETCH_ERROR'
//api actions
const jsonHeaders = new Headers();
jsonHeaders.append("Content-Type", 'application/json');

export function menuCreate(data, menuName) {
  return dispatch => {
    return fetch('../api/v1/menus', {
        method: 'POST',
        headers: jsonHeaders,
        body: JSON.stringify(Object.assign({},{data: data},{name:menuName}))
      })
      .then(response => response)
      .catch(err => console.error(err))
  }
}

export function menuCreateStart(menu) { return { type: MENU_CREATE_START, menu} }
export function menuCreateSuccess(response) { return { type: MENU_CREATE_SUCCESS, data: JSON.stringify(response) }}
export function menuCreateError(id) { return { type: MENU_CREATE_ERROR, id} }

export function menusFetch() {
  return dispatch => {
    dispatch(menusFetchStart())
    return fetch('../api/v1/menus')
      .then(response => response.json())
      .then(json => dispatch(menusFetchSuccess(json)))
  }
}

export function menusFetchStart() { return {type: MENUS_FETCH_START } }
export function menusFetchError() { return {type: MENUS_FETCH_ERROR} }

export function menusFetchSuccess(json) {
  return {
    type: MENUS_FETCH_SUCCESS, 
    data: json
  }
}

export function recipeUpdate(userId, id, recipe) {
  return dispatch => {
  dispatch(recipeUpdateStart(id, recipe))
    return fetch(`../api/v1/recipes/${id}`, {
        method: 'PUT',
        headers: jsonHeaders,
        body: JSON.stringify(recipe)
      })
      .then(response => dispatch(recipesFetch(userId)))
      .catch(err => console.error(err))
  }
}
export function recipeUpdateStart(id, recipe) {
  return {type: RECIPE_UPDATE_START, id, recipe}
}

export function recipeUpdateSuccess(response) {
  return {
    type: RECIPE_UPDATE_SUCCESS, 
    data: JSON.stringify(response)
  }
}

export function recipeUpdateError(id) {
  return {type: RECIPES_UPDATE_ERROR, id}
}


export function recipeCreate(recipe, userId) {
  return dispatch => {
    //optimistically add to state
    dispatch(recipeCreateStart(recipe))
    return fetch('../api/v1/recipes', {
        method: 'POST',
        headers: jsonHeaders,
        body: JSON.stringify(recipe)
      })
      .then(response => dispatch(recipesFetch(userId)))
      .catch(err => console.error(err))
  }
}

export function recipeCreateStart(recipe) {
  return {type: RECIPE_CREATE_START, recipe}
}

export function recipeCreateSuccess(response) {
  return {
    type: RECIPE_CREATE_SUCCESS, 
    data: JSON.stringify(response)
  }
}

export function recipeCreateError(id) {
  return {type: RECIPES_CREATE_ERROR, id}
}



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
export const SAVE_HEADER_DATA = 'SAVE_HEADER_DATA'

export function changeSelectedStyle (style) {
  return { type: CHANGE_SELECTED_STYLE, style }
}

export function toggleEditStyle () {
  return { type: TOGGLE_EDIT_STYLE }
}

export function saveStyle (style, styleData) {
  return { type: SAVE_STYLE, style, styleData }
}

export function saveHeaderData (headerData) {
  return { type: SAVE_HEADER_DATA, headerData }
}



//application
export const CHANGE_VIEW = 'CHANGE_VIEW'
export const MENUVIEW_TOGGLE_EXPANDED = 'MENUVIEW_TOGGLE_EXPANDED'

export function changeView(viewName) {
  return {type: CHANGE_VIEW, viewName}
}

export function menuViewToggleExpanded(menuViewItem, option) {
  return {type: MENUVIEW_TOGGLE_EXPANDED, menuViewItem, option}
}
