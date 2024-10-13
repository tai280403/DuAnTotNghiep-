import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../acssets/profile1.png')} style={styles.profileImage} />
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Image source={require('../acssets/bell.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Find')}>
            <Image source={require('../acssets/SearchIcon.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('CustomDrawerContent')}>
            <Image source={require('../acssets/Menu.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        <Text style={[styles.category, styles.categoryActive]}>Popular</Text>
        <Text style={styles.category}>Trending</Text>
        <Text style={styles.category}>News</Text>
        <Text style={styles.category}>Sale</Text>
      </View>

      {/* Filter & Sort */}
      <View style={styles.filterSort}>
        <Text style={styles.filterSortText}>FILTER & SORT</Text>
        <Image source={require('../acssets/sorttool.png')} style={styles.icon} />
      </View>
 
      {/* Product List wrapped in ScrollView */}
      <ScrollView style={styles.productScrollView}>
        <View style={styles.productList}>
          {/* Product 1 */}
          <View style={styles.product} >
            <TouchableOpacity onPress={() => navigation.navigate('Buy')}>
            <Image source={require('../acssets/Asus1.png')} style={styles.productImage} />
            <Text style={styles.productName}>HP</Text>
            <Text style={styles.productPrice}>$750.00 USD</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.heartIconContainer}>
              <Image source={require('../acssets/Vector.png')} style={styles.heartIcon} />
            </TouchableOpacity>
          </View>

          {/* Product 2 */}
          <View style={styles.product} >
            <Image source={require('../acssets/Asus1.png')} style={styles.productImage} />
            <Text style={styles.productName}>Asus</Text>
            <Text style={styles.productPrice}>$668.00 USD</Text>
            <TouchableOpacity style={styles.heartIconContainer}>
              <Image source={require('../acssets/Vector.png')} style={styles.heartIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Product List Continued */}
        <View style={styles.productList}>
          {/* Product 3 */}
          <View style={styles.product}>
            <Image source={require('../acssets/Asus1.png')} style={styles.productImage} />
            <Text style={styles.productName}>Acer Aspire Lite 16</Text>
            <Text style={styles.productPrice}>$858.00 USD</Text>
            <TouchableOpacity style={styles.heartIconContainer}>
              <Image source={require('../acssets/Vector.png')} style={styles.heartIcon} />
            </TouchableOpacity>
          </View>

          {/* Product 4 */}
          <View style={styles.product}>
            <Image source={require('../acssets/Asus1.png')} style={styles.productImage} />
            <Text style={styles.productName}>Lenovo Yoga</Text>
            <Text style={styles.productPrice}>$949.00 USD</Text>
            <TouchableOpacity style={styles.heartIconContainer}>
              <Image source={require('../acssets/Vector.png')} style={styles.heartIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  profileImage: { width: 40, height: 40, borderRadius: 20 },
  headerIcons: { flexDirection: 'row' },
  icon: { width: 24, height: 24, marginLeft: 16 },
  categories: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 16 },
  category: { fontSize: 16, fontWeight: 'bold', color: '#999' },
  categoryActive: { color: '#6C63FF', borderBottomWidth: 2, borderBottomColor: '#6C63FF' },
  filterSort: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  filterSortText: { fontSize: 16, fontWeight: 'bold' },
  productScrollView: { paddingVertical: 16 },  // Adjusted for scroll view
  productList: { flexDirection: 'row', justifyContent: 'space-around', padding: 16 },
  product: {
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    width: '45%',
    padding: 16,
  },
  productImage: { width: 100, height: 100, resizeMode: 'contain' },
  productName: { fontSize: 16, fontWeight: 'bold', marginTop: 10, textAlign: 'center' },
  productPrice: { fontSize: 14, color: '#888', marginTop: 5 },
  heartIconContainer: { position: 'absolute', top: 10, right: 10 },
  heartIcon: { width: 20, height: 20 },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 30,
    backgroundColor: '#f1f1f1',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  
});

export default HomeScreen;
