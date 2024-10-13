import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CheckoutScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Checkout</Text>
        <TouchableOpacity>
          <Image source={require('../acssets/Shape.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Delivery Section */}
      <TouchableOpacity style={styles.row}>
        <Text style={styles.rowLabel}>Delivery</Text>
        <View style={styles.rowAction}>
          <Text style={styles.actionText}>Select Method</Text>
          <Image source={require('../acssets/backarrow.png')} style={styles.arrowIcon} />
        </View>
      </TouchableOpacity>

      {/* Payment Section */}
      <TouchableOpacity style={styles.row}>
        <Text style={styles.rowLabel}>Pament</Text>
        <View style={styles.rowAction}>
          <Image source={require('../acssets/card.png')} style={styles.paymentIcon} />
          <Image source={require('../acssets/backarrow.png')} style={styles.arrowIcon} />
        </View>
      </TouchableOpacity>

      {/* Promo Code Section */}
      <TouchableOpacity style={styles.row}>
        <Text style={styles.rowLabel}>Promo Code</Text>
        <View style={styles.rowAction}>
          <Text style={styles.actionText}>Pick discount</Text>
          <Image source={require('../acssets/backarrow.png')} style={styles.arrowIcon} />
        </View>
      </TouchableOpacity>

      {/* Total Cost Section */}
      <TouchableOpacity style={styles.row}>
        <Text style={styles.rowLabel}>Total Cost</Text>
        <View style={styles.rowAction}>
          <Text style={styles.totalText}>$2625.96</Text>
          <Image source={require('../acssets/backarrow.png')} style={styles.arrowIcon} />
        </View>
      </TouchableOpacity>

      {/* Terms and Conditions */}
      <Text style={styles.termsText}>
        By placing an order you agree to our Terms And Conditions.
      </Text>

      {/* Place Order Button */}
      <TouchableOpacity style={styles.placeOrderButton}>
        <Image source={require('../acssets/Caricon.png')} style={styles.truckIcon} />
        <Text style={styles.placeOrderText}>PLACE ORDER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },

  row: {
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
  },
  rowLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rowAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 16,
    color: '#6C63FF',
    marginRight: 8,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6C63FF',
    marginRight: 8,
  },
  arrowIcon: {
    width: 16,
    height: 16,
  },
  paymentIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },

  termsText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },

  placeOrderButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6C63FF',
    paddingVertical: 16,
    borderRadius: 50,
    marginTop: 20,
  },
  placeOrderText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  truckIcon: {
    width: 24,
    height: 24,
  },
});

export default CheckoutScreen;
