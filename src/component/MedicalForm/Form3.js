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
import {FormInput} from '../FormInput';

function Form3({navigation, route}) {
  const {form1, form2, formName} = route.params;

  const [genders, setGenders] = useState('');
  const [days, setDays] = useState('');
  const [months, setMonths] = useState('');
  const [years, setYears] = useState('');
  const [ques, setQues] = useState('');
  const [state, setState] = useState({
    yourInterest: '',
    workOrStudy: '',
    yourActivity: '',
    problemSleep: '',
    hourofSleep: '',
    wakeupRefreshed: '',
    yourEnergy: '',
    energyLevel: '',
    describeYourMode: '',
    moodEffectYourLife: '',
    describeYourStressLevel: '',
    sourceOfStress: '',
    manageStress: '',
    closePeopleSupportYou: '',
  });

  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const form3 = {...state};

  const handleContinue = () => {
    console.log(state);
    const {
      yourInterest,
      workOrStudy,
      yourActivity,
      problemSleep,
      hourofSleep,
      wakeupRefreshed,
      yourEnergy,
      energyLevel,
      describeYourMode,
      moodEffectYourLife,
      describeYourStressLevel,
      sourceOfStress,
      manageStress,
      closePeopleSupportYou,
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
    navigation.navigate('MedicalForm4', {
      form1: form1,
      form2: form2,
      form3: form3,
      formName: formName,
    });
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
            Personal History
          </Text>
        </View>

        <FormInput
          state={state.yourInterest}
          setState={text => handleChange('yourInterest', text)}
          placeholder="Type What are your main interests and hobbies?"
          label="What are your main interests and hobbies?"
        />
        <FormInput
          state={state.workOrStudy}
          setState={text => handleChange('workOrStudy', text)}
          placeholder="Type What is your line of Work or Study?"
          label="What is your line of Work or Study?"
        />
        <FormInput
          state={state.yourActivity}
          setState={text => handleChange('yourActivity', text)}
          placeholder="Type What kind of other movement or activites do you enjoy?"
          label="What kind of other movement or activites do you enjoy?"
        />
        <FormInput
          state={state.problemSleep}
          setState={text => handleChange('problemSleep', text)}
          placeholder="Type You have problems falling or staying asleep?"
          label="You have problems falling or staying asleep?"
        />
        <FormInput
          state={state.hourofSleep}
          setState={text => handleChange('hourofSleep', text)}
          placeholder="Type How many hours do you sleep?"
          label="How many hours do you sleep?"
        />
        <FormInput
          state={state.wakeupRefreshed}
          setState={text => handleChange('wakeupRefreshed', text)}
          placeholder="Type Do you wake up refreshed?"
          label="Do you wake up refreshed?"
        />
        <FormInput
          state={state.yourEnergy}
          setState={text => handleChange('yourEnergy', text)}
          placeholder="Type How is your energy?"
          label="How is your energy?"
        />
        <FormInput
          state={state.energyLevel}
          setState={text => handleChange('energyLevel', text)}
          placeholder="Type Does your energy level affect your daily activites?"
          label="Does your energy level affect your daily activites?"
        />
        <FormInput
          state={state.describeYourMode}
          setState={text => handleChange('describeYourMode', text)}
          placeholder="Type How would you describe your mood, generally:"
          label="How would you describe your mood, generally:"
        />
        <FormInput
          state={state.moodEffectYourLife}
          setState={text => handleChange('moodEffectYourLife', text)}
          placeholder="Type Does your mood affect your life or daily activities?"
          label="Does your mood affect your life or daily activities?"
        />
        <FormInput
          state={state.describeYourStressLevel}
          setState={text => handleChange('describeYourStressLevel', text)}
          placeholder="Type How would you describe your stress level?"
          label="How would you describe your stress level?"
        />
        <FormInput
          state={state.sourceOfStress}
          setState={text => handleChange('sourceOfStress', text)}
          placeholder="Type What are your source of stress?"
          label="What are your source of stress?"
        />
        <FormInput
          state={state.manageStress}
          setState={text => handleChange('manageStress', text)}
          placeholder="Type How do you manage stress?"
          label="How do you manage stress?"
        />
        <FormInput
          state={state.closePeopleSupportYou}
          setState={text => handleChange('closePeopleSupportYou', text)}
          placeholder="Type Do you have people close to you who support you?"
          label="Do you have people close to you who support you?"
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
