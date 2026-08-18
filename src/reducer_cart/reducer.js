import TYPES from "./actions"
import { initialState } from "./initialState"

export const reducer = (state, action) => {
    switch(action.type){
        case TYPES.ADD_TO_CART: {}
        case TYPES.REMOVE_ONE_ITEM: {}
        case TYPES.REMOVE_ALL_ITEMS: {}
        case TYPES.CLEAR_CART: {}
        default:
            state
    }
}