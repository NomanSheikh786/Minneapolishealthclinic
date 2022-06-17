import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  ActivityIndicator,
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
import {SubmitData} from '../../configue/FirebaseSubmitForm';
import {addImage} from '../../configue/FirebaseImages';

function Form4({navigation, route}) {
  const {
    form1,
    form2,
    form3,
    formName,

    setImage,
    insuranceCard,
    checkImage,
    image,
  } = route.params;

  const [genders, setGenders] = useState('');
  const [days, setDays] = useState('');
  const [months, setMonths] = useState('');
  const [years, setYears] = useState('');
  const [ques, setQues] = useState('');
  const [load, setLoad] = useState(false);

  const [state, setState] = useState({
    haveYouVaccinated: '',
    positivePCR: '',
    last14DayTravel: '',
    countryName: '',
    healthcareWorker: '',
    fname: '',
    lname: '',
  });

  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const form4 = {...state};
  const finalForm = {...form1, ...form2, ...form3, ...form4};

  // const handleSubmit = () => {
  // SubmitData(finalForm, setLoad, navigation, formName);
  const handleSubmit = () => {
    console.log(state);
    const {
      haveYouVaccinated,
      positivePCR,
      last14DayTravel,
      countryName,
      healthcareWorker,
      fname,
      lname,
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
    SubmitData(finalForm, setLoad, navigation, formName);
    addImage(setImage, formName, insuranceCard, checkImage, image);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: vw - 40, alignSelf: 'center'}}>
        <DropDown
          state={state.haveYouVaccinated}
          setState={text => handleChange('haveYouVaccinated', text)}
          data={yn}
          label="Have you been vaccinated for COVID-19?"
          placeholder="Select you been vaccinated for COVID-19?"
        />
        <DropDown
          state={state.positivePCR}
          setState={text => handleChange('positivePCR', text)}
          data={pcrCheck}
          label="Have you had a POSITIVE COVID PCR or Molecular Test (NOT Antigen) within the past 10 days? "
          placeholder="Select you had a POSITIVE COVID PCR"
        />
        <DropDown
          state={state.last14DayTravel}
          setState={text => handleChange('last14DayTravel', text)}
          data={yn}
          label="Within the last 14 days, Have you traveled Internationally?"
          placeholder="Select last 14 days, Have you traveled Internationally?"
        />
        <FormInput
          state={state.countryName}
          setState={text => handleChange('countryName', text)}
          placeholder="Enter country name"
          label="If Yes, Where?"
        />

        <DropDown
          state={state.healthcareWorker}
          setState={text => handleChange('healthcareWorker', text)}
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
          <FormInput
            state={state.fname}
            setState={text => handleChange('fname', text)}
            placeholder="First Name"
            multiple={true}
          />
          <FormInput
            state={state.lname}
            setState={text => handleChange('lname', text)}
            placeholder="Last Name"
            multiple={true}
          />
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
          {load ? (
            <ActivityIndicator color={'#FA284D'} size={'large'} />
          ) : (
            <RedLongButton
              onPress={handleSubmit}
              buttonText="Book an Appointment"
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default Form4;
