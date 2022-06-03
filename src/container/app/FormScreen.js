import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import PrimaryForm1 from '../../component/primaryCaseForm/Form1';
import MedicalForm1 from '../../component/MedicalForm/Form1';
import CovidTestForm1 from '../../component/covidTestForm/Form1';
import CovidTreatForm1 from '../../component/covidTreatForm/Form1';
import CovidVaccineForm1 from '../../component/covidVaccineForm/Form1';
import ImmigrationForm1 from '../../component/ImmigrationForm/Form1';
import PreOpForm1 from '../../component/preOpForm/Form1';
import LipocelAppointmentForm1 from '../../component/LipocelAppointmentForm/Form1';

function FormScreen({navigation, route}) {
  const {state} = route.params;
  console.log(state.name);
  return (
    <>
      {state.name == 'Medical Tourism' ||
      state.name == 'Primary Care' ||
      state.name == 'Aesthetic Services' ? (
        <PrimaryForm1 navigation={navigation} />
      ) : state.name == 'Medical Weight Loss' ? (
        <MedicalForm1 navigation={navigation} />
      ) : state.name == 'Covid-19 Testing' ? (
        <CovidTestForm1 navigation={navigation} />
      ) : state.name == 'Covid-19 Treatment' ? (
        <CovidTreatForm1 navigation={navigation} />
      ) : state.name == 'Covid-19 Vaccine Form' ? (
        <CovidVaccineForm1 navigation={navigation} />
      ) : state.name == 'Immigration Exams & Forms' ? (
        <ImmigrationForm1 navigation={navigation} />
      ) : state.name == 'Lipocel Appointment' ? (
        <LipocelAppointmentForm1 navigation={navigation} />
      ) : state.name == 'Pre-Op Evaluations' ? (
        <PreOpForm1 navigation={navigation} />
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormScreen;
