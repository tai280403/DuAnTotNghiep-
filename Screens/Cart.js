// CartScreen.js
import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice'; // Import hành động từ cartSlice

const CartScreen = () => {

    //
    const cartItems = useSelector(state => state.cart.items);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleUpdateQuantity = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity })); // Cập nhật số lượng
    };

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id)); // Xóa sản phẩm khỏi giỏ hàng
    };

    const totalAmount = cartItems.reduce((total, item) => total + item.gia * item.quantity, 0);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../acssets/BackButton.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>My Cart</Text>
            </View>

            <ScrollView contentContainerStyle={styles.cartContainer}>
                {cartItems.length > 0 ? (
                    cartItems.map(item => (
                        <View key={item._id} style={styles.cartItem}>
                            <Image source={{ uri: item.hinhAnh }} style={styles.itemImage} />
                            <View style={styles.itemDetails}>
                                <Text style={styles.itemName}>{item.ten}</Text>
                                <Text style={styles.itemPrice}>{item.gia.toLocaleString()} VND</Text>
                            </View>
                            <View style={styles.itemActions}>
                                <TouchableOpacity onPress={() => handleUpdateQuantity(item._id, item.quantity - 1)} style={styles.quantityButton}>
                                    <Text style={styles.quantityText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantityText}>{item.quantity}</Text>
                                <TouchableOpacity onPress={() => handleUpdateQuantity(item._id, item.quantity + 1)} style={styles.quantityButton}>
                                    <Text style={styles.quantityText}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => handleRemoveItem(item._id)}>
                                <Text style={styles.removeItemText}>✕</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                ) : (
                    <Text style={styles.emptyCartText}>Giỏ hàng của bạn đang trống.</Text>
                )}
            </ScrollView>

            <View style={styles.checkoutBar}>
                <TouchableOpacity style={styles.checkoutButton} onPress={()=>navigation.navigate('Checkout')}>
                    <Text style={styles.checkoutText}>GO TO CHECKOUT</Text>
                    <Text style={styles.totalAmount}>${totalAmount.toLocaleString()}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    totalAmount: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        marginBottom: 60,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    },
    cartContainer: {
        paddingHorizontal: 16,
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F4FA',
        borderRadius: 10,
        marginVertical: 10,
        padding: 16,
    },
    itemImage: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        marginRight: 16,
    },
    itemDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    itemCollection: {
        fontSize: 12,
        color: '#888',
        marginBottom: 8,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    itemActions: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
    },
    quantityButton: {
        padding: 6,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 6,
    },
    quantityText: {
        marginHorizontal: 8,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    removeItemText: {
        fontSize: 20,
        color: '#E57373',
        fontWeight: 'bold',
    },
    emptyCartText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#888',
        marginTop: 20,
    },
    checkoutBar: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
    },
    checkoutButton: {
        backgroundColor: '#4A90E2',
        borderRadius: 25,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    checkoutText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    totalAmount: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
    },
    iconNav: {
        width: 24,
        height: 24,
    },
});

export default CartScreen;
