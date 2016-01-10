import { CHANGE_VIEW } from '../actions'

const initialState = {
  view: 'RecipeView',
  categories: ['Appetizers', 'Entrees', 'Sides', 'Desserts', 'Cocktails'],
  staticMenu: {}
}

export default function application(state=initialState, action) {
  switch(action.type) {
    case CHANGE_VIEW:
      return Object.assign({}, state, {'view': action.viewName})
    default:
      return state
  }
}