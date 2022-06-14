// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
//   Image,
// } from 'react-native';
// import {
//   CheckIcon,
//   FormControl,
//   HStack,
//   Select,
//   VStack,
//   WarningOutlineIcon,
//   View,
//   Text,
//   Checkbox,
// } from 'native-base';
// import {vh, vw} from '../../constaint';
// import RedLongButton from '../RedLongButton';
// import DropDown from '../DropDown';
// import {
//   internalMedicane,
//   exerciseDays,
//   dietFollow,
//   alcoholCheck,
//   smokeCheck,
//   caffeineCheck,
// } from '../FormData';
// import {FormInput, CheckBox} from '../FormInput';
// import file from '../../assets/selectFile.png';
// import sign from '../../assets/sign.png';

// function Form3({navigation}) {
//   const [genders, setGenders] = useState('');
//   const [days, setDays] = useState('');
//   const [months, setMonths] = useState('');
//   const [years, setYears] = useState('');
//   const [ques, setQues] = useState('');

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         style={{width: vw - 40, alignSelf: 'center'}}>
//         <View style={{marginTop: 20}}>
//           <Text style={{fontSize: 20, color: '#000', fontWeight: '500'}}>
//             LifeStyle Habits
//           </Text>
//         </View>
//         <DropDown
//           state={genders}
//           setState={setGenders}
//           data={exerciseDays}
//           label="Exercise"
//           placeholder="Select Your Exercise"
//         />
//         <DropDown
//           state={genders}
//           setState={setGenders}
//           data={dietFollow}
//           label="Any particular diet you follow?"
//           placeholder="Select Your particular diet you follow"
//         />
//         <DropDown
//           state={genders}
//           setState={setGenders}
//           data={alcoholCheck}
//           label="Alcohol Consumption"
//           placeholder="Select Your Alcohol Consumption"
//         />
//         <DropDown
//           state={genders}
//           setState={setGenders}
//           data={smokeCheck}
//           label="Do you Smoke?"
//           placeholder="Select Do you Smoke?"
//         />
//         <DropDown
//           state={genders}
//           setState={setGenders}
//           data={caffeineCheck}
//           label="Caffeine Consumption"
//           placeholder="Select Your Caffeine Consumption"
//         />
//         <View style={{marginVertical: 5}}>
//           <Text
//             style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
//             mt={5}
//             my={2}>
//             Please upload a photo of your insurance card here:
//           </Text>
//           <View
//             style={{
//               borderWidth: 1,
//               borderColor: '#B2BAC6',
//               borderRadius: 8,
//               height: 150,
//               alignItems: 'center',
//               justifyContent: 'space-evenly',
//               paddingVertical: 5,
//             }}>
//             <Image source={file} resizeMode="contain" />
//             <Text style={{fontWeight: '500'}}>
//               Drag your documents and photos
//             </Text>
//             <Text style={{color: '#5E6F88', fontSize: 12}}>
//               Support PDF, JPEG, PNG
//             </Text>
//             <TouchableOpacity
//               style={{
//                 backgroundColor: '#28B1FE',
//                 borderRadius: 8,
//                 paddingVertical: 5,
//                 paddingHorizontal: 15,
//               }}>
//               <Text style={{color: '#FFF', fontSize: 12}}>Browse File</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <FormInput
//           multiline={true}
//           height={150}
//           numberOfLines={10}
//           placeholder="Type Your Medical History"
//           textAlignVertical={'top'}
//           label="Include other comments regarding your Medical History"
//         />
//         <View style={{marginVertical: 5}}>
//           <Text
//             style={{color: 'black', fontSize: 18, fontWeight: '500'}}
//             mt={5}
//             my={2}>
//             By signing below,
//           </Text>
//           <Text style={{color: '#5E6F88', fontSize: 12, lineHeight: 20}}>
//             My signature below confirms that I assume financial responsibility
//             of the services received from Minneapolis Health Clinic and
//             understand that it is my responsibility to understand my insurance
//             benefits (if applicable). Minneapolis Health Clinic is not
//             responsible for checking these benefits for me. A complete financial
//             agreement will be included in my intake paperwork at the time of my
//             appointment.
//           </Text>
//         </View>
//         <View
//           style={{
//             borderWidth: 1,
//             borderColor: '#B2BAC6',
//             borderRadius: 8,
//             height: 150,
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginVertical: 20,
//             flexDirection: 'row',
//           }}>
//           <Image source={sign} resizeMode="contain" />
//           <Text style={{color: '#B2BAC6', fontSize: 14, paddingLeft: 10}}>
//             Sign Here
//           </Text>
//         </View>
//         <View
//           style={{
//             marginVertical: 20,
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//           }}>
//           <CheckBox text="Save Signature" checkboxValue={'Signature'} />
//           <TouchableOpacity
//             style={{
//               backgroundColor: '#FE284D',
//               borderRadius: 8,
//               paddingVertical: 5,
//               paddingHorizontal: 15,
//             }}>
//             <Text style={{color: '#FFF', fontSize: 12}}>Clear</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={{marginVertical: 20}}>
//           <RedLongButton
//             onPress={() => {
//               // navigation.navigate('FormSubmit', {
//               //   title: 'Thank You!',
//               //   text: 'Your submission has been received',
//               // });
//               console.log('Pro-Op Form Submit');
//             }}
//             buttonText="Submit"
//           />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {flex: 1, backgroundColor: '#FFF'},
// });

// export default Form3;

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
} from '../FormData';
import {FormInput, CheckBox} from '../FormInput';
import file from '../../assets/selectFile.png';
import sign from '../../assets/sign.png';
import {SubmitData} from '../../configue/FirebaseSubmitForm';

function Form3({navigation, route}) {
  const {form1, form2, formName} = route.params;

  const [genders, setGenders] = useState('');
  const [days, setDays] = useState('');
  const [months, setMonths] = useState('');
  const [years, setYears] = useState('');
  const [ques, setQues] = useState('');
  const [load, setLoad] = useState(false);

  const [state, setState] = useState({
    exercise: '',
    diet: '',
    alcohol: '',
    smoke: '',
    caffeine: '',
    medicalHistory: '',
  });

  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const form3 = {...state};
  const finalForm = {...form1, ...form2, ...form3};
  const handleSubmit = () => {
    const {exercise, diet, alcohol, smoke, caffeine, medicalHistory} = state;

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
    SubmitData(finalForm, setLoad, navigation, formName);
    // }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: vw - 40, alignSelf: 'center'}}>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 20, color: '#000', fontWeight: '500'}}>
            LifeStyle Habits
          </Text>
        </View>
        <DropDown
          state={state.exercise}
          setState={text => handleChange('exercise', text)}
          data={exerciseDays}
          label="Exercise"
          placeholder="Select Your Exercise"
        />
        <DropDown
          state={state.diet}
          setState={text => handleChange('diet', text)}
          data={dietFollow}
          label="Any particular diet you follow?"
          placeholder="Select Your particular diet you follow"
        />
        <DropDown
          state={state.alcohol}
          setState={text => handleChange('alcohol', text)}
          data={alcoholCheck}
          label="Alcohol Consumption"
          placeholder="Select Your Alcohol Consumption"
        />
        <DropDown
          state={state.smoke}
          setState={text => handleChange('smoke', text)}
          data={smokeCheck}
          label="Do you Smoke?"
          placeholder="Select Do you Smoke?"
        />
        <DropDown
          state={state.caffeine}
          setState={text => handleChange('caffeine', text)}
          data={caffeineCheck}
          label="Caffeine Consumption"
          placeholder="Select Your Caffeine Consumption"
        />
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
        </View>

        <FormInput
          state={state.medicalHistory}
          setState={text => handleChange('medicalHistory', text)}
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type Your Medical History"
          textAlignVertical={'top'}
          label="Include other comments regarding your Medical History"
        />
        <View style={{marginVertical: 5}}>
          <Text
            style={{color: 'black', fontSize: 18, fontWeight: '500'}}
            mt={5}
            my={2}>
            By signing below,
          </Text>
          <Text style={{color: '#5E6F88', fontSize: 12, lineHeight: 20}}>
            My signature below confirms that I assume financial responsibility
            of the services received from Minneapolis Health Clinic and
            understand that it is my responsibility to understand my insurance
            benefits (if applicable). Minneapolis Health Clinic is not
            responsible for checking these benefits for me. A complete financial
            agreement will be included in my intake paperwork at the time of my
            appointment.
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

        <View style={{marginVertical: 20}}>
          {load ? (
            <ActivityIndicator color={'#FA284D'} size={'large'} />
          ) : (
            <RedLongButton onPress={handleSubmit} buttonText="Submit" />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default Form3;
