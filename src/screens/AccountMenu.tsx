import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const AccountMenu = ({navigation}) => {
  const [name, setName] = useState('Ayush');
  const [email, setEmail] = useState('iamayush02@gmail.com');
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{
          height: 150,
          width: 150,
          backgroundColor: 'dodgerblue',
          borderRadius: 80,
          position: 'absolute',
          top: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name="user" size={120} style={{bottom: 10}} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 40,
          width: 40,
          backgroundColor: 'grey',
          borderRadius: 80,
          position: 'absolute',
          top: 180,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name="camera" size={20} color="#fff" style={{}} />
      </TouchableOpacity>
      <View style={{alignItems: 'center', position: 'absolute', top: 220}}>
        <Text style={{fontSize: 22}}>Hi {name}</Text>
        <Text style={{fontSize: 14}}>{email}</Text>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Update Information')}
        style={{
          width: '90%',
          height: 44,
          backgroundColor: 'dodgerblue',
          borderRadius: 14,
          marginBottom: 10,
          marginTop: 256,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Icon
          name="gear"
          size={25}
          style={{position: 'absolute', left: 30, top: 8}}
        />
        <Text
          style={{
            textAlign: 'center',
            top: 8,
            fontSize: 18,
            fontWeight: '800',
          }}>
          Update Information
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Change Password')}
        style={{
          width: '90%',
          height: 44,
          backgroundColor: 'dodgerblue',
          borderRadius: 14,
          marginBottom: 10,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Icon
          name="unlock"
          size={25}
          style={{position: 'absolute', left: 30, top: 8}}
        />
        <Text
          style={{
            textAlign: 'center',
            top: 8,
            fontSize: 18,
            fontWeight: '800',
          }}>
          Change Password
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '90%',
          height: 44,
          backgroundColor: 'dodgerblue',
          borderRadius: 14,
          marginBottom: 10,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Icon
          name="map-pin"
          size={25}
          style={{position: 'absolute', left: 30, top: 8}}
        />
        <Text
          style={{
            textAlign: 'center',
            top: 8,
            fontSize: 18,
            fontWeight: '800',
          }}>
          Get Directions
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '90%',
          height: 44,
          backgroundColor: 'dodgerblue',
          borderRadius: 14,
          marginBottom: 10,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Icon
          name="phone"
          size={25}
          style={{position: 'absolute', left: 30, top: 8}}
        />
        <Text
          style={{
            textAlign: 'center',
            top: 8,
            fontSize: 18,
            fontWeight: '800',
          }}>
          Contact Us
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '90%',
          height: 44,
          backgroundColor: 'dodgerblue',
          borderRadius: 14,
          marginBottom: 10,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Icon
          name="question"
          size={25}
          style={{position: 'absolute', left: 30, top: 8}}
        />
        <Text
          style={{
            textAlign: 'center',
            top: 8,
            fontSize: 18,
            fontWeight: '800',
          }}>
          Help
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '90%',
          height: 44,
          backgroundColor: 'dodgerblue',
          borderRadius: 14,
          marginBottom: 10,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Icon
          name="lock"
          size={25}
          style={{position: 'absolute', left: 30, top: 8}}
        />
        <Text
          style={{
            textAlign: 'center',
            top: 8,
            fontSize: 18,
            fontWeight: '800',
          }}>
          Sign out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AccountMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
