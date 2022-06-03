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
function Form5({navigation}) {
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

        <View style={{marginTop: 10}}>
          <Text style={{color: '#5E6F88', fontSize: 12, lineHeight: 20}}>
            Please read carefully... it's really important!
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
          }}>
          <Text style={{fontWeight: '500'}}>Things you will need to bring</Text>

          <View style={{marginTop: 10}}>
            <Text style={{marginTop: 5}}>
              <Text style={{color: '#FE284D'}}>●</Text> Picture ID
            </Text>
            <Text style={{marginTop: 5}}>
              <Text style={{color: '#FE284D'}}>●</Text> Insurance Card
              {'\n'} &nbsp; &nbsp; &nbsp;
              <Text style={{color: '#5E6F88', fontSize: 12}}>
                For verification
              </Text>
            </Text>
            <Text style={{marginTop: 5}}>
              <Text style={{color: '#FE284D'}}>●</Text> Vaccine Card
              {'\n'} &nbsp; &nbsp; &nbsp;
              <Text style={{color: '#5E6F88', fontSize: 12}}>
                If you do not have one, that’s okay!
              </Text>
            </Text>
          </View>
        </View>

        <View style={{marginTop: 10}}>
          <Text
            style={{color: 'black', fontSize: 18, fontWeight: '500'}}
            mt={5}
            my={2}>
            There is a 10 Minute Late Policy for all Patients.
          </Text>
          <Text style={{color: '#FE284D', fontSize: 12, lineHeight: 20}}>
            Please call us immediately if you are going to be late. {'\n'}
            Minneapolis Health Clinic reserves the right to deny testing if you
            arrive more than 10 minutes late for your appointment - the final
            decision is non-negotiable.
            {'\n'} {'\n'}
            <Text style={{color: '#5E6F88', fontSize: 12, lineHeight: 20}}>
              If you need to cancel, call our office so we can offer this spot
              to someone else. You may still get an appointment reminder from
              our system on the day of your cancelled appointment.
            </Text>
            {'\n'} {'\n'}
            <Text style={{color: '#FE284D', fontSize: 12, lineHeight: 20}}>
              Please check your junk mail if you do not see a confirmation
              email. If you do not receive anything, this may be due to your
              security settings.
            </Text>
          </Text>
        </View>

        <View style={{marginVertical: 30}}>
          <RedLongButton
            onPress={() => {
              navigation.navigate('FormSubmit', {
                title: 'Appointment Confirmed',
                text: 'Thank you for scheduling your vaccine appointment!',
                date: 'Tuesday, May 31,2022',
                time: '12:45-1:15PM',
                location: 'America/Chicago',
                button: true,
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

export default Form5;
