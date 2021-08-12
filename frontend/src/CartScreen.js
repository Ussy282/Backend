import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import MessageBox from './MessageBox';
import { addCartItem } from './reduxStore/cartActions';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search 
    ? Number(props.location.search.split('=')[1]) : 0;
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart;
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addCartItem(qty, productId))
    }, [dispatch, qty, productId]);

    return (
        <div className="col-2">
            <h>Shopping Cart</h>
        <div className="row">
            {cartItems.length === 0 && (
                <MessageBox>
                    Cart is empty: <Link to="/">Go Shopping</Link>
                </MessageBox>
            )}
            <ul>
                <li>
                    {cartItems.map((item) => (
                        <div key={item._id} className="row">
                            <div>
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div>
                                <Link to={`/product/${productId}`}>{item.name}</Link>
                            </div>
                            <div className="row">
                                <div>
                                    {item.qty}
                                </div>
                                <div>
                                    {item.price}
                                </div>
                            </div>
                        </div>
                    ))}
                </li>
            </ul>
        </div>
        </div>
    )
}
