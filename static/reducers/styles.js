import { CHANGE_SELECTED_STYLE, TOGGLE_EDIT_STYLE, SAVE_STYLE, SAVE_HEADER_DATA } from '../actions'

const initialState = {
    headerData: {
      title: "example",
      description: "an example",
      date: "1/18/16"
    },
    selectedStyle: 'basic',
    isEditingStyle: false,
    styles: {
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
      return Object.assign({}, state, {'selectedStyle': action.style})
    case TOGGLE_EDIT_STYLE:
      return Object.assign({}, state, {'isEditingStyle': !state.isEditingStyle})
    case SAVE_STYLE:
      const updatedStyles = Object.assign({}, state.styles, {[action.style]: JSON.parse(action.styleData)})
      return Object.assign({}, state, {styles: updatedStyles,'isEditingStyle': !state.isEditingStyle})
    case SAVE_HEADER_DATA:
      return Object.assign({}, state, {headerData: action.headerData})
      return state  
    default:
      return state
  }
}