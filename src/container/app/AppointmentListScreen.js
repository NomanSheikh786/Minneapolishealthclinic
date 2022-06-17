import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {FormInput} from '../../component/FormInput';
import {vh, vw} from '../../constaint';
import AppointmentTabs from './AppointemenList';

function AppointmentListScreen({route, navigation}) {
  const {data} = route.params;
  // const [searchAppointment,setSearchAppointment] = useState("")
  //   console.log('ddataa', data.filter((item) => {
  //     if(searchAppointment == "") {
  //       return item
  //     }
  //   }));
  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: vw - 40, alignSelf: 'center'}}>
        {/* <View
          style={{
            borderWidth: 1,
            borderColor: '#B2BAC6',
            marginTop: 30,
            // width: '100%',
            height: vh / 14,
            backgroundColor: '#FFF',
            borderRadius: 8,
            // justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 12,
            alignItems: 'center',
            width: '100%',
            elevation: 2,
            // shadowOffset: {width: 10, height: 10},
          }}>
          <View style={{width: '7%'}}>
            <Image
              style={{}}
              resizeMode="contain"
              source={require('../../assets/filter-search.png')}
            />
          </View>

          <TextInput
            style={{
              color: '#5E6F88',
              borderRadius: 8,
              fontSize: 14,
              width: '83%',
            }}
            placeholder="Search"
            placeholderTextColor={'#5E6F88'}
          />
          <View style={{width: '10%', marginTop: 5}}>
            <Image
              style={{width: 45, height: 45}}
              resizeMode="contain"
              source={require('../../assets/filter.png')}
            />
          </View>
        </View> */}
      </View>

      <AppointmentTabs data={data} navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default AppointmentListScreen;
