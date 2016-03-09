import { CHANGE_SELECTED_STYLE, TOGGLE_EDIT_STYLE, SAVE_STYLE, SAVE_HEADER_DATA, LOAD_SAVED_MENU } from '../actions'
import { styleTemplates } from '../style_templates'

const initialState = {
    headerData: {
      title: "Today's Selection",
      description: "",
      date: ""
    },
    selectedStyle: 'basic',
    selectedStyleData: {},
    isEditingStyle: false,
    isCustomStyle: false,
    styleTemplates: styleTemplates
}

export default function styles(state=initialState, action) {
  switch(action.type) {
    case CHANGE_SELECTED_STYLE:
      return Object.assign({}, state, {selectedStyle: action.style, selectedStyleData: state.styleTemplates[action.style]})
    case TOGGLE_EDIT_STYLE:
      return Object.assign({}, state, {'isEditingStyle': !state.isEditingStyle})
    case SAVE_STYLE:
      return Object.assign({}, state, {
                                   selectedStyleData: JSON.parse(action.styleData),
                                   selectedStyle: 'custom',
                                   isEditingStyle: !state.isEditingStyle
                                      })
    case SAVE_HEADER_DATA:
      return Object.assign({}, state, {headerData: action.headerData})
    case LOAD_SAVED_MENU:
      return Object.assign({}, state, {
               selectedStyle: action.menuData.selectedStyle,
               selectedStyleData: action.menuData.selectedStyleData, 
               headerData: action.menuData.headerData, 
                                      })
    default:
      return state
  }
}