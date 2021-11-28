import { RESTORE_TOKEN, LOGIN, LOGOUT, LOADING} from '../constants'
import { saveStringtoLSS, getStringValueLSS } from '../services/localStorageService'

export const bootstrapAsync = () => async (dispatch) => {
    let userToken
    dispatch({type: LOADING })

    try {
        userToken = await getStringValueLSS('userToken')
        if(userToken === null){
            console.log("[Auth] Token is null")
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

export const signOut = () => (dispatch) => {
    dispatch({type: LOADING })
    dispatch({type: LOGOUT })
}