import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './cartReducer';
import { productDetailsReducer, productReducer } from './productReducers';

const initialState = {};

const reducer = combineReducers ({
    productList: productReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, initialState, composeEnhancer (applyMiddleware(thunk)));

export default store;