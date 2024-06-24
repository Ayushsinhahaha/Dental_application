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

const PaymentMethod = () => {
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
        <Icon name="credit-card" size={25} />
        <Text style={{fontSize: 20, fontWeight: '500', left: 20}}>Card Number</Text>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          height: 42,
          bottom: 35,
          width: '90%',
          left: 20,
          borderRadius: 10,
        borderWidth:0.5
        }}>
        <TextInput
          placeholder="Enter Card Number"
          style={{marginLeft: 10, fontWeight: '400', fontSize: 18}}
        />
      </View>

      {/* valid until */}
      {/* <View style={{}}> */}

      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          bottom: 40,
          left: 12,
          justifyContent: 'flex-end',
          //   top:20
          marginTop: 30,
        }}>
        <Icon name="calendar" size={25} />
        <Text style={{fontSize: 18, fontWeight: '500', left: 12}}>
          VALID UNTIL
        </Text>
        <Icon name="unlock" size={25} style={{left:70}} />
        <Text style={{fontSize: 18, fontWeight: '500', left: 80}}>
          CVV
        </Text>
      </View>
      <View style={{flexDirection:'row',}}>

      <View
        style={{
          backgroundColor: '#fff',
          height: 42,
          bottom: 35,
          width: '40%',
          left: 20,
          borderRadius: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
          borderWidth:0.5
        }}>
        <TextInput
          placeholder="MM/YYYY"
          style={{marginLeft: 10, fontWeight: '400', fontSize: 18}}
          />
          </View>
      <View
        style={{
          backgroundColor: '#fff',
          height: 42,
          bottom: 35,
          width: '42%',
          left: 50,
          borderRadius: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
          borderWidth:0.5
        }}>
        <TextInput
          placeholder="Enter CVV"
          style={{marginLeft: 10, fontWeight: '400', fontSize: 18}}
          />
          </View>
      </View>
      {/* </View> */}
    
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
          Pay
        </Text>
      </TouchableOpacity>
      
        {/* <TouchableOpacity style={{width:100,height:100,backgroundColor:'#fff',borderRadius:19,margin:10}} ></TouchableOpacity> */}

    </SafeAreaView>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
