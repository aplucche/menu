import { CHANGE_VIEW } from '../actions'
import SavedMenuData from '../dev/SavedMenuData'


const savedMenuData = SavedMenuData

const initialState = {
  view: 'RecipeView',
  categories: ['Appetizers', 'Entrees', 'Sides', 'Desserts', 'Cocktails'],
  staticMenu: savedMenuData
}

export default function application(state=initialState, action) {
  switch(action.type) {
    case CHANGE_VIEW:
      return Object.assign({}, state, {'view': action.viewName})
    default:
      return state
  }
}