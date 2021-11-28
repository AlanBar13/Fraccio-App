import { RESTORE_TOKEN, LOGIN, LOGOUT, LOADING} from '../constants'
export const authReducer = (state = { userToken: null, isLoading: false, isSigned: false}, action) => {
    switch(action.type){
        case LOADING:
            return {...state, isLoading: true }
        case RESTORE_TOKEN:
            return {...state, userToken: action.token, isLoading: false}
        case LOGIN:
            return {...state, isSigned: true, userToken: action.token}
        case LOGOUT:
            return {...state, isSigned: false, userToken: null, isLoading: false}
        default:
            return state
    }
}