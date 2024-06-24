import {
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterUser = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          bottom: 30,
          left: 12,
          justifyContent: 'flex-end',
        }}>
        <Icon name="user" size={25} />
        <Text style={{fontSize: 20, fontWeight: '500', left: 20}}>Name</Text>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          height: 45,
          bottom: 35,
          width: '90%',
          left: 20,
          borderRadius: 10,
        borderWidth:0.5
        }}>
        <TextInput
          placeholder="Enter your full name"
          style={{marginLeft: 10, fontWeight: '400', fontSize: 18}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          bottom: 30,
          left: 12,
          justifyContent: 'flex-end',
        }}>
        <Icon name="envelope" size={25} />
        <Text style={{fontSize: 20, fontWeight: '500', left: 20}}>Email</Text>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          height: 45,
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
          bottom: 30,
          left: 12,
          justifyContent: 'flex-end',
        }}>
        <Icon name="phone" size={25} />
        <Text style={{fontSize: 20, fontWeight: '500', left: 20}}>Phone Number</Text>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          height: 45,
          bottom: 35,
          width: '90%',
          left: 20,
          borderRadius: 10,
        borderWidth:0.5
        }}>
        <TextInput
          placeholder="Enter your Phone Number "
          style={{marginLeft: 10, fontWeight: '400', fontSize: 18}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          bottom: 30,
          left: 12,
          justifyContent: 'flex-end',
        }}>
        <Icon name="lock" size={25} />
        <Text style={{fontSize: 20, fontWeight: '500', left: 20}}>Password</Text>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          height: 45,
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
        <TouchableOpacity style={{right: 20, top: 8}}>
          <Icon name="eye" size={20} color="#1679AB" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{alignSelf: 'flex-end', marginRight: 20, bottom: 10,flexDirection:'row'}}>
        <Text style={{color: '#fff', fontSize: 16}}>Already have an account? </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Login Account')}   ><Text style={{color:'blue',fontWeight:'900'}}>Sign In</Text></TouchableOpacity>
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
          SIGN Up
        </Text>
      </TouchableOpacity>

      {/*bottom tabs */}
      <View style={{justifyContent: 'center', alignSelf: 'center', top: 20}}>
        <Text style={{color: '#fff', fontWeight: '600'}}>
          Or Sign up with Social Account
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          top: 20,
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
        <TouchableOpacity onPress={()=>Linking.openURL('https://www.google.com')}
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

export default RegisterUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
