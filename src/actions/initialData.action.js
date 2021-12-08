import axios from "../helpers/axios"
import { categoryConstants } from "./constants";

export const getInitialData = () => {
    return async (dispatch) => {

        // localStorage.setItem('categories', JSON.stringify(categories))

        // const categories1 = JSON.parse(localStorage.getItem('categories'))


        const localCategories = localStorage.getItem('categories')
        if (localCategories) {

            const categories = JSON.parse(localCategories)
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories }
            })
        }
        else {
            const res = await axios.post('/initialData')
            if (res.status === 200) {
                const { categories, products } = res.data;

                localStorage.setItem('categories', JSON.stringify(categories))

                dispatch({
                    type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                    payload: { categories }
                })
            }
        }



        // if (res.status === 200) {
        //     const { categories, products } = res.data;

        //     dispatch({
        //         type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
        //         payload: { categories }
        //     })
        // }
 
 
    }
}