import { EDIT_ITEM } from '../actions/recipes'

const initialState = [
  {
    id: 0
  }
]

export default function recipes(state=initialState, action) {
  switch (action.type) {
    case EDIT_ITEM:
      return state.map(recipe =>
        recipe.id===action.id ? Object.assign({}, recipe, {'isEditing':true}) :
        recipe
      )
    default:
      return state
  }
}