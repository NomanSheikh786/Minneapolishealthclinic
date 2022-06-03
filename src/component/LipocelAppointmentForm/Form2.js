import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
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
  Switch,
} from 'native-base';
import {vh, vw} from '../../constaint';
import RedLongButton from '../RedLongButton';
import DropDown from '../DropDown';
import sign from '../../assets/sign.png';
import {
  month,
  day,
  year,
  gender,
  question,
  checking,
  country,
  timeZone,
} from '../FormData';
import {CheckBox, FormInput} from '../FormInput';
import {Calendar, CalendarProps} from 'react-native-calendars';
function Form2({navigation}) {
  const [genders, setGenders] = useState('');
  const [days, setDays] = useState('');
  const [months, setMonths] = useState('');
  const [years, setYears] = useState('');
  const [ques, setQues] = useState('');
  const [checkTime, setCheckTime] = useState(true);

  const [selectDate, setSelectDate] = useState('');
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
            My signature below attests that the information above is correct
          </Text>
        </View>
        <View style={{marginVertical: 5}}>
          <Text style={{color: '#5E6F88', fontSize: 12, lineHeight: 20}}>
            Please note that a consent form will be signed before your
            procedure. We look forward to seeing you soon.
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#B2BAC6',
            borderRadius: 8,
            height: 150,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
            flexDirection: 'row',
          }}>
          <Image source={sign} resizeMode="contain" />
          <Text style={{color: '#B2BAC6', fontSize: 14, paddingLeft: 10}}>
            Sign Here
          </Text>
        </View>
        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <CheckBox text="Save Signature" checkboxValue={'Signature'} />
          <TouchableOpacity
            style={{
              backgroundColor: '#FE284D',
              borderRadius: 8,
              paddingVertical: 5,
              paddingHorizontal: 15,
            }}>
            <Text style={{color: '#FFF', fontSize: 12}}>Clear</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          <Text
            style={{
              fontSize: 20,
              color: '#000',
              fontWeight: '500',
            }}>
            We will try to accommodate your request but cannot gurantee it.
          </Text>
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
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>
            Time Zone
          </Text>
          <Switch colorScheme={'primary'} size="sm" />
        </View>
        <DropDown
          state={genders}
          setState={setGenders}
          data={timeZone}
          dataObj={true}
          label=""
          placeholder="Select what type of appointment do you need"
          noLabel={true}
        />
        <View
          style={{
            marginTop: 20,
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
        </View>

        <View
          style={{
            marginTop: 10,
            width: '80%',
          }}>
          <Text style={{fontSize: 12, color: '#5E6F88'}}>
            Appointment time zone is locked to America/Los Angeles (02:23 PM)
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
        <View style={{marginVertical: 5}}>
          <Text
            style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
            mt={5}
            my={2}>
            Choose Date
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <DropDown
              state={months}
              setState={setMonths}
              placeholder="Month"
              data={month}
              direction={true}
            />
            <DropDown
              state={days}
              setState={setDays}
              placeholder="Day"
              data={day}
              direction={true}
            />
            <DropDown
              state={years}
              setState={setYears}
              placeholder="Year"
              data={year}
              direction={true}
            />
          </View>
        </View>

        <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="Have you had your COVID Vaccine? If yes, which one? If no you will have to do a COVID test before your procedure."
        />
        <View style={{marginVertical: 30}}>
          <RedLongButton
            onPress={() => {
              navigation.navigate('FormSubmit', {
                title: 'Thank You!',
                text: 'Your submission has been received',
              });
            }}
            buttonText="Submit"
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
