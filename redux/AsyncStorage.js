import AsyncStorage from '@react-native-async-storage/async-storage';

export const getCartItems = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('cartItems');
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        console.error("Lỗi khi lấy giỏ hàng từ AsyncStorage", e);
        return [];
    }
};

export const saveCartItems = async (items) => {
    try {
        const jsonValue = JSON.stringify(items);
        await AsyncStorage.setItem('cartItems', jsonValue);
    } catch (e) {
        console.error("Lỗi khi lưu giỏ hàng vào AsyncStorage", e);
    }
};
