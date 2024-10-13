import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../acssets/profile1.png')} style={styles.profileImage} />
        <View style={styles.headerIcons}>
          <Image source={require('../acssets/bell.png')} style={styles.icon} />
          <Image source={require('../acssets/SearchIcon.png')} style={styles.icon} />
          <Image source={require('../acssets/Menu2.png')} style={styles.icon} />
        </View>
      </View>
      <View style={styles.categories}>
        <Text style={styles.category}>Popular</Text>
        <Text style={styles.category}>Trending</Text>
        <Text style={styles.category}>News</Text>
        <Text style={styles.category}>Sale</Text>
      </View>
      <View style={styles.filterSort}>
        <Text style={styles.filterSortText}>FILTER & SORT</Text>
        <Image source={require('../acssets/sorttool.png')} style={styles.icon} />
      </View>
      <View style={styles.productList}>
        <View style={styles.product}>
          <Image source={require('../acssets/laptop1.png')} style={styles.productImage} />
          <Text style={styles.productName}>HP</Text>
          <Text style={styles.productPrice}>$750.00 USD</Text>
        </View>
        <View style={styles.product}>
          <Image source={require('../acssets/laptop2.png')} style={styles.productImage} />
          <Text style={styles.productName}>Asus</Text>
          <Text style={styles.productPrice}>$668.00 USD</Text>
        </View>
      </View>
      <View style={styles.productList}>
        <View style={styles.product}>
          <Image source={require('../acssets/laptop1.png')} style={styles.productImage} />
          <Text style={styles.productName}>HP</Text>
          <Text style={styles.productPrice}>$750.00 USD</Text>
        </View>
        <View style={styles.product}>
          <Image source={require('../acssets/laptop2.png')} style={styles.productImage} />
          <Text style={styles.productName}>Asus</Text>
          <Text style={styles.productPrice}>$668.00 USD</Text>
        </View>
      </View>
      <View style={styles.productList}>
        <View style={styles.product}>
          <Image source={require('../acssets/laptop1.png')} style={styles.productImage} />
          <Text style={styles.productName}>HP</Text>
          <Text style={styles.productPrice}>$750.00 USD</Text>
        </View>
        <View style={styles.product}>
          <Image source={require('../acssets/laptop2.png')} style={styles.productImage} />
          <Text style={styles.productName}>Asus</Text>
          <Text style={styles.productPrice}>$668.00 USD</Text>
        </View>
      </View>
      <View style={styles.productList}>
        <View style={styles.product}>
          <Image source={require('../acssets/laptop1.png')} style={styles.productImage} />
          <Text style={styles.productName}>HP</Text>
          <Text style={styles.productPrice}>$750.00 USD</Text>
        </View>
        <View style={styles.product}>
          <Image source={require('../acssets/laptop2.png')} style={styles.productImage} />
          <Text style={styles.productName}>Asus</Text>
          <Text style={styles.productPrice}>$668.00 USD</Text>
        </View>
      </View>
    </ScrollView>
  );
};

function WishlistScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Wishlist</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconSource;

            if (route.name === 'Home') {
              iconSource = focused
                ? require('../acssets/home.png')
                : require('../acssets/home.png');
            } else if (route.name === 'Wishlist') {
              iconSource = focused
                ? require('../acssets/Vectoricon.png')
                : require('../acssets/Vectoricon.png');
            } else if (route.name === 'Profile') {
              iconSource = focused
                ? require('../acssets/profile.png')
                : require('../acssets/profile.png');
            }

            return <Image source={iconSource} style={styles.tabIcon} />;
          },
          tabBarLabel: () => null,  // Ẩn nhãn tab
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#fce4ec',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            paddingBottom: 10,
            height: 60,
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}  // Ẩn thanh tiêu đề
        />
        <Tab.Screen
          name="Wishlist"
          component={WishlistScreen}
          options={{ headerShown: false }}  // Ẩn thanh tiêu đề
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}  // Ẩn thanh tiêu đề
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  profileImage: { width: 40, height: 40, borderRadius: 20 },
  headerIcons: { flexDirection: 'row' },
  icon: { width: 24, height: 24, marginLeft: 16 },
  categories: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 16 },
  category: { fontSize: 16, fontWeight: 'bold' },
  filterSort: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  filterSortText: { fontSize: 16, fontWeight: 'bold' },
  productList: { flexDirection: 'row', justifyContent: 'space-around', padding: 16 },
  product: {
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    width: '40%',
    height: 200,
  },
  productImage: { width: 100, height: 100 },
  productName: { fontSize: 16, fontWeight: 'bold', marginTop: 8 },
  productPrice: { fontSize: 14, color: '#888' },
  tabIcon: { width: 24, height: 24 },
});
