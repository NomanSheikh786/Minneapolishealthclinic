import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import DropDown from '../../component/DropDown';
import {appointments} from '../../component/FormData';
import {FormInput} from '../../component/FormInput';
import RedLongButton from '../../component/RedLongButton';
import firebase from '../../configue/index';

import {vh, vw} from '../../constaint';
import {Calendar, CalendarProps} from 'react-native-calendars';
import calendar from '../../assets/calendar.png';
function AppointmentScreen({navigation, route}) {
  const {userData} = route.params;
  const [appointmentData, setAppointmentData] = useState('');
  const [picDate, setPicDate] = useState(false);
  const [load, setLoad] = useState(false);
  // console.log(item);
  const [userForms, setUserForms] = useState([]);

  // const year = new Date().getFullYear().toLocaleString();
  // const month = new Date().getMonth() + 1;
  // const date = new Date().getDate().toLocaleString();

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  console.log(today);
  const [selectDate, setSelectDate] = useState(today);
  let id = firebase.auth().currentUser.uid;

  // const formData = [];

  // const searchFormHandle = () => {
  // if (!selectDate || !appointmentData) {
  //   alert('select all filters');
  // } else {
  // if (id) {
  //   setLoad(true);

  //       firebase
  // .database()
  // .ref(`users/`)
  // .on('value', function (snapshot) {
  //   snapshot.forEach(function (data) {
  //     const aa = data.child('forms/Covid-19 Testing/2022-06-17');
  //     console.log(aa);
  //   });
  // });
  useEffect(() => {
    setLoad(true);
    firebase
      .database()
      .ref(`users/${userData?.id}/forms`)
      .once('value', snapshot => {
        if (snapshot.val() == null) {
          setLoad(false);
          alert('No data found');
        } else {
          // console.log('snapp', snapshot.val());
          let data = snapshot.val();
          const arrayResult = Object.keys(data).map(formData => {
            return {formName: formData, formDetails: data[formData]};
          });
          setUserForms(arrayResult);
          setLoad(false);
        }
      });
  }, []);
  // userForms.map(aa => console.log(aa.data));
  return (
    // <SafeAreaView style={styles.container}>
    //   <ScrollView
    //     showsVerticalScrollIndicator={false}
    //     contentContainerStyle={{paddingBottom: 70}}
    //     style={{width: vw - 40, alignSelf: 'center'}}>
    //     <View style={{marginTop: 20}}>
    //       <Text style={{fontSize: 20, color: '#000', fontWeight: '500'}}>
    //         User Forms
    //       </Text>
    //     </View>

    // <TouchableOpacity>
    //   <Text></Text>
    // </TouchableOpacity>

    //     {/* <View style={{marginVertical: 30}}>
    //       {load ? (
    //         <ActivityIndicator color={'#FA284D'} size={'large'} />
    //       ) : (
    //         <RedLongButton buttonText="Apply" />
    //       )}
    //     </View> */}
    //   </ScrollView>
    // </SafeAreaView>

    <SafeAreaView style={styles.container}>
      {load ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} color={'red'} />
        </View>
      ) : (
        <FlatList
          ListHeaderComponent={
            <View style={{marginLeft: 20, marginTop: 20}}>
              <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
                User Form List
              </Text>
            </View>
          }
          data={userForms}
          keyExtractor={(item, ind) => ind.toString()}
          ListEmptyComponent={
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 80,
              }}>
              <Text style={{color: 'black', fontSize: 18}}>
                No User Form Found
              </Text>
            </View>
          }
          renderItem={({item}) => {
            return (
              // item?.id != id && (
              <TouchableOpacity
                // onPress={
                //   () =>
                //   // navigation.navigate('AppointmentScreen', {item: item})
                //   {
                //     // PushNotification.localNotification({
                //     //   channelId: 'test-channel',
                //     //   title: 'testing',
                //     //   message: 'poka',
                //     // });
                //   }
                // }
                onPress={() =>
                  navigation.navigate('FormDetails', {
                    item: item,
                    userData: userData,
                  })
                }
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: 'lightgrey',
                  width: '90%',
                  alignSelf: 'center',
                  paddingVertical: 15,
                  paddingHorizontal: 10,
                  borderRadius: 7,
                  margin: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: 'black', fontSize: 16}}>
                  {item?.formName}
                </Text>

                <Image
                  source={require('../../assets/nav.png')}
                  resizeMode={'contain'}
                  style={{height: 15, width: 15}}
                />
              </TouchableOpacity>
              // )
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default AppointmentScreen;
