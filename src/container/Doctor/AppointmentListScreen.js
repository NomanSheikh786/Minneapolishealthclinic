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
  const {data, allData} = route.params;
  // const [searchAppointment,setSearchAppointment] = useState("")
  //   console.log('ddataa', data.filter((item) => {
  //     if(searchAppointment == "") {
  //       return item
  //     }
  //   }));

  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: vw - 40, alignSelf: 'center'}}></View>

      <AppointmentTabs data={data} allData={allData} navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default AppointmentListScreen;
