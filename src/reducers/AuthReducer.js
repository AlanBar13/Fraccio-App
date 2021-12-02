import { RESTORE_TOKEN, LOGIN, LOGOUT, LOADING, LOGIN_FAIL, RESTORE_TOKEN_FAIL} from '../constants'
export const authReducer = (state = { userToken: null, isLoading: false, isSigned: false, error: false, user:{}}, action) => {
    switch(action.type){
        case LOADING:
            return {...state, isLoading: true }
        case RESTORE_TOKEN:
            return {...state, userToken: action.payload.token, isLoading: false, isSigned: true, error: false, user: action.payload.user}
        case LOGIN:
            return {...state, isSigned: true, userToken: action.payload.token, error: false, user: action.payload}
        case LOGIN_FAIL:
            return {...state, isLoading: false, userToken: null, isSigned: false, error: true }
        case RESTORE_TOKEN_FAIL:
            return {...state, isLoading: false, userToken: null, isSigned: false, error: false }
        case LOGOUT:
            return {...state, isSigned: false, userToken: null, isLoading: false, error: false, user: {}}
        default:
            return state
    }
}