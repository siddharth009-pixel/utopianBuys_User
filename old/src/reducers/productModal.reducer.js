import { productModalConstants } from "../actions/constants";

const initState = {
    productDetails: {},
    show: false
}



export const productModalReducer = (state = initState, action) => {
    switch (action.type) {
        case productModalConstants.ADD_PRODUCT_MODAL_SUCCESS: {
            return {
                ...state,
                productDetails:action.payload.productDetails,
                show:true
            }
        }
        case productModalConstants.REMOVE_PRODUCT_MODAL:{
            return initState
        }
        default: {
            return state;
        }
    }
}

