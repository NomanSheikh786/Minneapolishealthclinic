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
  yn,
  ynd,
} from '../FormData';
import {FormInput} from '../FormInput';

function Form2({navigation, route}) {
  const {form1, formName} = route.params;
  const [genders, setGenders] = useState('');
  const [days, setDays] = useState('');
  const [months, setMonths] = useState('');
  const [years, setYears] = useState('');
  const [ques, setQues] = useState('');

  const [state, setState] = useState({
    fname: '',
    lname: '',
    day: '',
    month: '',
    year: '',
    gender: '',
    age: '',
    phone: '',
    emergencyContact: '',
    healthcare: '',
    feelingSick: '',
    covidTest: '',
    allergicReaction: '',
    antibodyTherapy: '',
    therapyDay: '',
    lastVaccine: '',
    postiveTest: '',
  });

  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const form2 = {...state};
  const handleContinue = () => {
    const {
      fname,
      lname,
      day,
      month,
      year,
      gender,
      age,
      phone,
      emergencyContact,
      healthcare,
      feelingSick,
      covidTest,
      allergicReaction,
      antibodyTherapy,
      therapyDay,
      lastVaccine,
      postiveTest,
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
    navigation.navigate('CovidVaccineForm3', {
      form1: form1,
      form2: form2,
      formName: formName,
    });
    // }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: vw - 40, alignSelf: 'center'}}>
        {/* <View style={{marginTop: 20}}>
          <Text
            style={{
              fontSize: 20,
              color: '#000',
              fontWeight: '500',
              lineHeight: 25,
            }}>
            Medical Weight Loss Intake & Consent Form
          </Text>
        </View> */}
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
        <DropDown
          state={state.gender}
          setState={text => handleChange('gender', text)}
          data={gender}
          label="Gender"
          placeholder="Select Your Gender"
        />
        <FormInput
          state={state.age}
          setState={text => handleChange('age', text)}
          placeholder="Type your age"
          label="Age"
        />

        <FormInput
          state={state.phone}
          setState={text => handleChange('phone', text)}
          placeholder="(000) 000-0000"
          label="Cell Phone Number"
        />

        <FormInput
          state={state.emergencyContact}
          setState={text => handleChange('emergencyContact', text)}
          placeholder="Type Name of Emergency Contact Number"
          label="Name of Emergency Contact and Telephone Number"
        />

        <DropDown
          state={state.healthcare}
          setState={text => handleChange('healthcare', text)}
          data={yn}
          label="Are you a healthcare worker?"
          placeholder="Select Are you a healthcare worker?"
        />
        <DropDown
          state={state.feelingSick}
          setState={text => handleChange('feelingSick', text)}
          data={ynd}
          label="Are you feeling sick today?"
          placeholder="Select Are you feeling sick today?"
        />
        <DropDown
          state={state.covidTest}
          setState={text => handleChange('covidTest', text)}
          data={yn}
          label="Have you had a positive COVID Test within the past 10 days?"
          placeholder="Select COVID Test within the past 10 days?"
        />
        <DropDown
          state={state.allergicReaction}
          setState={text => handleChange('allergicReaction', text)}
          data={ynd}
          label="Have you ever had a severe allergic reaction (e.g. anaphylaxis) to something? 
          For example, a reaction for which you were treated with epinephrine or EpiPen, or for which you had to got to the hospital? "
          placeholder="Select Have you ever had a severe allergic reaction."
        />
        <DropDown
          state={state.antibodyTherapy}
          setState={text => handleChange('antibodyTherapy', text)}
          data={ynd}
          label="Have you received passive antibody therapy (monoclonal antibodies or convalescent serum) as treatment for COVID-19?"
          placeholder="Select Have you received passive antibody therapy"
        />
        <DropDown
          state={state.therapyDay}
          setState={text => handleChange('therapyDay', text)}
          data={yn}
          label="Was the therapy at least 90 days ago?"
          placeholder="Select Was the therapy at least 90 days ago?"
        />
        <DropDown
          state={state.lastVaccine}
          setState={text => handleChange('lastVaccine', text)}
          data={ynd}
          label="Have you received another vaccine in ther last 14 days?"
          placeholder="Select Have you received another vaccine"
        />
        <DropDown
          state={state.postiveTest}
          setState={text => handleChange('postiveTest', text)}
          data={ynd}
          label="Have you had a positive test for COVID-19 or has a doctor ever told you that you had COVID-19?"
          placeholder="Select Have you had a positive test for COVID-19"
        />

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

export default Form2;
