import { LOADING, GET_NOTICES_FAIL, GET_NOTICES_SUCCESS, ADD_NOTICE_FAIL, ADD_NOTICE_SUCCESS } from '../constants'
export const noticeReducer = (state = { isLoading: false, noticeList: [], error: false}, action) => {
    switch(action.type){
        case LOADING:
            return {...state, isLoading: true}
        case GET_NOTICES_SUCCESS:
            return {...state, isLoading: false, noticeList: action.payload, error: false}
        case GET_NOTICES_FAIL:
            return {...state, isLoading: false, error: true, msg: action.payload}
        case ADD_NOTICE_SUCCESS:
            return {...state, isLoading: false, noticeList: [...state.noticeList, action.payload], error: false}
        case ADD_NOTICE_FAIL:
            return {...state, isLoading: false, error: true, msg: action.payload}
        default:
            return state
    }
}