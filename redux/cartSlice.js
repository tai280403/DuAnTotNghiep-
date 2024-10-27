import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCartItems, saveCartItems } from '../utils/storage';

const initialState = {
    items: [],
};

export const loadCart = createAsyncThunk('cart/loadCart', async () => {
    return await getCartItems(); // Lấy giỏ hàng từ AsyncStorage
});

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item._id === action.payload._id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push({ ...action.payload, quantity: action.payload.quantity });
            }
            saveCartItems(state.items); // Lưu giỏ hàng vào AsyncStorage sau khi cập nhật
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item._id !== action.payload);
            saveCartItems(state.items);
        },
        updateQuantity: (state, action) => {
            const item = state.items.find(item => item._id === action.payload.id);
            if (item && action.payload.quantity > 0) {
                item.quantity = action.payload.quantity;
                saveCartItems(state.items);
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadCart.fulfilled, (state, action) => {
            state.items = action.payload; // Cập nhật giỏ hàng từ AsyncStorage khi ứng dụng khởi động
        });
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
