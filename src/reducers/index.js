import  hobbyReducer from './hobby'
import  useReducer  from './user'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: useReducer
})

export default rootReducer;