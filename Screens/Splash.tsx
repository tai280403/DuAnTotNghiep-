import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Splash = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./Ảnh chụp màn hình 2024-10-10 140956.png')} // Đặt đường dẫn tới hình nền của bạn
        style={styles.background}
      >
        <View style={styles.logoContainer}>
          {/* Thay thế văn bản bằng hình ảnh logo */}
          <Image
            source={require('./Ảnh chụp màn hình 2024-10-10 142544.png')} // Đặt đường dẫn tới logo của bạn
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.subtitle}>Buy laptops easily at LapStore</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
          <Icon name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
          <Icon name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150, // Kích thước hình ảnh logo
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Splash ;
