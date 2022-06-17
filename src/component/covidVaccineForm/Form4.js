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
  month,
  day,
  year,
} from '../FormData';
import {FormInput, CheckBox} from '../FormInput';
import file from '../../assets/selectFile.png';
import sign from '../../assets/sign.png';
import {launchImageLibrary} from 'react-native-image-picker';

function Form4({navigation, route}) {
  const {form1, form2, form3, formName} = route.params;

  const [genders, setGenders] = useState('');
  const [days, setDays] = useState('');
  const [months, setMonths] = useState('');
  const [years, setYears] = useState('');
  const [ques, setQues] = useState('');
  const [image, setImage] = useState('');

  // const [state, setState] = useState({
  //   fname: '',
  //   lname: '',
  // });

  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  // const form4 = {...state};

  const handleImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      // includeBase64: true,
    });

    if (result.assets) {
      setImage(result.assets[0].uri);
    } else {
      console.log('No Image');
    }
  };
  const handleContinue = () => {
    // const {fname, lname} = state;

    // if (
    // !exercise||
    // !diet||
    // !alcohol||
    // !smoke||
    // ! caffeine||
    // !medicalHistory
    // ) {
    //   alert('complete all fields');
    // } else {
    navigation.navigate('CovidVaccineForm5', {
      form1: form1,
      form2: form2,
      form3: form3,
      // form4: form4,
      formName: formName,
      setImage: setImage,
      insuranceCard: 'insurance-card-image',
      checkImage: true,
      image: image,
    });
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: vw - 40, alignSelf: 'center'}}>
        {/* <View style={{marginTop: 20}}>
          <Text style={{fontSize: 20, color: '#000', fontWeight: '500'}}>
            Health and Lifestyle Evaluation
          </Text>
        </View> */}

        <View style={{marginVertical: 20}}>
          <Text
            style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
            mt={5}
            my={2}>
            Please upload a photo of your Insurance Card here
          </Text>

          {image == '' ? (
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
                onPress={handleImage}
                style={{
                  backgroundColor: '#28B1FE',
                  borderRadius: 8,
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                }}>
                <Text style={{color: '#FFF', fontSize: 12}}>Browse File</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={handleImage}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={{uri: image}}
                resizeMode="contain"
                style={{
                  width: vw / 1.3,

                  borderRadius: 8,
                  height: vh / 4.5,
                }}
              />
            </TouchableOpacity>
          )}
        </View>

        <View>
          <CheckBox
            text="I do not have Insurance Card"
            checkboxValue={'I do not have Insurance Card'}
          />
        </View>

        <View style={{marginTop: 5}}>
          <Text
            style={{color: 'black', fontSize: 18, fontWeight: '500'}}
            mt={5}
            my={2}>
            Consent
          </Text>
          <Text style={{color: '#5E6F88', fontSize: 12, lineHeight: 20}}>
            <Text style={{color: '#FE284D'}}>●</Text> I certify that I am: (a)
            the patient or the guardian of the patient and I am at least 18
            years of age; (b) the parent or legal guardian of the patient and
            confirm that the patient is at least 6 months or above; or (c)
            authorized to consent for vaccination for the patient named above.
            Further, I hereby give my consent to Minneapolis Health Clinic PLLC
            or its associates to administer the COVID-19 vaccine.{'\n'}
            {'\n'}
            <Text style={{color: '#FE284D'}}>●</Text> I understand that this
            product has not been approved or licensed by FDA, but has been
            authorized for emergency use by FDA, under an EUA to prevent
            Coronavirus Disease 2019 (COVID-19) for use in individuals 12 years
            and years and older; and the emergency use of this product is only
            authorized for the duration of the declaration that circumstances
            exist justifying the authorization of emergency use of the medical
            product under Section 564(b)(1) of the FD&C Act unless the
            declaration is terminated or authorization revoked sooner.
            {'\n'} {'\n'}
            <Text style={{color: '#FE284D'}}>●</Text> I understand that it is
            not possible to predict all possible side effects or complications
            associated with receiving vaccine(s). I understand the risks and
            benefits associated with the above vaccine and have received, read
            and/or had explained to me the Emergency Use Authorization Fact
            Sheet on the COVID-19 vaccine I have elected to receive. I also
            acknowledge that I have had a chance to ask questions and that such
            questions were answered to my satisfaction.
            {'\n'} {'\n'}
            <Text style={{color: '#FE284D'}}>●</Text> I acknowledge that I have
            been advised to remain near the vaccination location for
            approximately 15 minutes after administration for observation; and
            for 30 minutes if I have a history of anaphylaxis from any cause. If
            I experience a severe reaction, I will call 9-1-1 or go to the
            nearest hospital.
            {'\n'} {'\n'}
            <Text style={{color: '#FE284D'}}>●</Text> On behalf of myself, my
            heirs and personal representatives, I hereby release and hold
            harmless Minneapolis Health Clinic, and their staff, associates,
            successors, divisions, affiliates, subsidiaries, officers,
            directors, contractors and employees from any and all liabilities or
            claims whether known or unknown arising out of, in connection with,
            or in any way related to the administration of the vaccine listed
            above.
            {'\n'} {'\n'}
            <Text style={{color: '#FE284D'}}>●</Text> I acknowledge that: (a) I
            understand the purposes/benefits of MN-Health Information Exchange,
            Minnesota immunization registry and (b) will include my personal
            immunization information in MN-HIE and my personal immunization
            information will be shared with the Centers for Disease Control
            (CDC) or other federal agencies.
            {'\n'} {'\n'}I acknowledge receipt of the Notice of Privacy Rights.
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            width: '100%',
          }}>
          <Text style={{fontWeight: '500'}}>
            By signing, I have completed this form to the best of my knowledge
            and consent to the agreement as written and receipt of vaccine.
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            width: '100%',
          }}>
          <Text style={{fontWeight: '500'}}>
            Signature of Patient or Authorized Representative
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
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <Image source={sign} resizeMode="contain" />
          <Text style={{color: '#B2BAC6', fontSize: 14, paddingLeft: 10}}>
            Sign Here
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
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
              paddingHorizontal: 15,
            }}>
            <Text style={{color: '#FFF', fontSize: 12}}>Clear</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: 5}}>
          <Text
            style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
            mt={5}
            my={2}>
            Print Name (If someone other than patient to receive vaccine)
          </Text>

          {/* <FormInput
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
          /> */}
        </View>
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

export default Form4;
