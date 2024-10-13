import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const PaymentScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../acssets/BackButton.png')}  />
        </TouchableOpacity>
        <Text style={styles.headerText}>Pay</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Products List */}
      <ScrollView style={styles.productList}>
        {/* Product 1 */}
        <View style={styles.productItem}>
          <Image source={require('../acssets/Asus1.png')} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>Printed Shirt</Text>
            <Text style={styles.productBrand}>GEETA COLLECTION</Text>
            <Text style={styles.productPrice}>$738.00 USD</Text>
          </View>
          <TouchableOpacity style={styles.productAction}>
            <Text style={styles.arrowText}>→</Text>
          </TouchableOpacity>
        </View>

        {/* Product 2 */}
        <View style={styles.productItem}>
          <Image source={require('../acssets/Asus1.png')} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>Leather Jacket</Text>
            <Text style={styles.productBrand}>GEETA COLLECTION</Text>
            <Text style={styles.productPrice}>$949.00 USD</Text>
          </View>
          <TouchableOpacity style={styles.productAction}>
            <Text style={styles.arrowText}>→</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Add All to Cart Button */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.addToCartButton}  onPress={() => navigation.navigate('Checkout')}>
          <Text style={styles.addToCartText}>ADD ALL TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#f8f8f8',
  },
  icon: {
    width: 24,
    height: 24,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSpacer: {
    width: 24, // Space filler to balance the header layout
  },
  
  productList: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  productItem: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 16,
    padding: 16,
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6C63FF',
  },
  productBrand: {
    fontSize: 14,
    color: '#888',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  productAction: {
    paddingHorizontal: 10,
  },
  arrowText: {
    fontSize: 24,
    color: '#ccc',
  },

  bottomButtonContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  addToCartButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: 'center',
  },
  addToCartText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
