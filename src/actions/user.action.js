import axios from "../helpers/axios"
import { authConstants, userConstants } from "./constants"

export const addAddress = (payload) => {
    return async (dispatch) => {
        dispatch({type:userConstants.ADD_USER_ADDRESS_REQUEST})
        const res = await axios.post('/user/address/create', { payload })
        if (res.status === 201) {
            const { address } = res.data.userAddress
            dispatch({
                type: userConstants.ADD_USER_ADDRESS_SUCCESS,
                payload: { address }
            })
        } else {
            dispatch({ 
                type:userConstants.ADD_USER_ADDRESS_FAILED,
                payload:{error:res.data.error}
            })
        }
    }
}

export const deleteAddress = (payload) => {
    return async (dispatch) => {
        dispatch({ type:userConstants.DELETE_USER_ADDRESS_REQUEST})
        const res = await axios.post('/user/address/delete', { payload })
        if (res.status === 201) {
            const { address } = res.data.userAddress
            dispatch({
                type: userConstants.DELETE_USER_ADDRESS_SUCCESS,
                payload: { address }
            })
        }else{
            dispatch({
                type:userConstants.DELETE_USER_ADDRESS_FAILED,
                payload: {error:res.data.error}
            })
        }
    }
}

export const getAddress = () => {
    return async (dispatch) => {
        const res = await axios.get('/user/address/getAddress')
        if (res.status === 200) {
            const { address } = res.data.userAddress
            dispatch({
                type: userConstants.GET_USER_ADDRESS_SUCCESS,
                payload: { address }
            })
        }
    }
}

export const updateProfileInfoAction = (payload) => {
    return async (dispatch) => {
        dispatch({ type: authConstants.PROFILE_UPDATE_REQUEST })
        console.log(payload)
        const res = await axios.post('/updateprofile', payload)
        if (res.status === 201) {

            localStorage.setItem('user', JSON.stringify(res.data.user))
            dispatch({
                type: authConstants.PROFILE_UPDATE_SUCCESS,
                payload: { user: res.data.user }
            })
        }
        if (res.status === 400) {
            dispatch({
                type: authConstants.PROFILE_UPDATE_FAILED,
                payload: { error: res.data.error }
            })
        }
    }
}