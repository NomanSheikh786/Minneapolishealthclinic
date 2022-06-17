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

function Form5({navigation, route}) {
  const {form1, form2, form3, form4, formName} = route.params;

  const [genders, setGenders] = useState('');
  const [days, setDays] = useState('');
  const [months, setMonths] = useState('');
  const [years, setYears] = useState('');
  const [ques, setQues] = useState('');
  const [state, setState] = useState({
    fatigue: '',
    weightLossOrGain: '',
    changeInAppetite: '',
    depressiveSymtoms: '',
    anixety: '',
    moodSwing: '',
    nervousness: '',
    addictiveDependency: '',
    disorderedEating: '',
    tension: '',
    lackOfMental: '',
    thyroidProblem: '',
    diabetes: '',
    bloodSugarIrregularities: '',
    excessiveThirst: '',
    sugarCraving: '',
    abnormalHairGrowth: '',
    excessivePerspiration: '',
  });

  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const form5 = {...state};

  const handleContinue = () => {
    const {
      fatigue,
      weightLossOrGain,
      changeInAppetite,
      depressiveSymtoms,
      anixety,
      moodSwing,
      nervousness,
      addictiveDependency,
      disorderedEating,
      tension,
      lackOfMental,
      thyroidProblem,
      diabetes,
      bloodSugarIrregularities,
      excessiveThirst,
      sugarCraving,
      abnormalHairGrowth,
      excessivePerspiration,
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
    navigation.navigate('MedicalForm6', {
      form1: form1,
      form2: form2,
      form3: form3,
      form4: form4,
      form5: form5,
      formName: formName,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: vw - 40, alignSelf: 'center'}}>
        <DropDown
          state={state.fatigue}
          setState={text => handleChange('fatigue', text)}
          data={fatigue}
          label="Fatigue"
          placeholder="Select Fatigue"
        />
        <DropDown
          state={state.weightLossOrGain}
          setState={text => handleChange('weightLossOrGain', text)}
          data={fatigue}
          label="Unexplained Weight Loss or Gain"
          placeholder="Select Unexplained Weight Loss or Gain"
        />
        <DropDown
          state={state.changeInAppetite}
          setState={text => handleChange('changeInAppetite', text)}
          data={fatigue}
          label="Change in appetite"
          placeholder="Select Change in appetite"
        />
        <DropDown
          state={state.depressiveSymtoms}
          setState={text => handleChange('depressiveSymtoms', text)}
          data={fatigue}
          label="Depressive Symptoms"
          placeholder="Select Depressive Symptoms"
        />
        <DropDown
          state={state.anixety}
          setState={text => handleChange('anixety', text)}
          data={fatigue}
          label="Anxiety"
          placeholder="Select Anxiety"
        />
        <DropDown
          state={state.moodSwing}
          setState={text => handleChange('moodSwing', text)}
          data={fatigue}
          label="Mood Swings"
          placeholder="Select Mood Swings"
        />
        <DropDown
          state={state.nervousness}
          setState={text => handleChange('nervousness', text)}
          data={fatigue}
          label="Nervousness"
          placeholder="Select Nervousness"
        />
        <DropDown
          state={state.addictiveDependency}
          setState={text => handleChange('addictiveDependency', text)}
          data={fatigue}
          label="Addictive Dependency"
          placeholder="Select Addictive Dependency"
        />
        <DropDown
          state={state.disorderedEating}
          setState={text => handleChange('disorderedEating', text)}
          data={fatigue}
          label="Disordered Eating Pattern / Tendency"
          placeholder="Select Disordered Eating Pattern / Tendency"
        />
        <DropDown
          state={state.tension}
          setState={text => handleChange('tension', text)}
          data={fatigue}
          label="Tension"
          placeholder="Select Tension"
        />
        <DropDown
          state={state.lackOfMental}
          setState={text => handleChange('lackOfMental', text)}
          data={fatigue}
          label="Lack of Mental Focus"
          placeholder="Select Lack of Mental Focus"
        />
        <DropDown
          state={state.thyroidProblem}
          setState={text => handleChange('thyroidProblem', text)}
          data={fatigue}
          label="Thyroid Problems"
          placeholder="Select Thyroid Problems"
        />
        <DropDown
          state={state.diabetes}
          setState={text => handleChange('diabetes', text)}
          data={fatigue}
          label="Diabetes"
          placeholder="Select Diabetes"
        />
        <DropDown
          state={state.bloodSugarIrregularities}
          setState={text => handleChange('bloodSugarIrregularities', text)}
          data={fatigue}
          label="Blood Sugar Irregularities"
          placeholder="Select Blood Sugar Irregularities"
        />
        <DropDown
          state={state.excessiveThirst}
          setState={text => handleChange('excessiveThirst', text)}
          data={fatigue}
          label="Excessive Thirst or Hunger"
          placeholder="Select Excessive Thirst or Hunger"
        />
        <DropDown
          state={state.sugarCraving}
          setState={text => handleChange('sugarCraving', text)}
          data={fatigue}
          label="Sugar Cravings"
          placeholder="Select Sugar Cravings"
        />
        <DropDown
          state={state.abnormalHairGrowth}
          setState={text => handleChange('abnormalHairGrowth', text)}
          data={fatigue}
          label="Abnormal Hair Growth"
          placeholder="Select Abnormal Hair Growth"
        />
        <DropDown
          state={state.excessivePerspiration}
          setState={text => handleChange('excessivePerspiration', text)}
          data={fatigue}
          label="Excessive Perspiration"
          placeholder="Select Excessive Perspiration"
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

export default Form5;
