export const EDIT_ITEM = 'EDIT_ITEM'
export const FORM_CANCEL_CLICK = 'FORM_CANCEL_CLICK'
export const FORM_SAVE_CLICK = 'FORM_SAVE_CLICK'
export const TOGGLE_SELECTED = 'TOGGLE_SELECTED'

export function editItem(id) {
  return { type: EDIT_ITEM, id }
}

export function formCancelClick(id) {
  return { type: FORM_CANCEL_CLICK, id }
}

export function formSaveClick(id, updatedRecipe) {
  return { type: types.EDIT_TODO, id, updatedRecipe }
}

export function toggleSelected(id) {
  return { type: TOGGLE_SELECTED, id }
}
