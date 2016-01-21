import { CHANGE_VIEW, MENUVIEW_TOGGLE_EXPANDED,
         MENU_CREATE_START, MENU_CREATE_SUCCESS, MENU_CREATE_ERROR, 
         MENUS_FETCH_START, MENUS_FETCH_SUCCESS, LOAD_SAVED_MENU } from '../actions'
import SavedMenuData from '../dev/SavedMenuData'


const savedMenuData = SavedMenuData

const initialState = {
  view: 'RecipeView',
  categories: ['Appetizers', 'Entrees', 'Sides', 'Desserts', 'Cocktails'],
  savedMenus: {menu:{recipes:'', categories:'', selectedStyle:'',styles:''}},
  selectedStyle: 'basic',
  menuViewExpandedItems: {styleSelect: false, headerSelect: false, savedMenuSelect: false}
}

export default function application(state=initialState, action) {
  switch(action.type) {
    case CHANGE_VIEW:
      return Object.assign({}, state, {'view': action.viewName})
    case MENUVIEW_TOGGLE_EXPANDED:
      const expandedItems = Object.assign({}, state.menuViewExpandedItems, {[action.menuViewItem]:action.option})
      return Object.assign({}, state, {'menuViewExpandedItems': expandedItems})
    case MENU_CREATE_START:
      return state
    case MENU_CREATE_SUCCESS:
      return state
    case MENUS_FETCH_START:
      return state
    case MENUS_FETCH_SUCCESS:
      var menuObject = {}
      for (let menu of action.data) {
        menuObject[menu.name] = JSON.parse(menu.data)
      }
      return Object.assign({}, state, { savedMenus: menuObject })
    case LOAD_SAVED_MENU:
      return Object.assign({}, state, {selectedStyle: action.menuData.selectedStyle})
    default:
      return state
  }
}