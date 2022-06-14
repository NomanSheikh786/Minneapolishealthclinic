import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
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
import {SubmitData} from '../../configue/FirebaseSubmitForm';
function Form2({navigation, route}) {
  const {form1, formName} = route.params;
  const [genders, setGenders] = useState('');
  const [days, setDays] = useState('');
  const [months, setMonths] = useState('');
  const [years, setYears] = useState('');
  const [ques, setQues] = useState('');

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  const [selectDate, setSelectDate] = useState(today);
  const [checkAll, setCheckAll] = useState(false);
  const [checkTime1, setCheckTime1] = useState(false);
  const [checkTime2, setCheckTime2] = useState(false);
  const [checkTime3, setCheckTime3] = useState(false);
  const [checkTime4, setCheckTime4] = useState(false);
  const [checkTime5, setCheckTime5] = useState(false);
  const [checkTime6, setCheckTime6] = useState(false);
  const [checkTime7, setCheckTime7] = useState(false);
  const [checkTime8, setCheckTime8] = useState(false);
  const [checkTime9, setCheckTime9] = useState(false);
  const [load, setLoad] = useState(false);

  const times = {
    checkTime1,
    checkTime2,
    checkTime3,
    checkTime4,
    checkTime5,
    checkTime6,
    checkTime7,
    checkTime8,
    checkTime9,
  };

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
  const finalForm = {...times, selectDate, ...form1};
  // console.log('data', finalForm);
  const handleSubmit = () => {
    SubmitData(finalForm, setLoad, navigation, formName);
    // navigation.navigate('FormSubmit', {
    //   title: 'Appointment Confirmed',
    //   text: 'You booked an appointment for Covid-19 Testing on Friday, 24 June at 09:15 AM',
    //   // button: true,
    // });
  };
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
          <TouchableOpacity onPress={() => setCheckAll(!checkAll)}>
            <Text style={{color: '#007AFF'}}>
              {checkAll ? 'Hide' : 'View All'}
            </Text>
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
            activeOpacity={0.9}
            onPress={() => setCheckTime1(!checkTime1)}
            style={{
              backgroundColor: checkTime1 ? '#FE284D' : '#B2BAC6',
              width: vw / 5,
              height: vh / 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#FFF'}}>9:15 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setCheckTime2(!checkTime2)}
            style={{
              backgroundColor: checkTime2 ? '#FE284D' : '#B2BAC6',

              width: vw / 5,
              height: vh / 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#FFF'}}>9:30 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setCheckTime3(!checkTime3)}
            style={{
              backgroundColor: checkTime3 ? '#FE284D' : '#B2BAC6',

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
            activeOpacity={0.9}
            onPress={() => setCheckTime4(!checkTime4)}
            style={{
              backgroundColor: checkTime4 ? '#FE284D' : '#B2BAC6',
              width: vw / 5,
              height: vh / 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#FFF'}}>10:00 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setCheckTime5(!checkTime5)}
            style={{
              backgroundColor: checkTime5 ? '#FE284D' : '#B2BAC6',
              width: vw / 5,
              height: vh / 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#FFF'}}>10:15 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setCheckTime6(!checkTime6)}
            style={{
              backgroundColor: checkTime6 ? '#FE284D' : '#B2BAC6',

              width: vw / 5,
              height: vh / 20,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#FFF'}}>10:30 AM</Text>
          </TouchableOpacity>
        </View>
        {checkAll ? (
          <View
            style={{
              marginTop: 20,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setCheckTime7(!checkTime7)}
              style={{
                backgroundColor: checkTime7 ? '#FE284D' : '#B2BAC6',
                width: vw / 5,
                height: vh / 20,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#FFF'}}>10:45 AM</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setCheckTime8(!checkTime8)}
              style={{
                backgroundColor: checkTime8 ? '#FE284D' : '#B2BAC6',

                width: vw / 5,
                height: vh / 20,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#FFF'}}>11:00 AM</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setCheckTime9(!checkTime9)}
              style={{
                backgroundColor: checkTime9 ? '#FE284D' : '#B2BAC6',
                width: vw / 5,
                height: vh / 20,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#FFF'}}>11:15 AM</Text>
            </TouchableOpacity>
          </View>
        ) : null}
        <View style={{marginVertical: 30}}>
          {load ? (
            <ActivityIndicator color={'#FA284D'} size={'large'} />
          ) : (
            <RedLongButton
              onPress={handleSubmit}
              buttonText="Book an Appointment"
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default Form2;
