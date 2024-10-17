import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigationState } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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

// Import component Bottom Navigation
import BottomNavigation from './components/bottomnavigation'; // Đảm bảo đường dẫn đúng

const Stack = createStackNavigator();

const AppNavigator = () => {
  const currentRouteName = useNavigationState((state) =>
    state.routes[state.index] ? state.routes[state.index].name : 'Splash'
  );

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
      </Stack.Navigator>

      {/* Chỉ hiển thị Bottom Navigation khi không phải các màn hình Splash, Login, Register */}
      {currentRouteName !== 'Splash' && currentRouteName !== 'Login' && currentRouteName !== 'Register' && (
        <BottomNavigation />
      )}
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
