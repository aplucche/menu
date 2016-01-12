//recipe actions
export const EDIT_ITEM = 'EDIT_ITEM'
export const FORM_CANCEL_CLICK = 'FORM_CANCEL_CLICK'
export const FORM_SAVE_CLICK = 'FORM_SAVE_CLICK'
export const TOGGLE_SELECTED = 'TOGGLE_SELECTED'
export const ADD_RECIPE = 'ADD_RECIPE'

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