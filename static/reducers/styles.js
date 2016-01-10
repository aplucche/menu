import {CHANGE_SELECTED_STYLE, TOGGLE_EDIT_STYLE, SAVE_STYLE } from '../actions'

const initialState = {
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
        menuHeader: {
          title: "Today's Selection",
          description: "",
          date: "1/1/2016"
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
        menuHeader: {
          title: "",
          description: "",
          date: ""
        },
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
    default:
      return state
  }
}