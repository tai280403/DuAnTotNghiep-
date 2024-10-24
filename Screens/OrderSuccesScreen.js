import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const OrderSuccesScreen = () => {
  return (
    <View style={styles.container}>
      {/* Success Icon (using a local asset) */}
      <View style={styles.iconContainer}>
        <Image
          source={require('./assets/images/sucses.png')} // Local success icon
          style={styles.successIcon}
        />
      </View>

      {/* Main Text */}
      <Text style={styles.mainText}>Congrats! Your Order has been placed</Text>

      {/* Subtext */}
      <Text style={styles.subText}>
        Your items have been placed and are on their way to being processed.
      </Text>

      {/* Buttons */}
      <TouchableOpacity style={styles.trackButton}>
        <Text style={styles.buttonText}>TRACK ORDER</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.shopButton}>
        <Text style={styles.buttonText}>CONTINUE SHOPPING</Text>
      </TouchableOpacity>

      {/* Back to Home Text at the Bottom */}
      <Text style={styles.backToHomeText}>← Back to home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center',
    backgroundColor: '#ffffff', // Changed background color to white
    padding: 20,
  },
  iconContainer: {
    marginBottom: 20, // Space between icon and main text
  },
  successIcon: {
    width: 300,
    height: 300,
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
    marginBottom: 20,
  },
  trackButton: {
    backgroundColor: '#5A67D8',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  shopButton: {
    backgroundColor: '#5A67D8',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
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
    marginTop: 20, // Space above back to home text
  },
});

export default OrderSuccesScreen;