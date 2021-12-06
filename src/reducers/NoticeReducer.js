import { GET_NOTICES, GET_NOTICES_FAIL, GET_NOTICES_SUCCESS } from '../constants'
export const noticeReducer = (state = { isLoading: false, noticeList: [], error: false}, action) => {
    switch(action.type){
        case GET_NOTICES:
            return {...state, isLoading: true}
        case GET_NOTICES_SUCCESS:
            return {...state, isLoading: false, noticeList: action.payload, error: false}
        case GET_NOTICES:
            return {...state, isLoading: false, error: true, msg: action.payload}
        default:
            return state
    }
}