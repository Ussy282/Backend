import Axios from "axios"
import { ADD_CART_ITEM } from "./constant"

export const addCartItem = (qty, productId) => async(dispatch) => {
    const {data} = await Axios.get(`/api/products/${productId}`);
    dispatch({
        type: ADD_CART_ITEM, payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty,
        }
    })
}