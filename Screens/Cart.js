import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';

const CartScreen = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const totalAmount = cartItems.reduce((total, item) => total + item.gia * item.quantity, 0);

    return (
        <View style={styles.container}>
            {cartItems.length === 0 ? (
                <Text style={styles.emptyCartText}>Giỏ hàng của bạn đang trống!</Text>
            ) : (
                <ScrollView contentContainerStyle={styles.cartContainer}>
                    {cartItems.map((item) => (
                        <View key={item._id} style={styles.cartItem}>
                            <Image source={{ uri: item.hinhAnh }} style={styles.itemImage} />
                            <View style={styles.itemDetails}>
                                <Text style={styles.itemName}>{item.TenSP}</Text>
                                <Text style={styles.itemPrice}>{(item.gia * item.quantity).toLocaleString()} VND</Text>
                            </View>
                            <View style={styles.itemActions}>
                                <TouchableOpacity onPress={() => dispatch(decreaseQuantity(item._id))} style={styles.quantityButton}>
                                    <Text style={styles.quantityText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantityText}>{item.quantity}</Text>
                                <TouchableOpacity onPress={() => dispatch(increaseQuantity(item._id))} style={styles.quantityButton}>
                                    <Text style={styles.quantityText}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => dispatch(removeFromCart(item._id))}>
                                <Text style={styles.removeItemText}>✕</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            )}
            <View style={styles.checkoutBar}>
                <Text style={styles.checkoutText}>Tổng tiền: {totalAmount.toLocaleString()} VND</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9F9F9' },
    emptyCartText: { textAlign: 'center', fontSize: 18, marginTop: 20 },
    cartContainer: { paddingHorizontal: 16 },
    cartItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F2F4FA', marginVertical: 10, padding: 16 },
    itemImage: { width: 60, height: 60, resizeMode: 'contain', marginRight: 16 },
    itemDetails: { flex: 1 },
    itemName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
    itemPrice: { fontSize: 16, color: '#333' },
    itemActions: { flexDirection: 'row', alignItems: 'center', marginRight: 16 },
    quantityButton: { padding: 6, backgroundColor: '#FFF', borderWidth: 1, borderColor: '#E0E0E0', marginHorizontal: 4 },
    quantityText: { fontSize: 16 },
    removeItemText: { fontSize: 24, color: '#888' },
    checkoutBar: { padding: 16, backgroundColor: '#FFF', borderTopWidth: 1, borderColor: '#E0E0E0' },
    checkoutText: { fontSize: 18, fontWeight: 'bold' },
});

export default CartScreen;
