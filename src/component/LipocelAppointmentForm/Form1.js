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
  ethnicity,
  yn,
} from '../FormData';
import {CheckBox, FormInput} from '../FormInput';

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
          <Text
            style={{
              fontSize: 20,
              color: '#000',
              fontWeight: '500',
              lineHeight: 25,
            }}>
            High Intensity Focused Ultrasound Guided Body Contouring Procedure
          </Text>
        </View>

        {/* <View
          style={{
            marginTop: 20,
          }}>
          <Text style={{fontWeight: '500'}}>
            If you do not hear from us in 1 Business Day, Please call our office
            at: (763)496-5708s
          </Text>
        </View> */}
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
        {/* <FormInput
          placeholder="Type Height (Feet and Inches)"
          label="Height (Feet and Inches)"
        /> */}
        <FormInput placeholder="XXXX-XXXX-XXX" label="Phone Number" />
        <FormInput placeholder="patient@example.com" label="E-mail Address" />

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
          <DropDown
            state={genders}
            setState={setGenders}
            data={country}
            placeholder="Select Country"
            noLabel={true}
          />
        </View>

        <View style={{marginVertical: 5}}>
          <Text
            style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
            mt={5}
            my={2}>
            What services are you interested in?
          </Text>
          <CheckBox text="Abdomen" checkboxValue={'Abdomen'} />
          <CheckBox text="Neck" checkboxValue={'Neck'} />
          <CheckBox text="Thighs" checkboxValue={'Thighs'} />
          <CheckBox text="Back (Upper)" checkboxValue={'Back (Upper)'} />
          <CheckBox text="Waist" checkboxValue={'Waist'} />
          <CheckBox text="Arms" checkboxValue={'Arms'} />
          <CheckBox text="ABack (Lower)" checkboxValue={'Back (Lower)'} />
          <CheckBox text="Hips" checkboxValue={'Hips'} />
        </View>
        <DropDown
          state={genders}
          setState={setGenders}
          data={yn}
          label="Do you have any allergies?"
          placeholder="Select Do you have any allergies?"
        />

        <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="What type of allergies do you have?"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={yn}
          label="Are you currently taking any medications?"
          placeholder="Select Are you currently taking any medications?"
        />

        <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="If yes, what are the medications you’re currently having?"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={yn}
          label="Are you pregnant or breastfeeding?"
          placeholder="Select Are you pregnant or breastfeeding?"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={yn}
          label="Do you have any cardiovascular disease?"
          placeholder="Select Do you have any cardiovascular disease?"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={yn}
          label="Do you have a high blood pressure or hypertension?"
          placeholder="Select Do you have a high blood pressure or hypertension?"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={yn}
          label="Do you suffer from epilepsy?"
          placeholder="Select Do you suffer from epilepsy?"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={yn}
          label="Did you undergo any surgery in the abdomen before?"
          placeholder="Select Did you undergo any surgery in the abdomen before?"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={yn}
          label="Did you undergo any transplant?"
          placeholder="Select Did you undergo any transplant?"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={yn}
          label="Do you have any current infection?"
          placeholder="Select Do you have any current infection?"
        />

        <View style={{marginVertical: 20}}>
          <RedLongButton
            onPress={() => {
              navigation.navigate('LipocelAppointmentForm2');
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
