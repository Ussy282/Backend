import { ADD_CART_ITEM } from "./constant";


export const cartReducer = (state = {cartItems: [] }, action) => {
    switch (action.type){
        case ADD_CART_ITEM:
            const itemInCart = action.payload;
            const existingCartItem = state.cartItems.find((x) => x.product === itemInCart);
            if (existingCartItem){
                return {...state, cartItems: state.cartItems.map((x) => x.product === existingCartItem.product 
                    ? itemInCart : x )
                }
            }else {
                return {...state, cartItems: [...state.cartItems, itemInCart] };
            }
            default:
                return state;
            }
};