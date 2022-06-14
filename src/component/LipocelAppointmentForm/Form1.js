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
  ethnicity,
  yn,
} from '../FormData';
import {CheckBox, FormInput} from '../FormInput';

function Form1({navigation, formName}) {
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
    phone: '',
    email: '',
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    province: '',
    postal: '',
    country: '',
    allergicReaction: '',
    typeOfAllergic: '',
    currentMedication: '',
    typeOfMedication: '',
    pregnantOrBreastFeeding: '',
    cardivascularDisease: '',
    bloodPressure: '',
    Sufferepilepsy: '',
    abdomenSurgery: '',
    transplant: '',
    currentInfection: '',

    // gender: '',
    // ethnicty: '',
    // height: '',
    // weight: '',
    // covidTest: '',
    // symptoms: '',
  });

  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleContinue = () => {
    const {
      fname,
      lname,
      day,
      month,
      year,
      phone,
      email,
      streetAddress1,
      streetAddress2,
      city,
      province,
      postal,
      country,
      allergicReaction,
      typeOfAllergic,
      currentMedication,
      typeOfMedication,
      pregnantOrBreastFeeding,
      cardivascularDisease,
      bloodPressure,
      Sufferepilepsy,
      abdomenSurgery,
      transplant,
      currentInfection,
    } = state;
    // if (
    //   !drug ||
    //   !clinicName ||
    //   !service ||
    //   !other1 ||
    //   !other2 ||
    //   !operationDate ||
    //   !currentMedication
    // ) {
    //   alert('complete all fields');
    // } else {
    navigation.navigate('LipocelAppointmentForm2', {
      form1: state,
      formName: formName,
    });

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
            High Intensity Focused Ultrasound Guided Body Contouring Procedure
          </Text>
        </View>

        {/* <View
          style={{
            marginTop: 20,
          }}>
          <Text style={{fontWeight: '500'}}>
            If you do not hear from us in 1 Business Day, Please call our office
            at: (763)496-5708s
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
        {/* <FormInput
          placeholder="Type Height (Feet and Inches)"
          label="Height (Feet and Inches)"
        /> */}
        <FormInput
          state={state.phone}
          setState={text => handleChange('phone', text)}
          placeholder="XXXX-XXXX-XXX"
          label="Phone Number"
        />
        <FormInput
          state={state.email}
          setState={text => handleChange('email', text)}
          placeholder="patient@example.com"
          label="E-mail Address"
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

        <View style={{marginVertical: 5}}>
          <Text
            style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
            mt={5}
            my={2}>
            What services are you interested in?
          </Text>
          <CheckBox text="Abdomen" checkboxValue={'Abdomen'} />
          <CheckBox text="Neck" checkboxValue={'Neck'} />
          <CheckBox text="Thighs" checkboxValue={'Thighs'} />
          <CheckBox text="Back (Upper)" checkboxValue={'Back (Upper)'} />
          <CheckBox text="Waist" checkboxValue={'Waist'} />
          <CheckBox text="Arms" checkboxValue={'Arms'} />
          <CheckBox text="ABack (Lower)" checkboxValue={'Back (Lower)'} />
          <CheckBox text="Hips" checkboxValue={'Hips'} />
        </View>
        <DropDown
          state={state.allergicReaction}
          setState={text => handleChange('allergicReaction', text)}
          data={yn}
          label="Do you have any allergies?"
          placeholder="Select Do you have any allergies?"
        />

        <FormInput
          state={state.typeOfAllergic}
          setState={text => handleChange('typeOfAllergic', text)}
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="What type of allergies do you have?"
        />
        <DropDown
          state={state.currentMedication}
          setState={text => handleChange('currentMedication', text)}
          data={yn}
          label="Are you currently taking any medications?"
          placeholder="Select Are you currently taking any medications?"
        />

        <FormInput
          state={state.typeOfMedication}
          setState={text => handleChange('typeOfMedication', text)}
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="If yes, what are the medications you’re currently having?"
        />
        <DropDown
          state={state.pregnantOrBreastFeeding}
          setState={text => handleChange('pregnantOrBreastFeeding', text)}
          data={yn}
          label="Are you pregnant or breastfeeding?"
          placeholder="Select Are you pregnant or breastfeeding?"
        />
        <DropDown
          state={state.cardivascularDisease}
          setState={text => handleChange('cardivascularDisease', text)}
          data={yn}
          label="Do you have any cardiovascular disease?"
          placeholder="Select Do you have any cardiovascular disease?"
        />
        <DropDown
          state={state.bloodPressure}
          setState={text => handleChange('bloodPressure', text)}
          data={yn}
          label="Do you have a high blood pressure or hypertension?"
          placeholder="Select Do you have a high blood pressure or hypertension?"
        />
        <DropDown
          state={state.Sufferepilepsy}
          setState={text => handleChange('Sufferepilepsy', text)}
          data={yn}
          label="Do you suffer from epilepsy?"
          placeholder="Select Do you suffer from epilepsy?"
        />
        <DropDown
          state={state.abdomenSurgery}
          setState={text => handleChange('abdomenSurgery', text)}
          data={yn}
          label="Did you undergo any surgery in the abdomen before?"
          placeholder="Select Did you undergo any surgery in the abdomen before?"
        />
        <DropDown
          state={state.transplant}
          setState={text => handleChange('transplant', text)}
          data={yn}
          label="Did you undergo any transplant?"
          placeholder="Select Did you undergo any transplant?"
        />
        <DropDown
          state={state.currentInfection}
          setState={text => handleChange('currentInfection', text)}
          data={yn}
          label="Do you have any current infection?"
          placeholder="Select Do you have any current infection?"
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

export default Form1;
