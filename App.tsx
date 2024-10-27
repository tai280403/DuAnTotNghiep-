import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './redux/store';

// Import các màn hình
import FindScreen from './Screens/Find';
import Favorite from './Screens/Favorite';
import BuyScreen from './Screens/Buy';
import CartScreen from './Screens/Cart';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Register from './Screens/Register';
import HomeScreen from './Screens/HomeSCREEN';
import OderScreen from './Screens/OderScreen';
import PayScreen from './Screens/PayScreen';
import CheckoutScreen from './Screens/Checkout';
import HelpScreen from './Screens/HelpScreen';
import CustomDrawerContent from './Screens/CustomDrawerContent';
import AccountManagement from './Screens/Accountmanagement';
import PictureScreen from './Screens/PictureScreen';
import CommentScreen from './Screens/CommentScreen';
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen';
import BottomNavigation from './components/bottomnavigation'; 
import UserManagementScreen from './ScreensAdmin/UserManagementScreen';
import PortfolioManagement from './ScreensAdmin/PortfolioManagement';
import ProductManagement from './ScreensAdmin/ProductManagementScreen';
import ProductScreen from './Screens/Buy';
import { getCartItems } from './redux/AsyncStorage';
import { loadCart } from './redux/cartSlice';

const Stack = createStackNavigator();

const AppNavigator = ({ navigationRef }) => {
  const [currentRouteName, setCurrentRouteName] = useState('Splash');

  useEffect(() => {
    const unsubscribe = navigationRef.current?.addListener('state', () => {
      const currentRoute = navigationRef.current?.getCurrentRoute();
      setCurrentRouteName(currentRoute?.name || 'Splash');
    });

    return unsubscribe;
  }, [navigationRef]);

  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Find" component={FindScreen} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="Buy" component={BuyScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="OderScreen" component={OderScreen} />
        <Stack.Screen name="PayScreen" component={PayScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="HelpScreen" component={HelpScreen} />
        <Stack.Screen name="CustomDrawerContent" component={CustomDrawerContent} />
        <Stack.Screen name="Accountmanagement" component={AccountManagement} />
        <Stack.Screen name="PictureScreen" component={PictureScreen} />
        <Stack.Screen name="CommentScreen" component={CommentScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="UserManagementScreen" component={UserManagementScreen} />
        <Stack.Screen name="PortfolioManagement" component={PortfolioManagement} />
        <Stack.Screen name="ProductManagementScreen" component={ProductManagement} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />

      </Stack.Navigator>

      {/* Hiển thị Bottom Navigation khi không ở các màn hình Splash, Login, Register */}
      {currentRouteName !== 'Splash' && currentRouteName !== 'Login' && currentRouteName !== 'Register' && (
        <BottomNavigation />
      )}
    </View>
  );
};

const App = () => {
  useEffect(() => {
    const loadInitialData = async () => {
        const cartItems = await getCartItems();
        store.dispatch(loadCart(cartItems)); // Cập nhật giỏ hàng vào Redux
    };

    loadInitialData();
}, []);

  const navigationRef = useRef(null);

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <AppNavigator navigationRef={navigationRef} />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
