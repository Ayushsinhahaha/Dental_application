import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({navigation}) => {
  const [name, setName] = useState('Ayush');
  return (
    <SafeAreaView style={styles.container}>
      {/* Icon and name */}
      <View
        style={{
          justifyContent: 'flex-start',
          alignContent: 'flex-start',
          margin: 10,
          left: 10,
          flexDirection: 'row',
          top: 10,
        }}>
        <Text
          style={{
            left: 10,
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            fontWeight: '700',
            color: '#fff',
          }}>
          Hi, {name}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Notification')}
          style={{
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            right: 20,
            borderRadius: 25,
          }}>
          <Icon name="bell" size={25} color="white" style={{}} />
        </TouchableOpacity>
      </View>
      {/* searchbar */}
      {/* <View
        style={{
          height: 40,
          width: '92%',
          backgroundColor: '#fff',
          alignSelf: 'center',
          borderRadius: 6,
          top: 20,
          flexDirection: 'row',
        }}>
        <Icon name="search" size={20} style={{margin: 10}} />
        <TextInput
          placeholder="What are you looking for?"
          style={{fontSize: 19, textAlign: 'center', top: 5, left: 10}}
        />
      </View> */}
      <ScrollView>
        <TouchableOpacity
          style={{
            height: 120,
            backgroundColor: '#1390B7',
            width: '90%',
            alignSelf: 'center',
            marginTop: 40,
            borderRadius: 20,
          }}>
          <View style={{margin: 24}}>
            <Text style={{fontSize: 28, fontWeight: '900'}}>
              Book Appointment
            </Text>
            <Text style={{fontSize: 16, top: 5}}>Plan your Visit</Text>
          </View>
          <Icon
            name="stethoscope"
            size={80}
            style={{
              position: 'absolute',
              alignItems: 'center',
              right: 20,
              top: 20,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 120,
            backgroundColor: '#1390B7',
            width: '90%',
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 20,
          }}>
          <View style={{margin: 24}}>
            <Text style={{fontSize: 28, fontWeight: '900'}}>Your Schedule</Text>
            <Text style={{fontSize: 16, top: 5}}>
              Check the list of your Visits
            </Text>
          </View>
          <Icon
            name="calendar"
            size={80}
            style={{
              position: 'absolute',
              alignItems: 'center',
              right: 20,
              top: 20,
            }}
          />
        </TouchableOpacity>

        <Text style={{margin: 20, fontSize: 20, fontWeight: '800'}}>
          Our Procedures
        </Text>
        <View style={{}}>
          <FlatList showsHorizontalScrollIndicator={false}
            data={[
              'Consultation',
              'Filling',
              'X-Ray',
              'Dental Cleaning',
              'Root Canal Treatment',
            ]} 
            horizontal
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity>
                  <LinearGradient
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={styles.linearGradient}>
                    <Text style={styles.buttonText}>{item}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'dodgerblue',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  linearGradient:{
    width:160,
    height:120,
    borderRadius:15,
    marginLeft:10
  },
  buttonText:{
    fontSize:24,fontWeight:'800',textAlign:"center",top:30,padding:6,color:'#fff'
  }
});
