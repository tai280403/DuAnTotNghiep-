import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice'; // Đảm bảo import hàm addToCart từ cartSlice

const ProductScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { product } = route.params; // Nhận đối tượng product được truyền từ HomeScreen
  const [message, setMessage] = useState(''); // State để quản lý thông báo

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 })); // Thêm sản phẩm vào giỏ hàng
    setMessage('Sản phẩm đã được thêm vào giỏ hàng!'); // Cập nhật thông báo
    setTimeout(() => {
      setMessage(''); // Xóa thông báo sau 3 giây
    }, 3000);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hình ảnh sản phẩm */}
      <Image source={{ uri: product.hinhAnh }} style={styles.productImage} />

      {/* Tên sản phẩm */}
      <Text style={styles.productName}>{product.ten}</Text>

      {/* Giá sản phẩm */}
      <Text style={styles.productPrice}>{product.gia.toLocaleString()} VND</Text>

      {/* Mô tả sản phẩm (nếu có) */}
      <Text style={styles.productDescription}>
        Mô tả sản phẩm sẽ được hiển thị ở đây nếu có thông tin chi tiết về sản phẩm.
      </Text>

      {/* Nút Thêm vào giỏ hàng */}
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={handleAddToCart} // Gọi hàm thêm sản phẩm vào giỏ hàng
      >
        <Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>

      {/* Hiển thị thông báo */}
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  productImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 20,
    color: '#888',
    marginBottom: 20,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  addToCartButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 16,
    color: 'green',
    fontSize: 16,
  },
});

export default ProductScreen;
