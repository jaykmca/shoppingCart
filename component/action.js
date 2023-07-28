import { ADD_TO_CART } from "./constant";
import { REMOVE_FROM_CART } from "./constant";
export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        data: item
    }
}


export const removeFromCart = (item) => {
    return {
        type: REMOVE_FROM_CART,
        data: item
    }
}