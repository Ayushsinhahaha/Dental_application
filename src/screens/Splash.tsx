import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('FirstScreen');
    }, 2000);
  }, []);
  return (
    <View style={{flex:1,alignSelf:"center",justifyContent: 'center',}}>
        <Image source={require('../assets/logo.jpg')} style={{width:420,height:200}} resizeMode='cover' />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
