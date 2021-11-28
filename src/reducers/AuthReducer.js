import { RESTORE_TOKEN, LOGIN, LOGOUT, LOADING, LOGIN_FAIL} from '../constants'
export const authReducer = (state = { userToken: null, isLoading: false, isSigned: false}, action) => {
    switch(action.type){
        case LOADING:
            return {...state, isLoading: true }
        case RESTORE_TOKEN:
            return {...state, userToken: action.token, isLoading: false, isSigned: true}
        case LOGIN:
            return {...state, isSigned: true, userToken: action.token}
        case LOGIN_FAIL:
            return {...state, isLoading: false }
        case LOGOUT:
            return {...state, isSigned: false, userToken: null, isLoading: false}
        default:
            return state
    }
}