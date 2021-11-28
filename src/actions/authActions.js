import { RESTORE_TOKEN, LOGIN, LOGOUT, LOADING, LOGIN_FAIL} from '../constants'
import { saveStringtoLSS, getStringValueLSS, deleteKey } from '../services/localStorageService'

export const bootstrapAsync = () => async (dispatch) => {
    let userToken
    dispatch({type: LOADING })

    try {
        userToken = await getStringValueLSS('userToken')
        console.log('Restore token', userToken)
        if(userToken === null){
            console.log("[Auth] Token is null")
            dispatch({type: LOGIN_FAIL})
            return
        }
        dispatch({type: RESTORE_TOKEN, token: userToken})
    } catch (error) {
        console.log(error)
    }
}

export const signIn = (user, pass) => async (dispatch) => {
    dispatch({type: LOADING })

    try {
        //make call to sign in
        console.log(user, pass)
        await saveStringtoLSS('userToken', 'dummy-auth-token')
    } catch (error) {
        console.log(error)
    }

    dispatch({type: LOGIN, token: 'dummy-auth-token'})
}

export const signOut = () => async (dispatch) => {
    dispatch({type: LOADING })
    try {
        await deleteKey('userToken')
        dispatch({type: LOGOUT })
    } catch (error) {
        console.log(error)
    }
}