import { RESTORE_TOKEN, LOGIN, LOGOUT, LOADING, LOGIN_FAIL, RESTORE_TOKEN_FAIL} from '../constants'
export const authReducer = (state = { userToken: null, isLoading: false, isSigned: false, error: false}, action) => {
    switch(action.type){
        case LOADING:
            return {...state, isLoading: true }
        case RESTORE_TOKEN:
            return {...state, userToken: action.token, isLoading: false, isSigned: true, error: false}
        case LOGIN:
            return {...state, isSigned: true, userToken: action.token, error: false}
        case LOGIN_FAIL:
            return {...state, isLoading: false, userToken: null, isSigned: false, error: true }
        case RESTORE_TOKEN_FAIL:
            return {...state, isLoading: false, userToken: null, isSigned: false, error: false }
        case LOGOUT:
            return {...state, isSigned: false, userToken: null, isLoading: false, error: false}
        default:
            return state
    }
}