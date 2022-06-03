import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Linking,
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
  rapidTest1,
  rapidTest2,
  reasonForTest,
} from '../FormData';
import {FormInput, CheckBox} from '../FormInput';
import file from '../../assets/selectFile.png';
import sign from '../../assets/sign.png';

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
        {/* <View style={{marginTop: 20}}>
          <Text style={{fontSize: 20, color: '#000', fontWeight: '500'}}>
            LifeStyle Habits
          </Text>
        </View> */}
        <DropDown
          state={genders}
          setState={setGenders}
          data={reasonForTest}
          label="Reason for Testing"
          placeholder="Select Reason for Testing"
        />

        <View style={{marginVertical: 10}}>
          {/* <Text
            style={{color: 'black', fontSize: 18, fontWeight: '500'}}
            mt={5}
            my={2}>
            By signing below,
          </Text> */}
          <Text style={{color: '#5E6F88', fontSize: 12, lineHeight: 20}}>
            Due to the demand of rapid PCR tests and limited supplies, we will
            contact you as soon as possible if we do not have supplies. We
            cannot guarantee that you will be notified before the day of your
            test. Prices are subject to change according to funding from the
            Minnesota Department of Health. We cannot guarantee that you will be
            notified before the day of your test.
          </Text>
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={{color: '#000', fontSize: 12, lineHeight: 20}}>
            To help conserve our stock of PCR tests, if a PCR is not required
            for your situation, we ask that you consider a Molecular NAAT test
            or Antigen test.
          </Text>
        </View>
        <View style={{marginVertical: 5}}>
          <Text style={{color: '#000', fontSize: 12, lineHeight: 20}}>
            For more information on NAAT tests, please visit: {'\n'}
            <Text
              onPress={() =>
                Linking.openURL(
                  'https://cdc.gov/coronavirus/2019-ncov/lab/naats.html',
                ).catch(err => console.error("Couldn't load page", err))
              }
              style={{color: '#007AFF'}}>
              www.cdc.gov/coronavirus/2019-ncov/lab/naats.html
            </Text>
          </Text>
        </View>
        <DropDown
          state={genders}
          setState={setGenders}
          data={rapidTest1}
          label="Which COVID test is Required?
          (To help conserve our stock of PCR tests, if a PCR is not required for your situation, We ask that you consider a Molecular NAAT Test or Antigen Test)."
          placeholder="Select Your Rapid Covid-19 Antigen Test"
        />

        <View style={{marginVertical: 10}}>
          <Text
            style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
            mt={5}
            my={2}>
            Please upload a photo of your Insurance Card here (Antigen Test
            Only)
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#B2BAC6',
              borderRadius: 8,
              height: 150,
              alignItems: 'center',
              justifyContent: 'space-evenly',
              paddingVertical: 5,
            }}>
            <Image source={file} resizeMode="contain" />
            <Text style={{fontWeight: '500'}}>
              Drag your documents and photos
            </Text>
            <Text style={{color: '#5E6F88', fontSize: 12}}>
              Support PDF, JPEG, PNG
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#28B1FE',
                borderRadius: 8,
                paddingVertical: 5,
                paddingHorizontal: 15,
              }}>
              <Text style={{color: '#FFF', fontSize: 12}}>Browse File</Text>
            </TouchableOpacity>
          </View>
        </View>
        <DropDown
          state={genders}
          setState={setGenders}
          data={rapidTest2}
          label=""
          placeholder="Select Your Rapid Covid-19 Naat Test"
          noLabel={true}
        />

        <View style={{marginVertical: 20}}>
          <RedLongButton
            onPress={() => {
              navigation.navigate('CovidTestForm4');
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
