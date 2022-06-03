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

function Form5({navigation}) {
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
          label="Fatigue"
          placeholder="Select Fatigue"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Unexplained Weight Loss or Gain"
          placeholder="Select Unexplained Weight Loss or Gain"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Change in appetite"
          placeholder="Select Change in appetite"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Depressive Symptoms"
          placeholder="Select Depressive Symptoms"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Anxiety"
          placeholder="Select Anxiety"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Mood Swings"
          placeholder="Select Mood Swings"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Nervousness"
          placeholder="Select Nervousness"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Addictive Dependency"
          placeholder="Select Addictive Dependency"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Disordered Eating Pattern / Tendency"
          placeholder="Select Disordered Eating Pattern / Tendency"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Tension"
          placeholder="Select Tension"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Lack of Mental Focus"
          placeholder="Select Lack of Mental Focus"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Thyroid Problems"
          placeholder="Select Thyroid Problems"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Diabetes"
          placeholder="Select Diabetes"
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
          label="Excessive Thirst or Hunger"
          placeholder="Select Excessive Thirst or Hunger"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Sugar Cravings"
          placeholder="Select Sugar Cravings"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Abnormal Hair Growth"
          placeholder="Select Abnormal Hair Growth"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={fatigue}
          label="Excessive Perspiration"
          placeholder="Select Excessive Perspiration"
        />

        <View style={{marginVertical: 20}}>
          <RedLongButton
            onPress={() => {
              navigation.navigate('MedicalForm6');
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

export default Form5;
