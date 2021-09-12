// import {userReducer} from './user.reducer'
import { combineReducers } from 'redux'
import { authReducer } from './auth.reducer'
import { cartReducer } from './cart.reducer'
import { categoryReducer } from './category.reducer'
import { productReducer } from './product.reducer'
import { userReducer } from './user.reducer'
import { productModalReducer } from './productModal.reducer'

const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    user: userReducer,
    productModal: productModalReducer
})

export default rootReducer