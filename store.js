import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {authReducer} from './src/reducers/AuthReducer'

const reducers = combineReducers({
    auth: authReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store