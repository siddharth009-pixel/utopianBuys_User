import { authConstants } from '../actions/constants'

const initState = {
    token: null,
    user: {
        firstname: '',
        lastname: '',
        email: '',
        picture: '',
        contactNumber: '',
        role: '',
        gender:''
    },
    creatingUser: false,
    createdUser: false,
    authenticate: false,
    authenticating: false,
    loading: false,
    profileLoading: false,
    error: ''
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return {
                ...state,
                authenticating: true
            }
        case authConstants.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticating: false,
                authenticate: true
            }
        case authConstants.LOGIN_FAILURE: {
            return {
                ...state,
                error: action.payload.error,
                authenticating: false,
                authenticate: false
            }
        }
        case authConstants.LOGOUT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case authConstants.LOGOUT_SUCCESS:
            return {
                ...initState
            }
        case authConstants.LOGOUT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case authConstants.SIGNUP_REQUEST: {
            return {
                ...state,
                creatingUser: true
            }
        }
        case authConstants.SIGNUP_SUCCESS: {
            return {
                ...state,
                creatingUser: false,
                createdUser: true
            }
        }
        case authConstants.SIGNUP_FAILED: {
            return {
                ...state,
                creatingUser: false,
                createdUser: false,
                error: action.payload.error
            }
        }
        case authConstants.PROFILE_UPDATE_REQUEST: {
            return {
                ...state,
                profileLoading: true
            }
        }
        case authConstants.PROFILE_UPDATE_SUCCESS: {
            const newUser=action.payload.user
            return {
                ...state,
                profileLoading: false,
                user:{
                    firstname:newUser.firstname,
                    lastname:newUser.lastname,
                    gender: newUser.gender,
                    contactNumber:newUser.contactNumber,
                    email:newUser.email,
                }
            }
        }
        case authConstants.PROFILE_UPDATE_FAILED: {
            return {
                ...state,
                profileLoading:false,
                error:action.payload.error
            }
        }
        default: return state
    }
}

