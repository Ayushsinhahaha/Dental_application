import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChangePassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      <View
        style={{
          backgroundColor: '#fff',
          height: 60,
          bottom: 35,
          width: '90%',
          left: 20,
          borderRadius: 10,
          borderWidth: 0.5,
          marginBottom: 25,
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
        <TextInput
          placeholder="Enter new password"
          style={{marginLeft: 10, fontWeight: '400', fontSize: 20}}
        />
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          height: 60,
          bottom: 35,
          width: '90%',
          left: 20,
          borderRadius: 10,
          borderWidth: 0.5,
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
        <TextInput
          placeholder="Confirm new Password"
          style={{marginLeft: 10, fontWeight: '400', fontSize: 20}}
        />
      </View>

      <TouchableOpacity
        style={{
          width: '80%',
          justifyContent: 'center',
          alignItems: 'center',
          height: 60,
          backgroundColor: '#1679AB',
          margin: 20,
          borderRadius: 20,
          left: 20,
        }}>
        <Text
          style={{
            textTransform: 'uppercase',
            fontWeight: '900',
            fontSize: 23,
            color: '#fff',
          }}>
          Change Password
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
