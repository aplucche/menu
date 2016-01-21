import { CHANGE_SELECTED_STYLE, TOGGLE_EDIT_STYLE, SAVE_STYLE, SAVE_HEADER_DATA, LOAD_SAVED_MENU } from '../actions'

const initialState = {
    headerData: {
      title: "example",
      description: "an example",
      date: "1/18/16"
    },
    selectedStyle: 'basic',
    selectedStyleData: {},
    isEditingStyle: false,
    isCustomStyle: false,
    styleTemplates: {
      basic: {
        menuContainer: {
          fontFamily: "Merriweather",
          background: "floralwhite",
          color: "gray",
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          width: 500,
          border: "1px solid oldlace"
        },
        menuHeaderStyle : {
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          fontWeight: "bold",
          marginTop: "15px"
        },
        menuCategoryContainer: {
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          marginTop: "10px",
          borderBottom: "solid 1px lightgray"
        },
        menuCategory: {
          fontWeight: "bold",
          color: "dimgray"
        },
        menuItem: {
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          marginTop: "10px",
          paddingBottom: "10px"
        },
        menuItemName: {},
        menuItemDescription: {
          "fontStyle": "italic"
        }
    },
      minimal: {
        menuHeaderStyle : {},
        menuContainer: {color:'blue'},
        menuCategory: {},
        menuCategoryContainer: {},
        menuItem: {},
        menuItemName: {},
        menuItemDescription: {}
      }
    } 
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
               isEditingStyle: !state.isEditingStyle, 
                                      })
    case SAVE_HEADER_DATA:
      return Object.assign({}, state, {headerData: action.headerData})
    case LOAD_SAVED_MENU:
      return Object.assign({}, state, {
               selectedStyleData: action.menuData.selectedStyleData, 
               headerData: action.menuData.headerData, 
                                      })
    default:
      return state
  }
}