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
  covidCheck,
} from '../FormData';
import {FormInput} from '../FormInput';
import {Calendar, CalendarProps} from 'react-native-calendars';
function Form1({navigation}) {
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
            Pre-Vaccination Checklist for COVID-19 Vaccines
          </Text>
        </View>
        <View style={{marginVertical: 5}}>
          <Text style={{color: '#5E6F88', fontSize: 12, lineHeight: 20}}>
            The following questions will help us determine if there is any
            reason you should not get the COVID-19 vaccine today. If you answer
            “yes” to any question, it does not necessarily mean you should not
            be vaccinated.
            {'\n'}
            It just means additional questions may be asked. If a question is
            not clear, please ask your healthcare provider to explain it. This
            form is for both kids and adults. Please answer questions that apply
            to your age group and as best as you can. Thank you
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <Text
            style={{
              fontSize: 20,
              color: '#000',
              fontWeight: '500',
            }}>
            Appointment
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
            Appointment time zone is locked to America/Chicago (GMT-05:00){' '}
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

        <DropDown
          state={genders}
          setState={setGenders}
          data={[covidCheck]}
          label="Just to confirm, What type of appointment
          do you need?"
          placeholder="Select what type of appointment do you need"
        />
        <View style={{marginVertical: 30}}>
          <RedLongButton
            onPress={() => {
              navigation.navigate('CovidVaccineForm2');
            }}
            buttonText="Save and Continue"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default Form1;
