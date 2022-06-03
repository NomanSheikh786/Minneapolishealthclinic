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

function Form2({navigation}) {
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
        <FormInput placeholder="Type your age" label="Age" />

        <FormInput placeholder="(000) 000-0000" label="Cell Phone Number" />

        <FormInput
          placeholder="Type Name of Emergency Contact Number"
          label="Name of Emergency Contact and Telephone Number"
        />

        <DropDown
          state={genders}
          setState={setGenders}
          data={yn}
          label="Are you a healthcare worker?"
          placeholder="Select Are you a healthcare worker?"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={ynd}
          label="Are you feeling sick today?"
          placeholder="Select Are you feeling sick today?"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={yn}
          label="Have you had a positive COVID Test within the past 10 days?"
          placeholder="Select COVID Test within the past 10 days?"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={ynd}
          label="Have you ever had a severe allergic reaction (e.g. anaphylaxis) to something? 
          For example, a reaction for which you were treated with epinephrine or EpiPen, or for which you had to got to the hospital? "
          placeholder="Select Have you ever had a severe allergic reaction."
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={ynd}
          label="Have you received passive antibody therapy (monoclonal antibodies or convalescent serum) as treatment for COVID-19?"
          placeholder="Select Have you received passive antibody therapy"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={yn}
          label="Was the therapy at least 90 days ago?"
          placeholder="Select Was the therapy at least 90 days ago?"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={ynd}
          label="Have you received another vaccine in ther last 14 days?"
          placeholder="Select Have you received another vaccine"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={ynd}
          label="Have you had a positive test for COVID-19 or has a doctor ever told you that you had COVID-19?"
          placeholder="Select Have you had a positive test for COVID-19"
        />

        <View style={{marginVertical: 20}}>
          <RedLongButton
            onPress={() => {
              navigation.navigate('CovidVaccineForm3');
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

export default Form2;
