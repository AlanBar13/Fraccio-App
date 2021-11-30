import { RESTORE_TOKEN, LOGIN, LOGOUT, LOADING, LOGIN_FAIL, RESTORE_TOKEN_FAIL} from '../constants'
import { saveStringtoLSS, getStringValueLSS, deleteKey } from '../services/localStorageService'
import api from '../services/fraccioApiService'

export const bootstrapAsync = () => async (dispatch) => {
    let userToken
    dispatch({type: LOADING })

    try {
        userToken = await getStringValueLSS('userToken')
        console.log('Restore token', userToken)
        if(userToken === null){
            console.log("[Auth] Token is null")
            dispatch({type: RESTORE_TOKEN_FAIL})
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
        const res = await api.post('/api/users/login', {
            email: user,
            password: pass
        })
       const {token} = res.data
       console.log(token)
        await saveStringtoLSS('userToken', token)
        dispatch({type: LOGIN, token: token})
    } catch (error) {
        console.log(error.message)
        dispatch({type: LOGIN_FAIL})
    }
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