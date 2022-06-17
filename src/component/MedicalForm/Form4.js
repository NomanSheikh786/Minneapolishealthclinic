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

function Form4({navigation, route}) {
  const {form1, form2, form3, formName} = route.params;

  const [genders, setGenders] = useState('');
  const [days, setDays] = useState('');
  const [months, setMonths] = useState('');
  const [years, setYears] = useState('');
  const [ques, setQues] = useState('');
  const [state, setState] = useState({
    drinkAlcohlic: '',
    howManyPerWeek: '',
    doYouSmoke: '',
    UseRecreational: '',
    appetite: '',
    mealsPerDay: '',
    mealAndSnack: '',
    normallyDrink: '',
    listBeverages: '',
    pastStruggle: '',
    dietAndExercise: '',
    typeOfDietAndExercise: '',
    hasNotWorked: '',
  });

  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const form4 = {...state};

  const handleContinue = () => {
    console.log(state);
    const {
      drinkAlcohlic,
      howManyPerWeek,
      doYouSmoke,
      UseRecreational,
      appetite,
      mealsPerDay,
      mealAndSnack,
      normallyDrink,
      listBeverages,
      pastStruggle,
      dietAndExercise,
      typeOfDietAndExercise,
      hasNotWorked,
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
    navigation.navigate('MedicalForm5', {
      form1: form1,
      form2: form2,
      form3: form3,
      form4: form4,
      formName: formName,
    });
  };
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
          state={state.drinkAlcohlic}
          setState={text => handleChange('drinkAlcohlic', text)}
          placeholder="Type Do you regularly drink alcoholic beverages?"
          label="Do you regularly drink alcoholic beverages?"
        />
        <FormInput
          state={state.howManyPerWeek}
          setState={text => handleChange('howManyPerWeek', text)}
          placeholder="Type If yes, how many per week?"
          label="If yes, how many per week?"
        />
        <FormInput
          state={state.doYouSmoke}
          setState={text => handleChange('doYouSmoke', text)}
          placeholder="Type Do you smoke tobacco?"
          label="Do you smoke tobacco?"
        />
        <FormInput
          state={state.UseRecreational}
          setState={text => handleChange('UseRecreational', text)}
          placeholder="Type Do you use recreational drugs?"
          label="Do you use recreational drugs?"
        />
        <FormInput
          state={state.appetite}
          setState={text => handleChange('appetite', text)}
          placeholder="Type How is your appetite?"
          label="How is your appetite?"
        />
        <FormInput
          state={state.mealsPerDay}
          setState={text => handleChange('mealsPerDay', text)}
          placeholder="Type How many meals per day do you eat?"
          label="How many meals per day do you eat?"
        />
        <FormInput
          state={state.mealAndSnack}
          setState={text => handleChange('mealAndSnack', text)}
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="What is a typical day, in term of food intake? Please list all meals and snacks."
        />
        <FormInput
          state={state.normallyDrink}
          setState={text => handleChange('normallyDrink', text)}
          placeholder="Type How much fluids do you normally drink?"
          label="How much fluids do you normally drink? Please approximate in ounces."
        />
        <FormInput
          state={state.listBeverages}
          setState={text => handleChange('listBeverages', text)}
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="Please list all types of beverages you regularly drink."
        />
        <FormInput
          state={state.pastStruggle}
          setState={text => handleChange('pastStruggle', text)}
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="What past struggles and diffculties have you experienced in terms of food and dieting?"
        />
        <FormInput
          state={state.dietAndExercise}
          setState={text => handleChange('dietAndExercise', text)}
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="What diet and exercise programs, protocols, plans or approaches have you tried in the past?"
        />
        <FormInput
          state={state.typeOfDietAndExercise}
          setState={text => handleChange('typeOfDietAndExercise', text)}
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="What types of diet and exercise approaches have worked for you in the past?"
        />
        <FormInput
          state={state.hasNotWorked}
          setState={text => handleChange('hasNotWorked', text)}
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="And what hasn’t worked for you at all?"
        />
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
