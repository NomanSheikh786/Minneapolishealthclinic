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
import {CheckBox, FormInput} from '../FormInput';

function Form2({navigation, route}) {
  const {form1, formName} = route.params;

  const [state, setState] = useState({
    physician: '',
    illness: '',
    operationDate: '',
    medicalHistory: '',
    currentMedication: '',
    drugAllergies: '',
    medicalCond: '',
    day: '',
    month: '',
    year: '',
  });

  const [genders, setGenders] = useState('');
  const [days, setDays] = useState('');
  const [months, setMonths] = useState('');
  const [years, setYears] = useState('');
  const [ques, setQues] = useState('');

  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const form2 = {...state};

  const handleContinue = () => {
    const {
      physician,
      illness,
      operationDate,
      medicalHistory,
      currentMedication,
      drugAllergies,
      medicalCond,
      day,
      month,
      year,
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
    navigation.navigate('CovidTreatForm3', {
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
        <View style={{marginTop: 20}}>
          <Text
            style={{
              fontSize: 20,
              color: '#000',
              fontWeight: '500',
              lineHeight: 25,
            }}>
            Patient Medical History
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            width: '80%',
          }}>
          <Text style={{fontWeight: '500'}}>
            Do you have a primary care Physician? Please lease enter their name
            below and tell us which health system they belong to
          </Text>
        </View>
        <View style={{marginTop: 15}}>
          <FormInput
            state={state.physician}
            setState={text => handleChange('physician', text)}
            label=""
            placeholder=""
            multiple={true}
          />
        </View>
        <View style={{marginVertical: 5}}>
          <Text
            style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
            mt={5}
            my={2}>
            Please check all that apply
          </Text>
          <CheckBox
            text="History of Cancer)"
            checkboxValue={'History of Cancer'}
          />
          <CheckBox
            text="Immunosuppression"
            checkboxValue={'Immunosuppression'}
          />
          <CheckBox
            text="Type 1 or Type 2 Diabetes"
            checkboxValue={'Type 1 or Type 2 Diabetes'}
          />
          <CheckBox text="Heart Disease" checkboxValue={'Heart Disease'} />
          <CheckBox
            text="High Blood Pressure"
            checkboxValue={'High Blood Pressure'}
          />
          <CheckBox
            text="Chronic Kidney Disease"
            checkboxValue={'Chronic Kidney Disease'}
          />
          <CheckBox
            text="Chronic Liver Disease"
            checkboxValue={'Chronic Liver Disease'}
          />
          <CheckBox
            text="Neurological Disorders"
            checkboxValue={'Neurological Disorders'}
          />
          <CheckBox
            text="Chronic Lung Disease"
            checkboxValue={'Chronic Lung Disease'}
          />
          <CheckBox text="Age> 65 Years" checkboxValue={'Age> 65 Years'} />
          <CheckBox text="BMI> 35 Years" checkboxValue={'BMI> 35 Years'} />
          <CheckBox
            text="I am currently pregnant"
            checkboxValue={'I am currently pregnant'}
          />
        </View>
        <FormInput
          state={state.illness}
          setState={text => handleChange('illness', text)}
          placeholder="Type your Other Illnesses"
          label="Other Illnesses"
        />

        <FormInput
          state={state.operationDate}
          setState={text => handleChange('operationDate', text)}
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="Please list any Operations and Dates of Each"
        />

        <FormInput
          state={state.medicalHistory}
          setState={text => handleChange('medicalHistory', text)}
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="Include other comments regarding your Medical History"
        />
        <FormInput
          state={state.currentMedication}
          setState={text => handleChange('currentMedication', text)}
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="Please list your Current Medications"
        />
        <FormInput
          state={state.drugAllergies}
          setState={text => handleChange('drugAllergies', text)}
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="Please list any drug allergies"
        />
        <FormInput
          state={state.medicalCond}
          setState={text => handleChange('medicalCond', text)}
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="Please tell us what medical conditions your family has"
        />
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
