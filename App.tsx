import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FirstScreen from './src/screens/FirstScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';


const Stack=createNativeStackNavigator();

const App = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{headerShown:false}}  />
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;

const styles = StyleSheet.create({});
