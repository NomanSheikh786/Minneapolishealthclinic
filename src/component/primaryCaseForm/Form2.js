import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
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
  Center,
} from 'native-base';
import {vh, vw} from '../../constaint/index';
import RedLongButton from '../RedLongButton';
import DropDown from '../DropDown';
import {internalMedicane} from '../FormData';
import {FormInput, CheckBox} from '../FormInput';

function Form2({navigation, route}) {
  const {form1, formName} = route.params;
  const [state, setState] = useState({
    drug: '',
    clinicName: '',
    service: '',
    other1: '',
    other2: '',
    operationDate: '',
    currentMedication: '',
  });
  const [check, setCheck] = useState({
    Anemia: false,
    ADD: false,
    Anxiety: false,
    Asthma: false,
    Arthritis: false,
    Bipolar: false,
    Cancer: false,
    Gout: false,
    Diabetes: false,
    Depression: false,
    Epilepsy: false,
    Fainting: false,
    Emphysema: false,
    Gallstones: false,
    HeartAttack: false,
    RheumaticFever: false,
    BloodPressure: false,
    Digestive: false,
    Ulcerative: false,
    PepticUlcer: false,
    Hepatitis: false,
    KidneyDisease: false,
    LiverDisease: false,
    SleepApnea: false,
    CPAP: false,
    ThyroidProblems: false,
    Tuberculosis: false,
    VenerealDisease: false,
    Neurological: false,
    Bleeding: false,
    LungDisease: false,
  });

  // const [checking, setChecking] = useState({
  //   one: 'false',
  //   two: 'false',
  // });

  const [loading, setLoading] = useState(true);
  const [groupValues, setGroupValues] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleChecked = (name, value) => {
    setCheck({
      ...check,
      [name]: value,
    });
  };
  const form2 = {...state, ...check};
  // const items = {item: item, state: state, check: check};
  const handleContinue = () => {
    const {
      drug,
      clinicName,
      service,
      other1,
      other2,
      operationDate,
      currentMedication,
    } = state;
    // if (
    //   !drug ||
    //   !clinicName ||
    //   !service ||
    //   !other1 ||
    //   !other2 ||
    //   !operationDate ||
    //   !currentMedication
    // ) {
    //   alert('complete all fields');
    // } else {
    navigation.navigate('PrimaryForm3', {
      form1: form1,
      form2: form2,
      formName: formName,
    });
    // }
  };

  const checkboxData = [
    {
      value: check.Anemia,
      onchange: text => handleChecked('Anemia', text),
      text: 'Anemia',
    },
    {
      value: check.ADD,
      onchange: text => handleChecked('ADD', text),
      text: 'ADD/ADHD',
    },
    {
      value: check.Anxiety,
      onchange: text => handleChecked('Anxiety', text),
      text: 'Anxiety',
    },
    {
      value: check.Asthma,
      onchange: text => handleChecked('Asthma', text),
      text: 'Asthma',
    },
    {
      value: check.Arthritis,
      onchange: text => handleChecked('Arthritis', text),
      text: 'Arthritis',
    },
    {
      value: check.Bipolar,
      onchange: text => handleChecked('Bipolar', text),
      text: 'Bipolar Disorder',
    },
    {
      value: check.Cancer,
      onchange: text => handleChecked('Cancer', text),
      text: 'Cancer',
    },
    {
      value: check.Gout,
      onchange: text => handleChecked('Gout', text),
      text: 'Gout',
    },
    {
      value: check.Diabetes,
      onchange: text => handleChecked('Diabetes', text),
      text: 'Diabetes',
    },
    {
      value: check.Depression,
      onchange: text => handleChecked('Depression', text),
      text: 'Depression',
    },
    {
      value: check.Epilepsy,
      onchange: text => handleChecked('Epilepsy', text),
      text: 'Epilepsy Seizures',
    },
    {
      value: check.Fainting,
      onchange: text => handleChecked('Fainting', text),
      text: 'Fainting Spells',
    },
    {
      value: check.Emphysema,
      onchange: text => handleChecked('Emphysema', text),
      text: 'Emphysema',
    },
    {
      value: check.Gallstones,
      onchange: text => handleChecked('Gallstones', text),
      text: 'Gallstones',
    },
    {
      value: check.HeartAttack,
      onchange: text => handleChecked('HeartAttack', text),
      text: 'Heart Attack',
    },
    {
      value: check.RheumaticFever,
      onchange: text => handleChecked('RheumaticFever', text),
      text: 'Rheumatic Fever',
    },
    {
      value: check.BloodPressure,
      onchange: text => handleChecked('BloodPressure', text),
      text: 'High Blood Pressure',
    },
    {
      value: check.Digestive,
      onchange: text => handleChecked('Digestive', text),
      text: 'Digestive Problems',
    },
    {
      value: check.Ulcerative,
      onchange: text => handleChecked('Ulcerative', text),
      text: 'Ulcerative Colitis',
    },
    {
      value: check.PepticUlcer,
      onchange: text => handleChecked('PepticUlcer', text),
      text: 'Peptic Ulcer Disease',
    },
    {
      value: check.Hepatitis,
      onchange: text => handleChecked('Hepatitis', text),
      text: 'Hepatitis',
    },
    {
      value: check.KidneyDisease,
      onchange: text => handleChecked('KidneyDisease', text),
      text: 'Kidney Disease',
    },
    {
      value: check.LiverDisease,
      onchange: text => handleChecked('LiverDisease', text),
      text: 'Liver Disease',
    },
    {
      value: check.SleepApnea,
      onchange: text => handleChecked('SleepApnea', text),
      text: 'Sleep Apnea',
    },
    {
      value: check.CPAP,
      onchange: text => handleChecked('CPAP', text),
      text: 'Use a C-PAP machine',
    },
    {
      value: check.ThyroidProblems,
      onchange: text => handleChecked('ThyroidProblems', text),
      text: 'Thyroid Problems',
    },
    {
      value: check.Tuberculosis,
      onchange: text => handleChecked('Tuberculosis', text),
      text: 'Tuberculosis',
    },
    {
      value: check.VenerealDisease,
      onchange: text => handleChecked('VenerealDisease', text),
      text: 'Venereal Disease',
    },
    {
      value: check.Neurological,
      onchange: text => handleChecked('Neurological', text),
      text: 'Neurological Disorders',
    },
    {
      value: check.Bleeding,
      onchange: text => handleChecked('Bleeding', text),
      text: 'Bleeding Disorders',
    },
    {
      value: check.LungDisease,
      onchange: text => handleChecked('LungDisease', text),
      text: 'Lung Disease',
    },
  ];

  let dataa = [];
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator color={'#FE284D'} size={'large'} />
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{width: vw - 40, alignSelf: 'center'}}>
          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 20, color: '#000', fontWeight: '500'}}>
              Patient Medical History
            </Text>
          </View>
          <FormInput
            multiline={true}
            height={150}
            numberOfLines={10}
            placeholder="Type list any Drug Allergies"
            textAlignVertical={'top'}
            label="Please list any Drug Allergies"
            state={state.drug}
            setState={text => handleChange('drug', text)}
          />
          <FormInput
            placeholder="Type Your Primary Care"
            label="Primary Care Physician and Clinic Name"
            state={state.clinicName}
            setState={text => handleChange('clinicName', text)}
          />
          <DropDown
            data={internalMedicane}
            label="What services are you interested in?"
            placeholder="Select Your Serivce"
            state={state.service}
            setState={text => handleChange('service', text)}
          />
          <FormInput
            multiline={true}
            height={150}
            numberOfLines={10}
            placeholder="Others"
            textAlignVertical={'top'}
            label="Others"
            state={state.other1}
            setState={text => handleChange('other1', text)}
          />
          <View style={{marginVertical: 5}}>
            <Text
              style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
              mt={5}
              my={2}>
              Have you ever had (Please check all that apply)
            </Text>

            {/* <FlatList data={checkboxData} keyExtractor={(item,index) => index.toString()} renderItem={({item,index}) => {
  return (
    <CheckBox
    text={item.text}
    checkboxValue={item.text}
    state={item.value}
    setState={item.onchange}
    // key={index}
  />
  )
}} /> */}
            {checkboxData.map((item, index) => {
              return (
                <CheckBox
                  text={item.text}
                  checkboxValue={item.text}
                  state={item.value}
                  setState={item.onchange}
                  key={index}
                />
              );
            })}

            {/* <Checkbox.Group onChange={data => dataa.push(data)} value={dataa}>
              <Checkbox
                value={checking.one}
                // onChange={text => setChecking(text)}
                my={2}>
                ss
              </Checkbox>
              <Checkbox
                value={checking.two}
                // onChange={text => setChecking(text)}
                my={2}>
                ssa
              </Checkbox>
            </Checkbox.Group> */}
            {/* <CheckBox
            state={check.Anemia}
            setState={text => handleChecked('Anemia', text)}
            text="Anemia"
            checkboxValue={'Anemia'}
          />
          <CheckBox
            state={check.ADD}
            setState={text => handleChecked('ADD', text)}
            text="ADD/ADHD"
            checkboxValue={'ADD/ADHD'}
          /> */}
            {/* <CheckBox text="Anxiety" checkboxValue={'Anxiety'} />
          <CheckBox text="Asthma" checkboxValue={'Asthma'} />

          <CheckBox text="Arthritis" checkboxValue={'Arthritis'} />

          <CheckBox
            text="Bipolar Disorder"
            checkboxValue={'Bipolar Disorder'}
          />
          <CheckBox text="Cancer " checkboxValue={'Cancer'} />
          <CheckBox text="Gout" checkboxValue={'Gout'} />
          <CheckBox text="Diabetes " checkboxValue={'Diabetes'} />
          <CheckBox text="Depression  " checkboxValue={' Depression '} />
          <CheckBox
            text="Epilepsy Seizures"
            checkboxValue={' Epilepsy Seizures'}
          />
          <CheckBox text="Fainting Spells" checkboxValue={' Fainting Spells'} />
          <CheckBox text="Emphysema " checkboxValue={' Emphysema '} />
          <CheckBox text="Gallstones " checkboxValue={' Gallstones '} />

          <CheckBox text="Heart Attack" checkboxValue={' Heart Attack'} />
          <CheckBox text="Rheumatic Fever" checkboxValue={' Rheumatic Fever'} />
          <CheckBox
            text="High Blood Pressure"
            checkboxValue={'High Blood Pressure'}
          />
          <CheckBox
            text="Digestive Problems"
            checkboxValue={'Digestive Problems'}
          />
          <CheckBox
            text="Ulcerative Colitis"
            checkboxValue={'Ulcerative Colitis'}
          />
          <CheckBox
            text="Peptic Ulcer Disease"
            checkboxValue={'Peptic Ulcer Disease'}
          />
          <CheckBox text="Hepatitis" checkboxValue={'Hepatitis'} />
          <CheckBox text="Kidney Disease" checkboxValue={'Kidney Disease'} />
          <CheckBox text="Liver Disease" checkboxValue={'Liver Disease'} />
          <CheckBox text="Sleep Apnea" checkboxValue={'Sleep Apnea'} />
          <CheckBox
            text="Use a C-PAP machine"
            checkboxValue={'Use a C-PAP machine'}
          />
          <CheckBox
            text="Thyroid Problems"
            checkboxValue={'Thyroid Problems'}
          />
          <CheckBox text="Tuberculosis" checkboxValue={'Tuberculosis'} />
          <CheckBox
            text="Venereal Disease"
            checkboxValue={'Venereal Disease'}
          />
          <CheckBox
            text="Neurological Disorders"
            checkboxValue={'Neurological Disorders'}
          />
          <CheckBox
            text="Bleeding Disorders"
            checkboxValue={'Bleeding Disorders'}
          />
          <CheckBox text="Lung Disease" checkboxValue={'Lung Disease'} /> */}
          </View>
          <FormInput
            multiline={true}
            height={150}
            numberOfLines={10}
            placeholder="Others"
            textAlignVertical={'top'}
            label="Others"
            state={state.other2}
            setState={text => handleChange('other2', text)}
          />
          <FormInput
            multiline={true}
            height={150}
            numberOfLines={10}
            placeholder="Please list Operations and Dates of each"
            textAlignVertical={'top'}
            label="Type list Operations and Dates of each"
            state={state.operationDate}
            setState={text => handleChange('operationDate', text)}
          />
          <FormInput
            multiline={true}
            height={150}
            numberOfLines={10}
            placeholder="Please list your current Medications"
            textAlignVertical={'top'}
            label="Type list your current Medications"
            state={state.currentMedication}
            setState={text => handleChange('currentMedication', text)}
          />
          <View style={{marginVertical: 20}}>
            <RedLongButton
              onPress={handleContinue}
              buttonText="Save and Continue"
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default Form2;
