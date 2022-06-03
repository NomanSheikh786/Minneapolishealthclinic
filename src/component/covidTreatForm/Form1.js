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
  covidTest,
} from '../FormData';
import {CheckBox, FormInput} from '../FormInput';

function Form1({navigation}) {
  const [genders, setGenders] = useState('');
  const [days, setDays] = useState('');
  const [months, setMonths] = useState('');
  const [years, setYears] = useState('');
  const [ques, setQues] = useState('');

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
            Covid-19 Oral Anti-Viral and Monoclonal Antibody Appointment Request
            Form
          </Text>
        </View>
        <View style={{marginVertical: 5}}>
          <Text
            style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
            mt={5}
            my={2}>
            Name
          </Text>

          <FormInput placeholder="First Name" multiple={true} />
          <FormInput placeholder="Last Name" multiple={true} />
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

        <DropDown
          state={genders}
          setState={setGenders}
          data={gender}
          label="Gender"
          placeholder="Select Your Gender"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={ethnicity}
          label="Ethnicity"
          placeholder="Select Your Ethnicity"
        />
        <FormInput
          placeholder="Type Height (Feet and Inches)"
          label="Height (Feet and Inches)"
        />
        <FormInput
          placeholder="Type Patient Weight (lb)"
          label="Patient Weight (lb)"
        />
        <FormInput placeholder="patient@example.com" label="E-mail Address" />
        <FormInput placeholder="XXXX-XXXX-XXX" label="Phone Number" />

        <View style={{marginVertical: 5}}>
          <Text
            style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
            mt={5}
            my={2}>
            Address
          </Text>

          <FormInput placeholder="Steet Address" multiple={true} />
          <FormInput placeholder="Street Address Line 2" multiple={true} />
          <FormInput placeholder="City" multiple={true} />
          <FormInput placeholder="State / Province" multiple={true} />
          <FormInput placeholder="Postal / Zip Code" multiple={true} />
          <DropDown
            state={genders}
            setState={setGenders}
            data={country}
            placeholder="Select Country"
            noLabel={true}
          />
        </View>

        <DropDown
          state={genders}
          setState={setGenders}
          data={covidTest}
          label="Was your COVID test performed at a Clinic
          or Laboratory, or was it an at home test"
          placeholder="Select Was your COVID test performed at a Clinic"
        />
        <FormInput
          placeholder="What date did your symptoms start?"
          label="Type What date did your symptoms start?"
        />
        <View style={{marginVertical: 5}}>
          <Text
            style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
            mt={5}
            my={2}>
            What therapeutic COVID medication do you need?
          </Text>
          <CheckBox
            text="Bebtelovimab (Monoclonal Antibody IV Therapy)"
            checkboxValue={'Bebtelovimab'}
          />
          <CheckBox
            text="Paxlovid (Oral Medication)"
            checkboxValue={'Paxlovid'}
          />
          <CheckBox
            text="Molnupiravir (Oral Medication)"
            checkboxValue={'Molnupiravir'}
          />
          <CheckBox
            text="Evusheld (Pre-exposure Prophylaxis)"
            checkboxValue={'Evusheld'}
          />
        </View>
        <View style={{marginVertical: 20}}>
          <RedLongButton
            onPress={() => {
              navigation.navigate('CovidTreatForm2');
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
