import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FirstScreen from './src/screens/FirstScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import RegisterUser from './src/screens/RegisterUser';
import ChangePassword from './src/screens/ChangePassword';
import PaymentMethod from './src/screens/PaymentMethod';
import HomeScreen from './src/screens/HomeScreen';
import UpdateInformation from './src/screens/UpdateInformation';
import Notifications from './src/screens/Notifications';
import Splash from './src/screens/Splash';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login Account"
          component={Login}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#1679AB',
            statusBarColor: '#1679AB',
          }}
        />
        <Stack.Screen
          name="Create Account"
          component={RegisterUser}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#1679AB',
            statusBarColor: '#1679AB',
          }}
        />
        <Stack.Screen
          name="Change Password"
          component={ChangePassword}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#1679AB',
            statusBarColor: '#1679AB',
          }}
        />
        <Stack.Screen
          name="Payment Method"
          component={PaymentMethod}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#1679AB',
            statusBarColor: '#1679AB',
          }}
        />
        <Stack.Screen
          name="Update Information"
          component={UpdateInformation}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#1679AB',
            statusBarColor: '#1679AB',
          }}
        />
        <Stack.Screen
          name="Notification"
          component={Notifications}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#1679AB',
            statusBarColor: '#1679AB',
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
