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

const FirstScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container} >
      <View style={{alignItems: 'center', bottom: 25}}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>Make Your Visit </Text>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>Very Easy</Text>
      </View>
      <Image
        source={require('../assets/tooth-1501321_1920.png')}
        style={{width: 310, height: 450, alignSelf: 'center', marginTop: 10}}
      />

      <View>
        <Text
          style={{
            fontSize: 28,
            left: 130,
            fontWeight: 'bold',
            alignItems: 'center',
            justifyContent: 'center',
            padding:8,
            top:10,
            marginBottom:20,color:'#fff'
          }}>
          Dental Care
        </Text>
        <TouchableOpacity style={{top:20,width:'90%',left:20}}>
        <Button
          title="Login" color='#1679AB'
          onPress={() => navigation.navigate('Login Account')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={{top:20,width:'90%',left:20,marginTop:20,borderRadius:25}}>
        <Button 
          title="Sign Up" color='#1679AB'
          onPress={() => navigation.navigate('Create Account')}
        />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
  },
});
