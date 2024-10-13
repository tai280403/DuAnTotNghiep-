import React from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const FindScreen = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { /* navigation logic */ }} activeOpacity={0.7}>
                    <Image source={require('../acssets/BackButton.png')}  />


                </TouchableOpacity>
                <Text style={styles.headerText}>Find Products</Text>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Image source={require('../acssets/SearchIcon.png')} style={styles.findicon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Asus..."
                />
            </View>

            {/* Results Info */}
            <Text style={styles.resultInfo}>139 Items found for "Hoodies"</Text>

            {/* Products List */}
            <ScrollView contentContainerStyle={styles.productList}>
                <View style={styles.row}>
                    {/* Product 1 */}
                    <TouchableOpacity style={styles.productItem} activeOpacity={0.7}>
                        <Image
                            source={require('../acssets/acer2.png')} // Ảnh sản phẩm 1
                            style={styles.productImage}
                        />
                        <Text style={styles.productName}>Pink Hoodie</Text>
                        <Text style={styles.productPrice}>$668.00 USD</Text>
                        <Image source={require('../acssets/Vector.png')} style={styles.iconHeart} />
                    </TouchableOpacity>

                    {/* Product 2 */}
                    <TouchableOpacity style={styles.productItem} activeOpacity={0.7}>
                        <Image
                            source={require('../acssets/Asus1.png')} // Ảnh sản phẩm 2
                            style={styles.productImage}
                        />
                        <Text style={styles.productName}>Light Purple Hoodie</Text>
                        <Text style={styles.productPrice}>$584.00 USD</Text>
                        <Image source={require('../acssets/Vector.png')} style={styles.iconHeart} />
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    {/* Product 3 */}
                    <TouchableOpacity style={styles.productItem} activeOpacity={0.7}>
                        <Image
                            source={require('../acssets/Asus1.png')} // Ảnh sản phẩm 3
                            style={styles.productImage}
                        />
                        <Text style={styles.productName}>Dark Green Hoodie</Text>
                        <Text style={styles.productPrice}>$980.00 USD</Text>
                        <Image source={require('../acssets/Vector.png')} style={styles.iconHeart} />
                    </TouchableOpacity>

                    {/* Product 4 */}
                    <TouchableOpacity style={styles.productItem} activeOpacity={0.7}>
                        <Image
                            source={require('../acssets/acer2.png')} // Ảnh sản phẩm 4
                            style={styles.productImage}
                        />
                        <Text style={styles.productName}>Turquoise Hoodie</Text>
                        <Text style={styles.productPrice}>$668.00 USD</Text>
                        <Image source={require('../acssets/Vector.png')} style={styles.iconHeart} />
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Bottom Navigation */}
            <View style={styles.bottomNavigation}>
                <TouchableOpacity onPress={() => { /* navigation logic */ }} activeOpacity={0.7}>
                    <Image source={require('../acssets/home.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { /* navigation logic */ }} activeOpacity={0.7}>
                    <Image source={require('../acssets/BasketIcon.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { /* navigation logic */ }} activeOpacity={0.7}>
                    <Image source={require('../acssets/Vector.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { /* navigation logic */ }} activeOpacity={0.7}>
                    <Image source={require('../acssets/profile.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    resultInfo: {
        marginBottom: 20,
        fontSize: 16,
        color: '#888',
    },
    productList: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    productItem: {
        width: '48%',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },
    productImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    productPrice: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
    },
    iconHeart: {
        width: 24,
        height: 24,
        position: 'absolute',
        top: 10,
        right: 10,
    },
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 30,
        backgroundColor: '#f1f1f1',
        borderRadius: 30,
    },
    icon: {
        width: 24,
        height: 24,
    },
    findicon: {
        width: 14,
        height: 14,
    },
    Backicon: {
        width: 20,
        height: 20,
    },
});

export default FindScreen;
