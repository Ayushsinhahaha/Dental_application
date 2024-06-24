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

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          bottom: 50,
          left: 12,
          justifyContent: 'flex-end',
        }}>
        <Icon name="envelope" size={25} />
        <Text style={{fontSize: 20, fontWeight: '500', left: 20}}>Email</Text>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          height: 40,
          bottom: 35,
          width: '90%',
          left: 20,
          borderRadius: 10,
        borderWidth:0.5
        }}>
        <TextInput
          placeholder="Enter your email"
          style={{marginLeft: 10, fontWeight: '400', fontSize: 18}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          bottom: 50,
          left: 12,
          justifyContent: 'flex-end',
          //   top:20
          marginTop: 30,
        }}>
        <Icon name="unlock" size={25} />
        <Text style={{fontSize: 20, fontWeight: '500', left: 20}}>
          Password
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          height: 40,
          bottom: 35,
          width: '90%',
          left: 20,
          borderRadius: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
          borderWidth:0.5
        }}>
        <TextInput
          placeholder="Enter your password"
          style={{marginLeft: 10, fontWeight: '400', fontSize: 18}}
        />
        <TouchableOpacity style={{right: 20, top: 5}}>
          <Icon name="eye" size={20} color="#1679AB" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{alignSelf: 'flex-end', marginRight: 20, bottom: 20}}>
        <Text style={{color: '#fff', fontSize: 16}}>Forgot Password</Text>
      </TouchableOpacity>
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
          SIGN IN
        </Text>
      </TouchableOpacity>
      <View style={{justifyContent: 'center', alignSelf: 'center', top: 60}}>
        <Text style={{color: '#fff', fontWeight: '600'}}>
          Or Sign up with Social Account
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          top: 60,
          flexDirection: 'row',
          marginTop: 10,
        }}>
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            backgroundColor: '#fff',
            borderRadius: 19,
            margin: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="google" size={60} style={{}} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            backgroundColor: '#fff',
            borderRadius: 19,
            margin: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="facebook" size={60} style={{}} />
        </TouchableOpacity>
        {/* <TouchableOpacity style={{width:100,height:100,backgroundColor:'#fff',borderRadius:19,margin:10}} ></TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
