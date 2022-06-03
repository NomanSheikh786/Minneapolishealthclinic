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
  fatigue,
} from '../FormData';
import {FormInput} from '../FormInput';

function Form6({navigation}) {
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
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Headache"
          placeholder="Select Headache"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Joint Pain or Stiffness"
          placeholder="Select Joint Pain or Stiffness"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Muscle Weakness or Soreness"
          placeholder="Select Muscle Weakness or Soreness"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="High Blood Pressure"
          placeholder="Select High Blood Pressure"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Heart Murmur / Palpitations"
          placeholder="Select Heart Murmur / Palpitations"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Cold or Pale Extremities"
          placeholder="Select Cold or Pale Extremities"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Asthma"
          placeholder="Select Asthma"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Short of Breath"
          placeholder="Select Short of Breath"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Heartburn"
          placeholder="Select Heartburn"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Abdominal discomfort after eating"
          placeholder="Select Abdominal discomfort after eating"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Bleching / Gas"
          placeholder="Select Bleching / Gas"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Constipation"
          placeholder="Select Constipation"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Blood Sugar Irregularities"
          placeholder="Select Blood Sugar Irregularities"
        />

        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Diarrhea"
          placeholder="Select Diarrhea"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Daily Bowel Movements"
          placeholder="Select Daily Bowel Movements"
        />

        <View style={{marginVertical: 20}}>
          <RedLongButton
            onPress={() => {
              navigation.navigate('FormSubmit', {
                title: 'Thank You!',
                text: 'Your submission has been received',
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

export default Form6;
