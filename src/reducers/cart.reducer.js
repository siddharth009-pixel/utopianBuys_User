import { cartConstants } from "../actions/constants"

const initState={
    cartItems:{},
    loading:false,
    error:{}
}

export const cartReducer=(state=initState,action)=>{
    switch(action.type){
        case cartConstants.ADD_TO_CART:{
            return {
                ...state,
                cartItems:action.payload.cartItems
            }
        }
        case cartConstants.RESET_CART:{
            return {
                ...state,
                cartItems:{}
            }
        }
        case cartConstants.REMOVE_ITEM_FROM_CART_REQUEST:{
            return {
                ...state,
                loading: true
            }
        }
        case cartConstants.REMOVE_ITEM_FROM_CART_SUCCESS:{
            return{
                ...state,
                loading:false,
                cartItems:action.payload.cartItems
            }
        }
        case cartConstants.REMOVE_ITEM_FROM_CART_FAILED:{
            return {
                ...state,
                loading:false,
                error:action.payload.error
            }
        }
        default:{
            return(state)
        }
    }
}