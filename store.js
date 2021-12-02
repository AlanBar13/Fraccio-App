import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {authReducer} from './src/reducers/AuthReducer'
import {noticeReducer} from './src/reducers/NoticeReducer'

const reducers = combineReducers({
    auth: authReducer,
    notices: noticeReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store