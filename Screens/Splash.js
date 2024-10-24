import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();  // Sử dụng useNavigation để điều hướng

  return (
    <ImageBackground 
      source={require('../acssets/hinhnen1.png')}
      style={styles.container}
      resizeMode="cover"
    >
      {/* Logo Image */}
      <Image 
        source={require('../acssets/hinhanhlogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      
      {/* Slogan */}
      <Text style={styles.slogan}>Buy laptops easily </Text>
      <Text style={styles.slogan}>at LapStore</Text>
      
      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login ➔</Text>
      </TouchableOpacity>
      
      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Register ➔</Text>
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
    width: 400,
    height: 350,
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
    width: 200,
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    paddingHorizontal: 60,
    borderRadius: 25,
    marginBottom: 100,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Splash;
