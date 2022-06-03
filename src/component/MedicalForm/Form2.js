import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
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
  Checkbox,
} from 'native-base';
import {vh, vw} from '../../constaint';
import RedLongButton from '../RedLongButton';
import DropDown from '../DropDown';
import {
  internalMedicane,
  exerciseDays,
  dietFollow,
  alcoholCheck,
  smokeCheck,
  caffeineCheck,
} from '../FormData';
import {FormInput, CheckBox} from '../FormInput';
import file from '../../assets/selectFile.png';
import sign from '../../assets/sign.png';

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
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 20, color: '#000', fontWeight: '500'}}>
            Medical History
          </Text>
        </View>

        <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type Your healthcare qualification"
          textAlignVertical={'top'}
          label="Are you under the care of a qualified 
          healthcare professional? List down whom"
        />

        <View style={{marginVertical: 10}}>
          <Text style={{color: '#5E6F88', fontSize: 12, lineHeight: 20}}>
            It is highly recommended that you are forthcoming with your medical
            conditions so we can help you. If you are on medications
            (particularly for high blood pressure or hypothyroidism), you will
            need these to be monitored during and after the program as your need
            for them may change.
          </Text>
        </View>
        <CheckBox text="I acknowledge" checkboxValue={'acknowledge'} />

        <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="What medications, supplements and over
          the counter items do you take regularly or 
          are currently prescribed:"
        />
        <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="Any past surgeries and hospitalizations?"
        />

        <View style={{marginVertical: 20}}>
          <RedLongButton
            onPress={() => {
              navigation.navigate('MedicalForm3');
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
