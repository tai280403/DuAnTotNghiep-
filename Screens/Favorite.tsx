import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const FavoriteScreen = () => {
    const favoriteItems = [
        { id: 1, name: 'Printed Shirt', price: 28, image: require('../assets/acer2.png') },
        { id: 2, name: 'Leather Jacket', price: 36, image: require('../assets/Asus1.png') },
        { id: 3, name: 'Washed Jeans', price: 19, image: require('../assets/HP2.png') },
        { id: 4, name: 'Green Hodie', price: 45, image: require('../assets/acer2.png') },
    ];

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { /* Back navigation logic */ }}>
                    <Image source={require('../assets/BackButton.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Favorite</Text>
            </View>

            <ScrollView contentContainerStyle={styles.favoriteContainer}>
                {/* Favorite Items */}
                {favoriteItems.map(item => (
                    <View key={item.id} style={styles.favoriteItem}>
                        <Image source={item.image} style={styles.itemImage} />
                        <View style={styles.itemDetails}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemCollection}>GEETA COLLECTION</Text>
                            <Text style={styles.itemPrice}>${item.price}.00 USD</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.arrow}>➔</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            {/* Add All to Cart Button */}
            <View style={styles.addToCartBar}>
                <TouchableOpacity style={styles.addToCartButton}>
                    <Text style={styles.addToCartText}>ADD ALL TO CART</Text>
                </TouchableOpacity>
            </View>

            {/* Bottom Navigation */}
            <View style={styles.bottomNavigation}>
                <TouchableOpacity>
                    <Image source={require('../assets/home.png')} style={styles.iconNav} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/BasketIcon.png')} style={styles.iconNav} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/heart.png')} style={styles.iconNav} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/profile.png')} style={styles.iconNav} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
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
    favoriteContainer: {
        paddingHorizontal: 16,
    },
    favoriteItem: {
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
    arrow: {
        fontSize: 20,
        color: '#333',
        fontWeight: 'bold',
    },
    addToCartBar: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
    },
    addToCartButton: {
        backgroundColor: '#4A90E2',
        borderRadius: 25,
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    addToCartText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 30,
        backgroundColor: '#f1f1f1',
        borderRadius: 30,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    iconNav: {
        width: 24,
        height: 24,
    },
});

export default FavoriteScreen;
