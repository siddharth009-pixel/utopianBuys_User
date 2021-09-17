import { productModalConstants } from "./constants";

export const addProductModalAction = (payload) => {
    return async (dispatch) => {
        const {productDetails}=payload
        dispatch({ 
            type: productModalConstants.ADD_PRODUCT_MODAL_SUCCESS,
            payload:{productDetails}
        })
    }
}

export const removeProductModalAction=()=>{
    return async (dispatch) => {
        dispatch({ 
            type: productModalConstants.REMOVE_PRODUCT_MODAL
        })
    }
}