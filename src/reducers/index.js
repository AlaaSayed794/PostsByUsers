import { combineReducers } from 'redux'
import postsReducer from './postsReducer.js'
import loginReducer from './loginReducer.js'
import usersReducer from './usersReducer.js'

export default combineReducers({
    postsReducer, loginReducer, usersReducer
})