import { combineReducers } from 'redux'
import cryptoReducer from './cryptoReducer'

const rootReducer = combineReducers({
    cryptoReducer: cryptoReducer
})

export default rootReducer
