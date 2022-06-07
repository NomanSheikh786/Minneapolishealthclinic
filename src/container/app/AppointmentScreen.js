import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import DropDown from '../../component/DropDown';
import {appointments} from '../../component/FormData';
import {FormInput} from '../../component/FormInput';
import RedLongButton from '../../component/RedLongButton';
import {vh, vw} from '../../constaint';
import {Calendar, CalendarProps} from 'react-native-calendars';
import calendar from '../../assets/calendar.png';
function AppointmentScreen({navigation}) {
  const [genders, setGenders] = useState('');
  const [picDate, setPicDate] = useState(false);

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
  console.log(selectDate);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 70}}
        style={{width: vw - 40, alignSelf: 'center'}}>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 20, color: '#000', fontWeight: '500'}}>
            Appointments
          </Text>
        </View>

        <View style={{marginVertical: 20}}>
          <Text
            style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
            mt={5}
            my={2}>
            Select Date
          </Text>

          <TouchableOpacity
            onPress={() => setPicDate(!picDate)}
            activeOpacity={0.8}
            style={{
              fontSize: 14,
              color: '#5E6F88',
              borderWidth: 1,
              borderColor: '#B2BAC6',
              borderRadius: 8,
              padding: 10,
              height: 50,
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 5,
              flexDirection: 'row',
              // textAlignVertical: props.textAlignVertical,
            }}>
            <Text>{selectDate}</Text>
            <Image source={calendar} />
          </TouchableOpacity>
        </View>

        {picDate ? (
          <Calendar
            style={{
              backgroundColor: '#FFF',
              // marginTop: 10,
              // marginVertical: 30,
              // borderWidth: 1,
              borderColor: 'red',
              borderRadius: 5,
              padding: 5,
              // width: vw / 1.5,
              // alignSelf: 'center',
              // height: vh / 2.2,
            }}
            onDayPress={e => setSelectDate(e.dateString)}
            enableSwipeMonths={true}
            // Collection of dates that have to be marked. Default = {}
            markedDates={{
              [selectDate]: {
                selected: true,
                selectedColor: '#FE284D',
              },
            }}
          />
        ) : null}
        <DropDown
          state={genders}
          setState={setGenders}
          data={appointments}
          label="Appointment For"
          placeholder="Select Your Appointment"
        />

        <View style={{marginVertical: 30}}>
          <RedLongButton
            onPress={() => {
              navigation.navigate('AppointmentListScreen');
            }}
            buttonText="Apply"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default AppointmentScreen;
