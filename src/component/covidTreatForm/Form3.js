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
          <Text style={{fontSize: 20, color: '#000', fontWeight: '500'}}>
            Health and Lifestyle Evaluation
          </Text>
        </View>
        <DropDown
          state={genders}
          setState={setGenders}
          data={exerciseDays}
          label="Exercise"
          placeholder="Select Your Exercise"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={alcoholCheck}
          label="Alcohol Consumption"
          placeholder="Select Your Alcohol Consumption"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={dietFollow}
          label="Diet"
          placeholder="Select Your particular diet you follow"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={caffeineCheck}
          label="Caffeine Consumption"
          placeholder="Select Your Caffeine Consumption"
        />
        <DropDown
          state={genders}
          setState={setGenders}
          data={smokeCheck}
          label="Tobacco Use"
          placeholder="Select Tobacco Use"
        />

        <View style={{marginTop: 5}}>
          <Text
            style={{color: 'black', fontSize: 18, fontWeight: '500'}}
            mt={5}
            my={2}>
            By signing below,
          </Text>
          <Text style={{color: '#5E6F88', fontSize: 12, lineHeight: 20}}>
            My signature below confirms that I understand it is my
            responsibility to know my heath insurance coverage prior to my
            appointment, and if I have questions about my coverage, I must call
            my insurance company prior to my appointment with Minneapolis Health
            Clinic. If there is a remaining balance after the claim has been
            processed through my insurance, I assume financial responsibility of
            the services received from Minneapolis Health Clinic and will pay my
            medical bill in a timely manner. If any payment is needed at the
            time of my visit, I understand it will be needed at the time of my
            arrival.
          </Text>
        </View>
        <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type Here"
          textAlignVertical={'top'}
          label=""
        />

        <FormInput
          placeholder="Type Insurance Company Name"
          label="Insurance Company Name"
        />
        <FormInput
          placeholder="Type Insurance ID Number"
          label="Insurance ID Number"
        />
        <FormInput placeholder="Type Group Number" label="Group Number" />
        <View style={{marginVertical: 5}}>
          <Text
            style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
            mt={5}
            my={2}>
            Please upload a photo of your insurance card here:
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

          <View style={{marginTop: 5}}>
            <Text
              style={{color: 'black', fontSize: 18, fontWeight: '500'}}
              mt={5}
              my={2}>
              Consent for Bebtelovimab Infusion
            </Text>
            <Text style={{color: '#5E6F88', fontSize: 12, lineHeight: 20}}>
              <Text style={{color: '#FE284D'}}>●</Text> Bebtelovimab is
              emergently authorized by the FDA for the treatment of some cases
              of mild to moderate COVID-19 and more information about its
              effectiveness and safety is needed before it is fully registered;
              there are no guarantees of the effectiveness of Bebtelovimab when
              it is used to treat COVID-19 and I/the person I am responsible for
              may not experience any benefit; there are no guarantees of the
              safety of bebtelovimab when it is used to treat COVID-19 and even
              with careful precautions in place, unforeseen complications may
              occur; there is potential for medicine interactions (known and
              unknown) with the use of bebtelovimab; and, there is a possibility
              of experiencing side effects with the use of bebtelovimab (known
              and unknown). {'\n'} {'\n'}
              <Text style={{color: '#FE284D'}}>●</Text> I confirm that I have
              had the opportunity to ask questions and I am satisfied with the
              explanation and the answers to my questions.
              {'\n'} {'\n'}
              <Text style={{color: '#FE284D'}}>●</Text> I understand that I can
              change my mind and withdraw my consent to being treated with
              bebtelovimab at any time. With this knowledge, I consent to the
              use of bebtelovimab in the treatment of me/the person I am
              responsible for.
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{color: 'black', fontSize: 18, fontWeight: '500'}}
            mt={5}
            my={2}>
            Signature
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#B2BAC6',
              borderRadius: 8,
              height: 150,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 5,
              flexDirection: 'row',
            }}>
            <Image source={sign} resizeMode="contain" />
            <Text style={{color: '#B2BAC6', fontSize: 14, paddingLeft: 10}}>
              Sign Here
            </Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: 20,
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
        <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type Here"
          textAlignVertical={'top'}
          label="If person signing is not the patient, state 
          the relationship, your age and reason for representation"
        />
        <View style={{marginVertical: 20}}>
          <RedLongButton
            onPress={() => {
              console.log('Covid Treat Submit');
            }}
            buttonText="Submit"
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
