import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
const OrderScreen = () => {
  const navigation = useNavigation();
  const [orders, setOrders] = useState([]); // State để lưu đơn hàng
  const [loading, setLoading] = useState(true); // State để quản lý trạng thái loading

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://10.24.41.59:3000/donhang');
        console.log(response.data);
        setOrders(response.data.data);
      } catch (error) {
        console.error('Error fetching orders:', error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchOrders();
  }, []);
  
  

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image source={require('../acssets/BackButton.png')} />
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
      {loading ? (
  <ActivityIndicator size="large" color="#6C63FF" />
) : (
  <ScrollView style={styles.ordersList}>
   {orders.length > 0 ? (
  orders.map((order) => (
    <View key={order._id} style={styles.orderItem}>
      <Image source={require('../acssets/Asus1.png')} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>Tên người nhận: {order.thongTinVanChuyen.tenNguoiNhan}</Text>
        <Text style={styles.productBrand}>Số điện thoại: {order.thongTinVanChuyen.soDienThoai}</Text>
        <Text style={styles.productBrand}>Địa chỉ: {order.thongTinVanChuyen.diaChi}</Text>
        <Text style={styles.productName}>Laptop ID: {order.laptop[0]?.laptopId}</Text>
        <Text style={styles.productBrand}>Số lượng: {order.laptop[0]?.soLuong}</Text>
        <Text style={styles.productPrice}>{order.tongTien.toLocaleString()} VND</Text>
        <Text style={styles.orderStatus}>{order.trangThai}</Text>
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
  ))
) : (
  <Text style={styles.noOrdersText}>Không có đơn hàng nào.</Text>
)}

  </ScrollView>
)}


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
  noOrdersText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    marginTop: 20,
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
