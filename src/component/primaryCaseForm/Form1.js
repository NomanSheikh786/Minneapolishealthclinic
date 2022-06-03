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
import {month, day, year, gender, question} from '../FormData';
import {FormInput} from '../FormInput';

function Form1({navigation}) {
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
            Appointment Registration Form
          </Text>
        </View>

        <DropDown
          state={genders}
          setState={setGenders}
          data={gender}
          label="Gender"
          placeholder="Select Your Gender"
        />

        <View style={{marginVertical: 5}}>
          <Text
            style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
            mt={5}
            my={2}>
            Name
          </Text>

          <FormInput placeholder="First Name" multiple={true} />
          <FormInput placeholder="Last Name" multiple={true} />
        </View>

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
              state={months}
              setState={setMonths}
              placeholder="Month"
              data={month}
              direction={true}
            />
            <DropDown
              state={days}
              setState={setDays}
              placeholder="Day"
              data={day}
              direction={true}
            />
            <DropDown
              state={years}
              setState={setYears}
              placeholder="Year"
              data={year}
              direction={true}
            />
          </View>
        </View>

        <FormInput placeholder="cm / inch" label="Height (Feet and Inches)" />

        <FormInput placeholder="patient@example.com" label="E-mail Address" />

        <FormInput placeholder="XXXX-XXXX-XXX" label="Phone Number" />

        <View style={{marginVertical: 5}}>
          <Text
            style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
            mt={5}
            my={2}>
            Address
          </Text>

          <FormInput placeholder="Steet Address" multiple={true} />
          <FormInput placeholder="Street Address Line 2" multiple={true} />
          <FormInput placeholder="City" multiple={true} />
          <FormInput placeholder="State / Province" multiple={true} />
          <FormInput placeholder="Postal / Zip Code" multiple={true} />
        </View>

        <DropDown
          label="Type a Question"
          placeholder="Select Your Question"
          data={question}
          state={ques}
          setState={setQues}
        />

        <FormInput placeholder="Weight" label=" Weight (lb)" />

        <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Reason for Visit"
          textAlignVertical={'top'}
          label="Reason for Visit"
        />

        <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Others"
          textAlignVertical={'top'}
          label="Others"
        />

        <View style={{marginVertical: 20}}>
          <RedLongButton
            onPress={() => {
              navigation.navigate('PrimaryForm2');
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

export default Form1;
