export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
});

export const increaseQuantity = (id) => ({
    type: 'INCREASE_QUANTITY',
    payload: id,
});

export const decreaseQuantity = (id) => ({
    type: 'DECREASE_QUANTITY',
    payload: id,
});

export const removeFromCart = (id) => ({
    type: 'REMOVE_FROM_CART',
    payload: id,
});
