import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native"; // Sử dụng các thành phần từ React Native
import { FontAwesome } from '@expo/vector-icons'; // Sử dụng icon từ react-native-vector-icons

const ProductList = () => {
  const products = [
    { name: "HP", price: 750.0, imageUrl: "path-to-hp-image", currency: "USD" },
    { name: "Asus", price: 668.0, imageUrl: "path-to-asus-image", currency: "USD" },
    { name: "Acer", price: 599.0, imageUrl: "path-to-acer-image", currency: "USD" },
  ];

  return (
    <View style={styles.productListContainer}>
      {/* Header Section */}
      <View style={styles.productListHeader}>
        <View style={styles.userProfile}>
          <FontAwesome name="user" size={28} />
        </View>
        <View style={styles.icons}>
          <FontAwesome name="bell" size={20} style={styles.icon} />
          <FontAwesome name="search" size={20} style={styles.icon} />
        </View>
      </View>

      {/* Category Tabs */}
      <View style={styles.categoryTabs}>
        <Text style={styles.activeTab}>Popular</Text>
        <Text style={styles.tab}>Trending</Text>
        <Text style={styles.tab}>News</Text>
        <Text style={styles.tab}>Sale</Text>
      </View>

      {/* Filter and Sort Section */}
      <View style={styles.filterSort}>
        <Text>FILTER & SORT</Text>
        <FontAwesome name="search" size={16} />
      </View>

      {/* Product Grid */}
      <View style={styles.productGrid}>
        {products.map((product, index) => (
          <View key={index} style={styles.productCard}>
            <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text>{product.name}</Text>
              <Text>{`${product.price.toFixed(2)} ${product.currency}`}</Text>
            </View>
            <TouchableOpacity style={styles.favoriteIcon}>
              <FontAwesome name="heart" size={20} />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <FontAwesome name="search" size={24} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="shopping-cart" size={24} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="user" size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles using JavaScript Object Notation (JSX inline styles)
const styles = {
  productListContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  productListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  userProfile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
    gap: 15,
  },
  icon: {
    cursor: 'pointer',
    color: '#555',
  },
  categoryTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    fontSize: 14,
  },
  tab: {
    paddingVertical: 10,
    cursor: 'pointer',
  },
  activeTab: {
    color: '#303f9f',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#303f9f',
    paddingVertical: 10,
  },
  filterSort: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom :90,
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '48%',
    marginBottom: 20,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productInfo: {
    marginBottom: 10,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: '#ff6f61',
    cursor: 'pointer',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
};

export default ProductList;

