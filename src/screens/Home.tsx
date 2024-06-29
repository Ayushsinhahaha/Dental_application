import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import AccountMenu from './AccountMenu';
import Charges from './Charges';
import Search from './Search';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    // <SafeAreaView style={styles.container}>
    // tabBarShowLabel:false
    <Tab.Navigator screenOptions={{headerTitleAlign:'center',headerTintColor:'#1679AB',}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown:false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          // tabBarLabel: 'Chat',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Charges"
        component={Charges}
        options={{
          // tabBarLabel: 'Setting',
          
          tabBarIcon: ({color, size}) => (
            <Icon name="dollar" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen
          name="Account"
          component={AccountMenu}
          options={{
            // tabBarLabel: 'Account',
            tabBarIcon: ({color, size}) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
        />
    </Tab.Navigator>
    // </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'dodgerblue',
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
