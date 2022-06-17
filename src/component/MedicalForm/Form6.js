import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
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
  fatigue,
} from '../FormData';
import {FormInput} from '../FormInput';
import {SubmitData} from '../../configue/FirebaseSubmitForm';

function Form6({navigation, route}) {
  const {form1, form2, form3, form4, form5, formName} = route.params;

  const [genders, setGenders] = useState('');
  const [days, setDays] = useState('');
  const [months, setMonths] = useState('');
  const [years, setYears] = useState('');
  const [ques, setQues] = useState('');
  const [load, setLoad] = useState(false);

  const [state, setState] = useState({
    headache: '',
    jointPain: '',
    muscleWeakness: '',
    highBloodPressure: '',
    heartMurmur: '',
    coldOrPale: '',
    asthma: '',
    shorBreath: '',
    heartburn: '',
    abdominalDiscomfort: '',
    bleching: '',
    constipation: '',
    diarrhea: '',
    dailyBowelMovements: '',
  });

  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const form6 = {...state};
  const finalForm = {
    ...form1,
    ...form2,
    ...form3,
    ...form4,
    ...form5,
    ...form6,
  };
  const handleSubmit = () => {
    const {
      headache,
      jointPain,
      muscleWeakness,
      highBloodPressure,
      heartMurmur,
      coldOrPale,
      asthma,
      shorBreath,
      heartburn,
      abdominalDiscomfort,
      bleching,
      constipation,
      diarrhea,
      dailyBowelMovements,
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
    SubmitData(finalForm, setLoad, navigation, formName);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: vw - 40, alignSelf: 'center'}}>
        <DropDown
          state={state.headache}
          setState={text => handleChange('headache', text)}
          data={fatigue}
          label="Headache"
          placeholder="Select Headache"
        />
        <DropDown
          state={state.jointPain}
          setState={text => handleChange('jointPain', text)}
          data={fatigue}
          label="Joint Pain or Stiffness"
          placeholder="Select Joint Pain or Stiffness"
        />
        <DropDown
          state={state.muscleWeakness}
          setState={text => handleChange('muscleWeakness', text)}
          data={fatigue}
          label="Muscle Weakness or Soreness"
          placeholder="Select Muscle Weakness or Soreness"
        />
        <DropDown
          state={state.highBloodPressure}
          setState={text => handleChange('highBloodPressure', text)}
          data={fatigue}
          label="High Blood Pressure"
          placeholder="Select High Blood Pressure"
        />
        <DropDown
          state={state.heartMurmur}
          setState={text => handleChange('heartMurmur', text)}
          data={fatigue}
          label="Heart Murmur / Palpitations"
          placeholder="Select Heart Murmur / Palpitations"
        />
        <DropDown
          state={state.coldOrPale}
          setState={text => handleChange('coldOrPale', text)}
          data={fatigue}
          label="Cold or Pale Extremities"
          placeholder="Select Cold or Pale Extremities"
        />
        <DropDown
          state={state.asthma}
          setState={text => handleChange('asthma', text)}
          data={fatigue}
          label="Asthma"
          placeholder="Select Asthma"
        />
        <DropDown
          state={state.shorBreath}
          setState={text => handleChange('shorBreath', text)}
          data={fatigue}
          label="Short of Breath"
          placeholder="Select Short of Breath"
        />
        <DropDown
          state={state.heartburn}
          setState={text => handleChange('heartburn', text)}
          data={fatigue}
          label="Heartburn"
          placeholder="Select Heartburn"
        />
        <DropDown
          state={state.abdominalDiscomfort}
          setState={text => handleChange('abdominalDiscomfort', text)}
          data={fatigue}
          label="Abdominal discomfort after eating"
          placeholder="Select Abdominal discomfort after eating"
        />
        <DropDown
          state={state.bleching}
          setState={text => handleChange('bleching', text)}
          data={fatigue}
          label="Bleching / Gas"
          placeholder="Select Bleching / Gas"
        />
        <DropDown
          state={state.constipation}
          setState={text => handleChange('constipation', text)}
          data={fatigue}
          label="Constipation"
          placeholder="Select Constipation"
        />

        <DropDown
          state={state.diarrhea}
          setState={text => handleChange('diarrhea', text)}
          data={fatigue}
          label="Diarrhea"
          placeholder="Select Diarrhea"
        />
        <DropDown
          state={state.dailyBowelMovements}
          setState={text => handleChange('dailyBowelMovements', text)}
          data={fatigue}
          label="Daily Bowel Movements"
          placeholder="Select Daily Bowel Movements"
        />

        <View style={{marginVertical: 20}}>
          {load ? (
            <ActivityIndicator color={'#FA284D'} size={'large'} />
          ) : (
            <RedLongButton onPress={handleSubmit} buttonText="Submit" />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default Form6;
