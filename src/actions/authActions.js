import { RESTORE_TOKEN, LOGIN, LOGOUT, LOADING, LOGIN_FAIL, RESTORE_TOKEN_FAIL} from '../constants'
import { saveStringtoLSS, getStringValueLSS, deleteKey, savetoLSS, getDataLSS } from '../services/localStorageService'
import api from '../services/fraccioApiService'
const tokenKey = 'userToken'
const userKey = 'userInfo'

export const bootstrapAsync = () => async (dispatch) => {
    let userToken, userInfo
    dispatch({type: LOADING })

    try {
        userToken = await getStringValueLSS(tokenKey)
        if(userToken === null){
            console.log("[Auth] Token is null")
            dispatch({type: RESTORE_TOKEN_FAIL})
            return
        }
        userInfo = await getDataLSS(userKey)
        if(userInfo === null){
            console.log("[Auth] UserInfo is null")
            dispatch({type: RESTORE_TOKEN_FAIL})
            return
        }
        dispatch({type: RESTORE_TOKEN, payload: {token: userToken, user: userInfo}})
    } catch (error) {
        console.log(error)
    }
}

export const signIn = (username, pass) => async (dispatch) => {
    dispatch({type: LOADING })

    try {
        //make call to sign in
        const res = await api.post('/api/users/login', {
            email: username,
            password: pass
        })
        const {token, _id, name, email, isAdmin, house} = res.data
        await saveStringtoLSS(tokenKey, token)
        const user = {_id, name, email, isAdmin, house}
        await savetoLSS(userKey, user)
        dispatch({type: LOGIN, payload: res.data})
    } catch (error) {
        console.log(error.message)
        dispatch({type: LOGIN_FAIL})
    }
}

export const signOut = () => async (dispatch) => {
    dispatch({type: LOADING })
    try {
        await deleteKey(tokenKey)
        dispatch({type: LOGOUT })
    } catch (error) {
        console.log(error)
    }
}