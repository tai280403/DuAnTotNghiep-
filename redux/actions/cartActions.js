// src/redux/actions/cartActions.js
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from '../types';

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item,
});

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: id,
});

export const updateQuantity = (id, quantity) => ({
    type: UPDATE_QUANTITY,
    payload: { id, quantity },
});
