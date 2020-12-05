import {combineReducers} from 'redux'
import movieReducer from './movieReducer'
import personReducer from './personReducer'
const rootReducer = combineReducers({
  movie:movieReducer,
  person:personReducer
})

export default rootReducer;