import { combineReducers } from 'redux'
import recipes from './recipes'
import application from './application'
import styles from './styles'


const rootReducer = combineReducers({
  recipes,
  application,
  styles
})

export default rootReducer