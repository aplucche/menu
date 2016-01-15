import { CHANGE_VIEW, MENU_CREATE_START, MENU_CREATE_SUCCESS, MENU_CREATE_ERROR } from '../actions'
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
    case MENU_CREATE_START:
      return state
    case MENU_CREATE_SUCCESS:
      return state
    default:
      return state
  }
}