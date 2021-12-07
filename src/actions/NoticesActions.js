import { LOADING, GET_NOTICES_SUCCESS, GET_NOTICES_FAIL, ADD_NOTICE_SUCCESS, ADD_NOTICE_FAIL} from '../constants'
import api from '../services/fraccioApiService'

export const getNoticesList = () => async (dispatch) => {
    try {
        dispatch({type: LOADING})
        const response = await api.get('/api/notices')
        if(response.status !== 200){
            dispatch({type: GET_NOTICES_FAIL, payload: "Error: No se pudieron obtener los anuncios"})
            return
        }
        dispatch({type: GET_NOTICES_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch({type: GET_NOTICES_FAIL, payload: "[Notices] Server disconnection"})
    }
}

export const addNotice = (title, description, type, postedAt, _id, socket = false,) => async (dispatch) => {
    try {
        dispatch({type: LOADING})
        if(socket){
            dispatch({type: ADD_NOTICE_SUCCESS, payload: {_id, title, description, type, postedAt}})
            return
        }
        const response = await api.post('/api/notices', {
            title,
            description,
            type
        })
        if(response.status !== 200){
            dispatch({type: ADD_NOTICE_FAIL, payload: "Error: No se pudo crear nuevo anuncio"})
            return
        }
        dispatch({type: ADD_NOTICE_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch({type: ADD_NOTICE_FAIL, payload: "[Notices] Server disconnection"})
    }
}