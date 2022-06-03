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
  pcrCheck,
  yn,
} from '../FormData';
import {FormInput, CheckBox} from '../FormInput';
import file from '../../assets/selectFile.png';
import sign from '../../assets/sign.png';

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
        <DropDown
          state={genders}
          setState={setGenders}
          data={yn}
          label="Have you been vaccinated for COVID-19?"
          placeholder="Select you been vaccinated for COVID-19?"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={pcrCheck}
          label="Have you had a POSITIVE COVID PCR or Molecular Test (NOT Antigen) within the past 10 days? "
          placeholder="Select you had a POSITIVE COVID PCR"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={yn}
          label="Within the last 14 days, Have you traveled Internationally?"
          placeholder="Select last 14 days, Have you traveled Internationally?"
        />
        <FormInput placeholder="Enter country name" label="If Yes, Where?" />

        <DropDown
          state={genders}
          setState={setGenders}
          data={yn}
          label="Are you a healthcare worker?"
          placeholder="Select you a healthcare worker?"
        />

        {/* <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type Your Medical History"
          textAlignVertical={'top'}
          label="Include other comments regarding your Medical History"
        /> */}
        <View style={{marginVertical: 5}}>
          <Text
            style={{color: 'black', fontSize: 18, fontWeight: '500'}}
            mt={5}
            my={2}>
            By signing below,
          </Text>
          <Text style={{color: '#5E6F88', fontSize: 12, lineHeight: 20}}>
            I understand that I am receiving a COVID-19 test and that it is
            ultimately my responsibility to select the correct test for my
            situation. If I am in need of a specific type of documentation, such
            as an official electronic copy or paper document with a raised seal,
            it is my responsibility to communicate this to the Minneapolis
            Health Clinic PLLC staff at the time of my appointment.
            {'\n'} {'\n'}
            If my insurance information is required for the test, I understand
            that it is my responsibility to bring this information with me at
            the time of my appointment, and I will be charged for the test if I
            do not bring the proper insurance information. If there is a fee for
            this test, I understand that I am financially responsible for this
            at the time of my appointment, and Minneapolis Health Clinic is not
            responsible for any insurance reimbursement issues or denied claims
            if I attempt to submit a claim or the receipt to my insurance
            company.
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#B2BAC6',
            borderRadius: 8,
            height: 150,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
            flexDirection: 'row',
          }}>
          <Image source={sign} resizeMode="contain" />
          <Text style={{color: '#B2BAC6', fontSize: 14, paddingLeft: 10}}>
            Sign Here
          </Text>
        </View>
        <View
          style={{
            marginBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <CheckBox text="Save Signature" checkboxValue={'Signature'} />
          <TouchableOpacity
            style={{
              backgroundColor: '#FE284D',
              borderRadius: 8,
              paddingVertical: 5,
              paddingHorizontal: 20,
            }}>
            <Text style={{color: '#FFF', fontSize: 12}}>Clear</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10}}>
          <FormInput placeholder="First Name" multiple={true} />
          <FormInput placeholder="Last Name" multiple={true} />
        </View>
        <View style={{marginTop: 5}}>
          <Text
            style={{color: 'black', fontSize: 18, fontWeight: '500'}}
            mt={5}
            my={2}>
            By signing below,
          </Text>
          <Text style={{color: '#5E6F88', fontSize: 12, lineHeight: 20}}>
            If you would like to allow a third-party to receive your results on
            your behalf.
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#B2BAC6',
            borderRadius: 8,
            height: 150,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
            flexDirection: 'row',
          }}>
          <Image source={sign} resizeMode="contain" />
          <Text style={{color: '#B2BAC6', fontSize: 14, paddingLeft: 10}}>
            Sign Here
          </Text>
        </View>
        <View
          style={{
            marginBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <CheckBox text="Save Signature" checkboxValue={'Signature'} />
          <TouchableOpacity
            style={{
              backgroundColor: '#FE284D',
              borderRadius: 8,
              paddingVertical: 5,
              paddingHorizontal: 20,
            }}>
            <Text style={{color: '#FFF', fontSize: 12}}>Clear</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginVertical: 20}}>
          <RedLongButton
            onPress={() => {
              console.log('submit covid test');
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
