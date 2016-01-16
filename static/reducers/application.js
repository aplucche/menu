import { CHANGE_VIEW, 
         MENU_CREATE_START, MENU_CREATE_SUCCESS, MENU_CREATE_ERROR, 
         MENUS_FETCH_START, MENUS_FETCH_SUCCESS } from '../actions'
import SavedMenuData from '../dev/SavedMenuData'


const savedMenuData = SavedMenuData

const initialState = {
  view: 'RecipeView',
  categories: ['Appetizers', 'Entrees', 'Sides', 'Desserts', 'Cocktails'],
  savedMenus: {menu:{recipes:'', categories:'', selectedStyle:'',styles:''}},
  selectedStyle: 'basic' 
}

export default function application(state=initialState, action) {
  switch(action.type) {
    case CHANGE_VIEW:
      return Object.assign({}, state, {'view': action.viewName})
    case MENU_CREATE_START:
      return state
    case MENU_CREATE_SUCCESS:
      return state
    case MENUS_FETCH_START:
      return state
    case MENUS_FETCH_SUCCESS:

      return Object.assign({}, state, { savedMenus: action.data })

    default:
      return state
  }
}