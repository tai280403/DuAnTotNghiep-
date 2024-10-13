import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FindScreen from './Screens/Find';
import Favorite from './Screens/Favorite';
import BuyScreen from './Screens/Buy';
import CartScreen from './Screens/Cart';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Register from './Screens/Register';
import HomeScreen from './Screens/HomeSCREEN';
import OderScreen from './Screens/OderScreen';
import CustomDrawerContent from './Screens/CustomDrawerContent';
import PayScreen from './Screens/PayScreen';
import CheckoutScreen from './Screens/Checkout';
import HelpScreen from './Screens/HelpScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen 
          name="Splash" 
          component={Splash} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Register" 
          component={Register} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Find" 
          component={FindScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Favorite" 
          component={Favorite} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Buy" 
          component={BuyScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Cart" 
          component={CartScreen} 
          options={{ headerShown: false }}
        />
                <Stack.Screen 
          name="CustomDrawerContent" 
          component={CustomDrawerContent} 
          options={{ headerShown: false }}
        />
            <Stack.Screen 
          name="OderScreen" 
          component={OderScreen} 
          options={{ headerShown: false }}
        />
                    <Stack.Screen 
          name="PayScreen" 
          component={PayScreen} 
          options={{ headerShown: false }}
        />
                            <Stack.Screen 
          name="Checkout" 
          component={CheckoutScreen} 
          options={{ headerShown: false }}
        />
                                    <Stack.Screen 
          name="HelpScreen" 
          component={HelpScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;