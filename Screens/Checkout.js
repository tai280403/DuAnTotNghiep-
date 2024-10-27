import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);
  const [deliveryMethod, setDeliveryMethod] = useState('Select Method');
  const [paymentMethod, setPaymentMethod] = useState('None');
  const [promoCode, setPromoCode] = useState('');
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://192.168.55.176:3000/giohang');
        console.log(response.data); // Kiểm tra dữ liệu trả về từ API

        // Kiểm tra dữ liệu và lấy danh sách sản phẩm
        if (response.data && Array.isArray(response.data.data) && response.data.data.length > 0) {
          const items = response.data.data[0].items[0].laptop;
          
          if (Array.isArray(items) && items.length > 0) {
            console.log(items); // Kiểm tra nội dung giỏ hàng
            setCartItems(items);
            calculateTotalCost(items);
          } else {
            Alert.alert("Thông báo", "Giỏ hàng trống hoặc không có dữ liệu.");
          }
        } else {
          Alert.alert("Thông báo", "Giỏ hàng trống hoặc không có dữ liệu.");
        }
      } catch (error) {
        console.error(error);
        Alert.alert("Lỗi", "Không thể tải dữ liệu giỏ hàng.");
      }
    };

    fetchCartItems();
  }, []);

  const calculateTotalCost = (items) => {
    if (!Array.isArray(items)) return; // Kiểm tra nếu items không phải là mảng

    let cost = items.reduce((sum, item) => {
      if (item.gia && item.soLuong) {
        return sum + (item.gia * item.soLuong);
      }
      return sum; // Trả về tổng hiện tại nếu không có giá hoặc số lượng
    }, 0);
    setTotalCost(cost);
  };

  const handleSelectDelivery = () => {
    Alert.alert(
      'Select Delivery Method',
      '',
      [
        { text: 'Standard Shipping', onPress: () => setDeliveryMethod('Standard Shipping') },
        { text: 'Express Shipping', onPress: () => setDeliveryMethod('Express Shipping') },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  const handleSelectPayment = () => {
    Alert.alert(
      'Select Payment Method',
      '',
      [
        { text: 'Credit Card', onPress: () => setPaymentMethod('Credit Card') },
        { text: 'PayPal', onPress: () => setPaymentMethod('PayPal') },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  const handleApplyPromoCode = () => {
    if (promoCode === 'DISCOUNT10') {
      const discountedTotal = totalCost * 0.9;
      setTotalCost(discountedTotal);
      Alert.alert('Promo Applied', 'You received a 10% discount!');
    } else {
      Alert.alert('Invalid Promo Code', 'Please try again.');
    }
  };

  const confirmOrder = () => {
    Alert.alert(
      'Confirm Order',
      `Total cost: $${totalCost.toFixed(2)}\n` +
      `Delivery Method: ${deliveryMethod}\n` +
      `Payment Method: ${paymentMethod}\n` +
      (promoCode ? `Promo Code: ${promoCode}\n` : '') +
      'Proceed with placing the order?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Confirm', onPress: () => navigation.navigate('OrderSuccesScreen') },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../acssets/BackButton.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Checkout</Text>
      </View>

      <ScrollView contentContainerStyle={styles.productList}>
        {cartItems.length === 0 ? (
          <Text style={styles.emptyCartText}>Giỏ hàng trống.</Text>
        ) : (
          cartItems.map((item, index) => (
            <View key={index} style={styles.productItem}>
              <Image source={require('../acssets/Asus1.png')} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={styles.productName}>Laptop ID: {item.laptopId}</Text>
                <Text style={styles.productPrice}>${item.gia.toFixed(2)} x {item.soLuong} pcs</Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>

      <View style={styles.checkoutSection}>
        <TouchableOpacity style={styles.row} onPress={handleSelectDelivery}>
          <Text style={styles.rowLabel}>Delivery</Text>
          <View style={styles.rowAction}>
            <Text style={styles.actionText}>{deliveryMethod}</Text>
            <Image source={require('../acssets/backarrow.png')} style={styles.arrowIcon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} onPress={handleSelectPayment}>
          <Text style={styles.rowLabel}>Payment</Text>
          <View style={styles.rowAction}>
            <Text style={styles.actionText}>{paymentMethod}</Text>
            <Image source={require('../acssets/backarrow.png')} style={styles.arrowIcon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} onPress={handleApplyPromoCode}>
          <Text style={styles.rowLabel}>Promo Code</Text>
          <View style={styles.rowAction}>
            <Text style={styles.actionText}>Enter Code: {promoCode || 'None'}</Text>
            <Image source={require('../acssets/backarrow.png')} style={styles.arrowIcon} />
          </View>
        </TouchableOpacity>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Total Cost</Text>
          <View style={styles.rowAction}>
            <Text style={styles.totalText}>${totalCost.toFixed(2)}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.placeOrderButton} onPress={confirmOrder}>
          <Image source={require('../acssets/Caricon.png')} style={styles.truckIcon} />
          <Text style={styles.placeOrderText}>PLACE ORDER</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By placing an order you agree to our Terms and Conditions.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 16,
  },
  emptyCartText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#6C63FF',
  },
  productList: {
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F4FB',
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6C63FF',
  },
  productPrice: {
    fontSize: 14,
    color: '#333',
  },
  checkoutSection: {
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: '#F4F4FB',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  rowLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  rowAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 14,
    color: '#6C63FF',
    marginRight: 5,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6C63FF',
  },
  termsText: {
    fontSize: 10,
    color: '#888',
    textAlign: 'center',
    marginVertical: 10,
  },
  placeOrderButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6C63FF',
    paddingVertical: 16,
    borderRadius: 50,
    marginTop: 10,
  },
  placeOrderText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  truckIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFF',
  },
});

export default CheckoutScreen;
