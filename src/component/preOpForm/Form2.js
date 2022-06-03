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
  Checkbox,
} from 'native-base';
import {vh, vw} from '../../constaint/index';
import RedLongButton from '../RedLongButton';
import DropDown from '../DropDown';
import {internalMedicane} from '../FormData';
import {FormInput, CheckBox} from '../FormInput';

function Form2({navigation}) {
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
        />

        <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type here"
          textAlignVertical={'top'}
          label="Primary Care Physician and Clinic Name"
        />

        <View style={{marginVertical: 5}}>
          <Text
            style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
            mt={5}
            my={2}>
            What services are you interested in?
          </Text>
          <CheckBox
            text="Internal Medicine Consultation"
            checkboxValue={'Internal Medicine Consultation'}
          />
          <CheckBox text="Establish Care" checkboxValue={'Establish Care'} />
          <CheckBox
            text="Immigration Exam"
            checkboxValue={'Immigration Exam'}
          />
          <CheckBox text="IV Infusion" checkboxValue={'IV Infusion'} />

          <CheckBox
            text="Weight Loss Consultation"
            checkboxValue={'Weight Loss Consultation'}
          />

          <CheckBox
            text="Lipocel Body Contouring"
            checkboxValue={'Lipocel Body Contouring'}
          />
          <CheckBox
            text="Aesthetics- Botox, Dysport, Fillers "
            checkboxValue={'Aesthetics- Botox'}
          />
          <CheckBox text="Sexual Health" checkboxValue={'Sexual Health'} />
          <CheckBox
            text="Preoperative Evaluations "
            checkboxValue={'Preoperative Evaluations '}
          />
          <CheckBox
            text="Medical Marijuana Certification for chronic pain  and other indicated conditions  "
            checkboxValue={' Medical Marijuana Certification '}
          />
          <CheckBox
            text="Hormone Replacement Therapy"
            checkboxValue={'Hormone Replacement Therapy'}
          />
          <CheckBox text="Others" checkboxValue={'Others'} />
        </View>

        <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder=""
          textAlignVertical={'top'}
          label=""
          multiple={true}
        />
        <View style={{marginVertical: 5}}>
          <Text
            style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
            mt={5}
            my={2}>
            Have you ever had (Please check all that apply)
          </Text>
          <CheckBox text="Anemia" checkboxValue={'Anemia'} />
          <CheckBox text="ADD/ADHD" checkboxValue={'ADD/ADHD'} />
          <CheckBox text="Anxiety" checkboxValue={'Anxiety'} />
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

          <CheckBox text="Lung Disease" checkboxValue={'Lung Disease'} />
          <CheckBox text="Others" checkboxValue={'Others'} />
        </View>
        <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder=""
          textAlignVertical={'top'}
          label=""
          multiple={true}
        />
        <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Type Operations and Dates of each"
          textAlignVertical={'top'}
          label="Please list Operations and Dates of each"
        />
        <FormInput
          multiline={true}
          height={150}
          numberOfLines={10}
          placeholder="Please list your current Medications"
          textAlignVertical={'top'}
          label="Type list your current Medications"
        />
        <View style={{marginVertical: 20}}>
          <RedLongButton
            onPress={() => {
              navigation.navigate('PreOpForm3');
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

export default Form2;
