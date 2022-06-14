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
  vaccine,
} from '../FormData';
import {FormInput} from '../FormInput';

function Form3({navigation, route}) {
  const {form1, form2, formName} = route.params;

  const [genders, setGenders] = useState('');
  const [days, setDays] = useState('');
  const [months, setMonths] = useState('');
  const [years, setYears] = useState('');
  const [ques, setQues] = useState('');
  const [state, setState] = useState({
    hivInfection: '',
    bleedingDisorder: '',
    pregnantOrBreastFeeding: '',
    booster: '',
    previousDose: '',
  });

  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const form3 = {...state};

  const handleContinue = () => {
    const {
      hivInfection,
      bleedingDisorder,
      pregnantOrBreastFeeding,
      booster,
      previousDose,
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
    navigation.navigate('CovidVaccineForm4', {
      form1: form1,
      form2: form2,
      form3: form3,
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

        {/* <DropDown
          state={genders}
          setState={setGenders}
          data={ynd}
          label="Have you received another vaccine in the last 14 dyas?"
          placeholder="Select Have you received another vaccine in the last 14 dyas?"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={ynd}
          label="Have you had a positive  test for COVID-19 or has a doctor ever told you that you had COVID-19?"
          placeholder="Select you had a positive  test for COVID-19?"
        /> */}
        <DropDown
          state={state.hivInfection}
          setState={text => handleChange('hivInfection', text)}
          data={ynd}
          label="Do you have a weakened immune system caused by something such as HIV infection or cancer or do you take immunosuppressive drugs or therapies?"
          placeholder="Select Do you have a weakened immune system?"
        />
        <DropDown
          state={state.bleedingDisorder}
          setState={text => handleChange('bleedingDisorder', text)}
          data={ynd}
          label="Do you have a bleeding disorder or are you taking a blood thinner?"
          placeholder="Select Do you have a bleeding disorder?"
        />
        <DropDown
          state={state.pregnantOrBreastFeeding}
          setState={text => handleChange('pregnantOrBreastFeeding', text)}
          data={ynd}
          label="Are you pregnant or breastfeeding?"
          placeholder="Select Are you pregnant or breastfeeding?"
        />

        <DropDown
          state={state.booster}
          setState={text => handleChange('booster', text)}
          data={vaccine}
          label="What kind of booster did you have?"
          placeholder="Select What kind of booster did you have?"
        />
        <DropDown
          state={state.previousDose}
          setState={text => handleChange('previousDose', text)}
          data={yn}
          label="Have you received a previous dose of Covid -19 Vaccine?"
          placeholder="Select Have you received a previous dose of Covid -19?"
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

export default Form3;
