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

function Form4({navigation}) {
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
            Diet and Lifestyle
          </Text>
        </View>
        <FormInput
          placeholder="Type Do you regularly drink alcoholic beverages?"
          label="Do you regularly drink alcoholic beverages?"
        />
        <FormInput
          placeholder="Type If yes, how many per week?"
          label="If yes, how many per week?"
        />
        <FormInput
          placeholder="Type Do you smoke tobacco?"
          label="Do you smoke tobacco?"
        />
        <FormInput
          placeholder="Type Do you use recreational drugs?"
          label="Do you use recreational drugs?"
        />
        <FormInput
          placeholder="Type How is your appetite?"
          label="How is your appetite?"
        />
        <FormInput
          placeholder="Type How many meals per day do you eat?"
          label="How many meals per day do you eat?"
        />
        <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="What is a typical day, in term of food intake? Please list all meals and snacks."
        />
        <FormInput
          placeholder="Type How much fluids do you normally drink?"
          label="How much fluids do you normally drink? Please approximate in ounces."
        />
        <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="Please list all types of beverages you regularly drink."
        />
        <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="What past struggles and diffculties have you experienced in terms of food and dieting?"
        />
        <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="What diet and exercise programs, protocols, plans or approaches have you tried in the past?"
        />
        <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="What types of diet and exercise approaches have worked for you in the past?"
        />
        <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="And what hasn’t worked for you at all?"
        />
        <View style={{marginVertical: 20}}>
          <RedLongButton
            onPress={() => {
              navigation.navigate('MedicalForm5');
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

export default Form4;
