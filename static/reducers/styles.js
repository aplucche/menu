import { CHANGE_SELECTED_STYLE, TOGGLE_EDIT_STYLE, SAVE_STYLE, SAVE_HEADER_DATA, LOAD_SAVED_MENU } from '../actions'

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
          "textAlign": "center",
          marginTop: "10px",
          paddingBottom: "10px"
        },
        menuItemName: {},
        menuItemDescription: {
          "fontStyle": "italic",
          "textAlign": "center"
        }
    },
      bold: {
        menuContainer: {
          fontFamily: "Oleo Script, cursive",
          background: "#542437",
          color: "#D95B43",
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          width: 500,
          border: "1px solid #53777A"
        },
        menuHeaderStyle : {
          display: "flex",
          flexFlow: "column nowrap",
          color: "#C02942",
          fontSize: "155%",
          alignItems: "center",
          fontWeight: "bold",
          marginTop: "15px"
        },
        menuCategoryContainer: {
          display: "flex",
          fontSize: "1l5%",
          flexFlow: "column nowrap",
          alignItems: "center",
          marginTop: "10px",
          borderBottom: "solid 1px #C02942"
        },
        menuCategory: {
          fontWeight: "bold",
          color: "#53777A"
        },
        menuItem: {
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          "textAlign": "center",
          marginTop: "10px",
          paddingBottom: "10px"
        },
        menuItemName: {color: "#ECD078"},
        menuItemDescription: {
          "fontStyle": "italic",
          "textAlign": "center"
        }
      },
      bright: {
        menuContainer: {
          fontFamily: "Fredoka One",
          fontSize: "120%",
          background: "black",
          color: "#F0F2EB",
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          width: 500,
          border: "1px solid #E1EDB9"
        },
        menuHeaderStyle : {
          display: "flex",
          flexFlow: "column nowrap",
          color: "#FF4242",
          fontSize: "130%",
          alignItems: "center",
          fontWeight: "bold",
          marginTop: "15px"
        },
        menuCategoryContainer: {
          display: "flex",
          fontSize: "1l5%",
          flexFlow: "column nowrap",
          alignItems: "center",
          marginTop: "10px",
          borderBottom: "solid 1px #FF4242"
        },
        menuCategory: {
          fontWeight: "bold",
          color: "#E1EDB9"
        },
        menuItem: {
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          "textAlign": "center",
          marginTop: "10px",
          paddingBottom: "10px"
        },
        menuItemName: {color: "#D4EE5E"},
        menuItemDescription: {
          "fontStyle": "italic",
          "textAlign": "center"
        }
      },
      old: {
        menuContainer: {
          fontFamily: "Libre Baskerville",
          background: "#3E4147",
          color: "#C02942",
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          width: 500,
          border: "1px solid #2A2C31"
        },
        menuHeaderStyle : {
          display: "flex",
          flexFlow: "column nowrap",
          color: "#C02942",
          fontSize: "155%",
          alignItems: "center",
          fontWeight: "bold",
          marginTop: "15px"
        },
        menuCategoryContainer: {
          display: "flex",
          fontSize: "1l5%",
          flexFlow: "column nowrap",
          alignItems: "center",
          marginTop: "10px",
          borderBottom: "solid 1px #2A2C31"
        },
        menuCategory: {
          fontWeight: "bold",
          color: "#DFBA69"
        },
        menuItem: {
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          "textAlign": "center",
          marginTop: "10px",
          paddingBottom: "10px"
        },
        menuItemName: {color: "#FFFEDF"},
        menuItemDescription: {
          "fontStyle": "italic",
          "textAlign": "center"
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