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

function Form3({navigation}) {
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
            Personal History
          </Text>
        </View>

        <FormInput
          placeholder="Type What are your main interests and hobbies?"
          label="What are your main interests and hobbies?"
        />
        <FormInput
          placeholder="Type What is your line of Work or Study?"
          label="What is your line of Work or Study?"
        />
        <FormInput
          placeholder="Type What kind of other movement or activites do you enjoy?"
          label="What kind of other movement or activites do you enjoy?"
        />
        <FormInput
          placeholder="Type You have problems falling or staying asleep?"
          label="You have problems falling or staying asleep?"
        />
        <FormInput
          placeholder="Type How many hours do you sleep?"
          label="How many hours do you sleep?"
        />
        <FormInput
          placeholder="Type Do you wake up refreshed?"
          label="Do you wake up refreshed?"
        />
        <FormInput
          placeholder="Type How is your energy?"
          label="How is your energy?"
        />
        <FormInput
          placeholder="Type Does your energy level affect your daily activites?"
          label="Does your energy level affect your daily activites?"
        />
        <FormInput
          placeholder="Type How would you describe your mood, generally:"
          label="How would you describe your mood, generally:"
        />
        <FormInput
          placeholder="Type Does your mood affect your life or daily activities?"
          label="Does your mood affect your life or daily activities?"
        />
        <FormInput
          placeholder="Type How would you describe your stress level?"
          label="How would you describe your stress level?"
        />
        <FormInput
          placeholder="Type What are your source of stress?"
          label="What are your source of stress?"
        />
        <FormInput
          placeholder="Type How do you manage stress?"
          label="How do you manage stress?"
        />
        <FormInput
          placeholder="Type Do you have people close to you who support you?"
          label="Do you have people close to you who support you?"
        />

        <View style={{marginVertical: 20}}>
          <RedLongButton
            onPress={() => {
              navigation.navigate('MedicalForm4');
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

export default Form3;
