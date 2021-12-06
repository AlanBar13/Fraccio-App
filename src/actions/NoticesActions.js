import { GET_NOTICES, GET_NOTICES_SUCCESS, GET_NOTICES_FAIL} from '../constants'
import api from '../services/fraccioApiService'

export const getNoticesList = () => async (dispatch) => {
    try {
        dispatch({type: GET_NOTICES})
        const response = await api.get('/api/notices')
        if(response.status !== 200){
            dispatch({type: GET_NOTICES_FAIL, payload: "Error: No se pudieron obtener los anuncios"})
            return
        }
        dispatch({type: GET_NOTICES_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch({type: GET_NOTICES_FAIL, payload: "Server disconnection"})
    }
}