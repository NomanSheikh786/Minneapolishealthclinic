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

function Form1({navigation, formName}) {
  const [genders, setGenders] = useState('');
  const [days, setDays] = useState('');
  const [months, setMonths] = useState('');
  const [years, setYears] = useState('');
  const [ques, setQues] = useState('');

  const [state, setState] = useState({
    gender: '',
    fname: '',
    lname: '',
    day: '',
    month: '',
    year: '',
    height: '',
    email: '',
    phone: '',
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    province: '',
    postal: '',
    country: '',
  });

  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleContinue = () => {
    console.log(state);
    const {
      gender,
      fname,
      lname,
      day,
      month,
      year,
      height,
      email,
      phone,
      streetAddress1,
      streetAddress2,
      city,
      province,
      postal,
      country,
    } = state;
    // if (
    //   !gender ||
    //   !fname ||
    //   !lname ||
    //   !day ||
    //   !month ||
    //   !year ||
    //   !height ||
    //   !email ||
    //   !phone ||
    //   !streetAddress1 ||
    //   !streetAddress2 ||
    //   !city ||
    //   !province ||
    //   !postal ||
    //   !ques ||
    //   !weight ||
    //   !visit ||
    //   !other
    // ) {
    //   alert('complete all fields');
    // } else {
    navigation.navigate('CovidTestForm2', {form1: state, formName: formName});
    // }
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
            Covid-19 Appointment Request Form
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            width: '80%',
          }}>
          <Text style={{fontWeight: '500'}}>
            Test Times: Monday to Friday 09:00 AM to 03:00 PM
          </Text>
        </View>
        <View style={{marginVertical: 5}}>
          <Text
            style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
            mt={5}
            my={2}>
            Name
          </Text>

          <FormInput
            state={state.fname}
            setState={text => handleChange('fname', text)}
            placeholder="First Name"
            multiple={true}
          />
          <FormInput
            state={state.lname}
            setState={text => handleChange('lname', text)}
            placeholder="Last Name"
            multiple={true}
          />
        </View>
        <View style={{marginVertical: 5}}>
          <Text
            style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
            mt={5}
            my={2}>
            Birth Date
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <DropDown
              state={state.month}
              setState={text => handleChange('month', text)}
              placeholder="Month"
              data={month}
              direction={true}
            />
            <DropDown
              state={state.day}
              setState={text => handleChange('day', text)}
              placeholder="Day"
              data={day}
              direction={true}
            />
            <DropDown
              state={state.year}
              setState={text => handleChange('year', text)}
              placeholder="Year"
              data={year}
              direction={true}
            />
          </View>
        </View>

        <FormInput
          state={state.email}
          setState={text => handleChange('email', text)}
          placeholder="patient@example.com"
          label="E-mail Address"
        />
        <FormInput
          state={state.phone}
          setState={text => handleChange('phone', text)}
          placeholder="XXXX-XXXX-XXX"
          label="Phone Number"
        />
        <DropDown
          state={state.gender}
          setState={text => handleChange('gender', text)}
          data={gender}
          label="Gender"
          placeholder="Select Your Gender"
        />

        <View style={{marginVertical: 5}}>
          <Text
            style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
            mt={5}
            my={2}>
            Address
          </Text>

          <FormInput
            state={state.streetAddress1}
            setState={text => handleChange('streetAddress1', text)}
            placeholder="Steet Address"
            multiple={true}
          />
          <FormInput
            state={state.streetAddress2}
            setState={text => handleChange('streetAddress2', text)}
            placeholder="Street Address Line 2"
            multiple={true}
          />
          <FormInput
            state={state.city}
            setState={text => handleChange('city', text)}
            placeholder="City"
            multiple={true}
          />
          <FormInput
            state={state.province}
            setState={text => handleChange('province', text)}
            placeholder="State / Province"
            multiple={true}
          />
          <FormInput
            state={state.postal}
            setState={text => handleChange('postal', text)}
            placeholder="Postal / Zip Code"
            multiple={true}
          />
          <DropDown
            state={state.country}
            setState={text => handleChange('country', text)}
            data={country}
            placeholder="Select Country"
            noLabel={true}
          />
        </View>

        <View style={{marginVertical: 20}}>
          <RedLongButton
            onPress={handleContinue}
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
