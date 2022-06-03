import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  CheckIcon,
  FormControl,
  HStack,
  Select,
  VStack,
  WarningOutlineIcon,
  View,
  Text,
} from 'native-base';
import {vh, vw} from '../../constaint';
import RedLongButton from '../RedLongButton';
import DropDown from '../DropDown';
import {
  month,
  day,
  year,
  gender,
  question,
  checking,
  country,
} from '../FormData';
import {FormInput} from '../FormInput';
import {Calendar, CalendarProps} from 'react-native-calendars';
function Form2({navigation}) {
  const [genders, setGenders] = useState('');
  const [days, setDays] = useState('');
  const [months, setMonths] = useState('');
  const [years, setYears] = useState('');
  const [ques, setQues] = useState('');
  const [checkTime, setCheckTime] = useState(true);

  const [selectDate, setSelectDate] = useState('');

  // const onDayPress: CalendarProps = useCallback(day => {
  //   setSelected(day.dateString);
  // }, []);

  // const marked = useMemo(() => {
  //   return {
  //     [selected]: {
  //       selected: true,
  //       disableTouchEvent: true,
  //       selectedColor: 'orange',
  //       selectedTextColor: 'red'
  //     }
  //   };
  // }, [selected]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: vw - 40, alignSelf: 'center'}}>
        <View style={{marginTop: 20}}>
          <Text
            style={{
              fontSize: 20,
              color: '#000',
              fontWeight: '500',
              lineHeight: 25,
            }}>
            Select Date to Covid-19 Testing
          </Text>
        </View>

        <Calendar
          style={{
            backgroundColor: '#FFF',
            marginTop: 10,
            // marginVertical: 30,
            // borderWidth: 1,
            borderColor: 'red',
            borderRadius: 5,
            padding: 5,
          }}
          onDayPress={e => setSelectDate(e.dateString)}
          // Collection of dates that have to be marked. Default = {}
          markedDates={{
            [selectDate]: {
              selected: true,
              selectedColor: '#FE284D',
            },
          }}
        />
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            // alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#000',
              fontWeight: '500',
              lineHeight: 25,
            }}>
            Choose to Schedule
          </Text>
          <TouchableOpacity>
            <Text style={{color: '#007AFF'}}>View all</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 20,
            width: '80%',
          }}>
          <Text style={{fontSize: 14}}>
            Appointment time zone is locked to America/Chicago (GMT-05:00)
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setCheckTime(!checkTime)}
            style={{
              backgroundColor: checkTime ? '#FE284D' : '#B2BAC6',
              width: vw / 5,
              height: vh / 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#FFF'}}>9:15 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FE284D',
              width: vw / 5,
              height: vh / 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#FFF'}}>9:30 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FE284D',
              width: vw / 5,
              height: vh / 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#FFF'}}>9:45 AM</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setCheckTime(!checkTime)}
            style={{
              backgroundColor: checkTime ? '#FE284D' : '#B2BAC6',
              width: vw / 5,
              height: vh / 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#FFF'}}>10:00 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FE284D',
              width: vw / 5,
              height: vh / 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#FFF'}}>10:15 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FE284D',
              width: vw / 5,
              height: vh / 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#FFF'}}>10:30 AM</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setCheckTime(!checkTime)}
            style={{
              backgroundColor: checkTime ? '#FE284D' : '#B2BAC6',
              width: vw / 5,
              height: vh / 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#FFF'}}>10:45 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FE284D',
              width: vw / 5,
              height: vh / 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#FFF'}}>11:00 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FE284D',
              width: vw / 5,
              height: vh / 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#FFF'}}>11:15 AM</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: 30}}>
          <RedLongButton
            onPress={() => {
              navigation.navigate('FormSubmit', {
                title: 'Appointment Confirmed',
                text: 'You booked an appointment for Covid-19 Testing on Friday, 24 June at 09:15 AM',
                button: true,
              });
            }}
            buttonText="Book an Appointment"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default Form2;
