import { ADD_TO_CART } from "./constant";
import { REMOVE_FROM_CART } from "./constant";
const initilState = [];

export const reducer  = (state=initilState, action ) => {
    switch(action.type){
       case ADD_TO_CART:
        return [
            ...state,
            action.data,
        ]
        break;
        case REMOVE_FROM_CART:
         let result = state.filter(item => {
             return item.name !== action.data
         })
        
        return [...result]
    
      default:
         return state
    }

}