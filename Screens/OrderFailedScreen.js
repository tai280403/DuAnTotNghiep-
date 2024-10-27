
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const OrderFailedScreen = () => {
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backArrow}>
        <Text style={styles.arrowText}>←</Text>
      </TouchableOpacity>

      {/* Failure Icon */}
      <View style={styles.iconContainer}>
        <Image
          source={require('../acssets/failed.png')} // Check this path
          style={styles.failureIcon}
        />
      </View>

      {/* Main Text */}
      <Text style={styles.mainText}>Oh Snap! Order Failed</Text>

      {/* Subtext */}
      <Text style={styles.subText}>
        Looks like something went wrong while processing your request.
      </Text>

      {/* Retry Button */}
      <TouchableOpacity style={styles.retryButton}>
        <Text style={styles.buttonText}>PLEASE TRY AGAIN</Text>
      </TouchableOpacity>

      {/* Back to Home */}
      <Text style={styles.backToHomeText}>← Back to home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background
    padding: 20,
  },
  backArrow: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  arrowText: {
    fontSize: 24,
    color: '#000',
  },
  iconContainer: {
    marginBottom: 20,
  },
  failureIcon: {
    width: 250, // Adjust size based on your design
    height: 250,
    // tintColor: '#FF6B6B', // Comment this out temporarily
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#7e7e7e',
    textAlign: 'center',
    marginBottom: 30,
  },
  retryButton: {
    backgroundColor: '#4A3FBC', // Purple button background
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  backToHomeText: {
    color: '#7e7e7e',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default OrderFailedScreen;
