import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../acssets/BackButton.png')}  />
        </TouchableOpacity>
        <Text style={styles.headerText}>Orders</Text>
        <TouchableOpacity>
          <Image source={require('../acssets/Menu2.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={[styles.tabItem, styles.activeTab]}>Tất cả</Text>
        <Text style={styles.tabItem}>Chưa thanh toán</Text>
        <Text style={styles.tabItem}>Chờ vận chuyển</Text>
        <Text style={styles.tabItem}>Đã vận chuyển</Text>
      </View>

      {/* Orders List */}
      <ScrollView style={styles.ordersList}>
        {/* Order Item */}
        <View style={styles.orderItem}>
          <Image source={require('../acssets/Asus1.png')} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>Printed Shirt</Text>
            <Text style={styles.productBrand}>GEETA COLLECTION</Text>
            <Text style={styles.productPrice}>$858.00 USD</Text>
            <Text style={styles.orderStatus}>Đơn hàng đã được giao</Text>
            <View style={styles.productActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Mua lại</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.reviewButton}>
                <Text style={styles.reviewButtonText}>Viết đánh giá</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Duplicate the Order Item for more items */}
        <View style={styles.orderItem}>
          <Image source={require('../acssets/Asus1.png')} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>Printed Shirt</Text>
            <Text style={styles.productBrand}>GEETA COLLECTION</Text>
            <Text style={styles.productPrice}>$858.00 USD</Text>
            <Text style={styles.orderStatus}>Đơn hàng đã được giao</Text>
            <View style={styles.productActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Mua lại</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.reviewButton}>
                <Text style={styles.reviewButtonText}>Viết đánh giá</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity>
          <Image source={require('../acssets/home.png')} style={styles.bottomIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../acssets/BasketIcon.png')} style={styles.bottomIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../acssets/Vector.png')} style={styles.bottomIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../acssets/profile.png')} style={styles.bottomIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#f8f8f8',
  },
  icon: { width: 24, height: 24 },
  headerText: { fontSize: 18, fontWeight: 'bold' },

  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tabItem: {
    fontSize: 14,
    color: '#999',
  },
  activeTab: {
    color: '#6C63FF',
    borderBottomWidth: 2,
    borderBottomColor: '#6C63FF',
    paddingBottom: 5,
  },

  ordersList: {
    padding: 16,
  },
  orderItem: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 20,
    padding: 16,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productBrand: {
    fontSize: 14,
    color: '#888',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
  orderStatus: {
    fontSize: 12,
    color: '#aaa',
  },
  productActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 5,
  },
  actionButtonText: {
    fontSize: 14,
    color: '#333',
  },
  reviewButton: {
    backgroundColor: '#fff',
    borderColor: '#6C63FF',
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
  },
  reviewButtonText: {
    fontSize: 14,
    color: '#6C63FF',
  },

  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#f1f1f1',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  bottomIcon: {
    width: 24,
    height: 24,
  },
});

export default OrderScreen;
