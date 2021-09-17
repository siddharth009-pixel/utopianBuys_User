import { authConstants, cartConstants } from "./constants"
import axios from '../helpers/axios'
import { resetCart } from "./cart.action"

export const login=(user)=>{
 
    return async(dispatch)=>{
        dispatch({type:authConstants.LOGIN_REQUEST})
        const res=await axios.post('/signin',{
        ...user
        })
        
        if(res.status===200){
            const {token,user}=res.data
            localStorage.setItem('token',token)
            localStorage.setItem('user',JSON.stringify(user))
            dispatch({type:authConstants.LOGIN_SUCCESS,
                payload:{
                    token,user                    
                }
            })
        }else{
            if(res.status===400){
                dispatch({
                    type:authConstants.LOGIN_FAILURE,
                    payload:{
                    error:res.data.error
                }
            })}
        }

    }
}

export const signup=(user)=>{

    return async(dispatch)=>{
        dispatch({type:authConstants.SIGNUP_REQUEST})
        console.log(user)
        const res=await axios.post('/signup',{
        ...user
        })
        console.log(res)
        if(res.status===201){
            dispatch({type:authConstants.SIGNUP_SUCCESS,
                payload:{
                    user                    
                }
            })
        }else{
            if(res.status===400){
                dispatch({
                    type:authConstants.SIGNUP_FAILED,
                    payload:{
                    error:res.data.error
                }
            })}
        }

    }
}


export const isUserLoggedIn=()=>{
    return async(dispatch)=>{
        const token=localStorage.getItem('token')
        if(token){
            dispatch({type:authConstants.LOGIN_REQUEST})
            const user=JSON.parse(localStorage.getItem('user'))
            dispatch({
                type:authConstants.LOGIN_SUCCESS,
                payload:{
                    token,user
                }
            })
        }else{
            dispatch({
                type:authConstants.LOGIN_FAILED,
                payload:{
                error:'failed to SignIn'
                }
            })
        }
    }
}

export const signOut=()=>{
    return async (dispatch)=>{
        dispatch({type:authConstants.LOGOUT_REQUEST})
        const res=await axios.post('/signout')
        if(res.status===200){
            localStorage.removeItem('token')
            dispatch({
                type:authConstants.LOGOUT_SUCCESS,
                payload:res.data.message
            })
            dispatch(resetCart())
        }else{
            dispatch({
                type:authConstants.LOGOUT_FAILED,
                payload:res.data.error
            })
        }
    }
}