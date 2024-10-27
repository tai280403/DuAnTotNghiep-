import { createSlice } from '@reduxjs/toolkit';
import { saveCartItems, loadCartItems } from '../utils/storage'; // Đảm bảo import đúng đường dẫn

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item._id.$oid === action.payload._id.$oid);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity; 
            } else {
                state.items.push({ ...action.payload, quantity: action.payload.quantity });
            }
            saveCartItems(state.items);
        },
        removeFromCart: (state, action) => {
            const updatedItems = state.items.filter(item => item._id.$oid !== action.payload);
            state.items = updatedItems;
            saveCartItems(updatedItems);
        },
        loadCart: (state, action) => {
            state.items = action.payload;
        },
        increaseQuantity: (state, action) => {
            const existingItem = state.items.find(item => item._id.$oid === action.payload);
            if (existingItem) {
                existingItem.quantity += 1;
                saveCartItems(state.items);
            }
        },
        decreaseQuantity: (state, action) => {
            const existingItem = state.items.find(item => item._id.$oid === action.payload);
            if (existingItem) {
                existingItem.quantity -= 1;
                if (existingItem.quantity <= 0) {
                    state.items = state.items.filter(item => item._id.$oid !== action.payload);
                }
                saveCartItems(state.items);
            }
        },
    },
});

export const { addToCart, removeFromCart, loadCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;  
