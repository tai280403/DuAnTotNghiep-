import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const Splash = () => {
  return (
    <ImageBackground 
      source={require('../acssets/hinhnen1.png')} // Đảm bảo rằng bạn đã lưu ảnh nền trong thư mục đúng
      style={styles.container}
      resizeMode="cover" // Chọn cách hiển thị ảnh nền
    >
    
      
      {/* Logo Image */}
      <Image 
        source={require('../acssets/hinhanhlogo.png')} // Đảm bảo rằng bạn đã xuất logo từ Figma và đặt tại đường dẫn này
        style={styles.logo}
        resizeMode="contain" // Giữ tỷ lệ khung hình cho logo
      />
      
      {/* Slogan */}
      <Text style={styles.slogan}>Buy laptops easily </Text>
      <Text style={styles.slogan}>at LapStore</Text>
      
      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Login     ➔</Text>
      </TouchableOpacity>
      
      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.buttonText}>Register</Text>
        <Text style={styles.buttonText}> ➔</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,  // Thay đổi kích thước logo
    height: 350, // Cân đối với chiều cao

  },
  slogan: {
    fontSize: 26,
    textAlign: 'center',
    color: '#000',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 25,
    borderWidth: 1,
    width :200,
    marginBottom: 20,
    
    alignContent :'space-between',
  },
  registerButton: {
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 10,
    flexDirection: 'row', // Đặt các nút trên cùng một hàng
    justifyContent: 'space-around', // Căn giữa các nút
    width: '50%', // Chiều rộng tổng thể cho button container
    paddingHorizontal: 60,
    borderRadius: 25,
    marginBottom : 100,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    
  },
});

export default Splash;
