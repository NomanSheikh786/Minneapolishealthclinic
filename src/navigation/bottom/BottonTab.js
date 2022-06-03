// import bottom1 from '../../assets/bottom1';
import React from 'react';
import bottom1 from '../../assets/bottom1.png';
import bottom2 from '../../assets/bottom2.png';
import bottom2active from '../../assets/bottom2active.png';

import bottom3 from '../../assets/bottom3.png';
import bottom4 from '../../assets/bottom4.png';
import bottom5 from '../../assets/bottom5.png';
import bottom_home from '../../assets/bottom_home.png';
import {
  HomeStack,
  CalenderStack,
  ChatStack,
  NotificationStack,
  ProfileStack,
} from '../stack/Appstack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FormScreen from '../../container/app/FormScreen';
import primaryCaseForm2 from '../../component/primaryCaseForm/Form2';
import primaryCaseForm3 from '../../component/primaryCaseForm/Form3';
import MedicalForm2 from '../../component/MedicalForm/Form2';
import MedicalForm3 from '../../component/MedicalForm/Form3';
import MedicalForm4 from '../../component/MedicalForm/Form4';
import MedicalForm5 from '../../component/MedicalForm/Form5';
import MedicalForm6 from '../../component/MedicalForm/Form6';

import CovidTestForm2 from '../../component/covidTestForm/Form2';
import CovidTestForm3 from '../../component/covidTestForm/Form3';
import CovidTestForm4 from '../../component/covidTestForm/Form4';

import CovidTreatForm2 from '../../component/covidTreatForm/Form2';
import CovidTreatForm3 from '../../component/covidTreatForm/Form3';

import CovidVaccineForm2 from '../../component/covidVaccineForm/Form2';
import CovidVaccineForm3 from '../../component/covidVaccineForm/Form3';
import CovidVaccineForm4 from '../../component/covidVaccineForm/Form4';
import CovidVaccineForm5 from '../../component/covidVaccineForm/Form5';

import ImmigrationForm2 from '../../component/ImmigrationForm/Form2';
import ImmigrationForm3 from '../../component/ImmigrationForm/Form3';

import LipocelAppointmentForm2 from '../../component/LipocelAppointmentForm/Form2';

import PreOpForm2 from '../../component/preOpForm/Form2';
import PreOpForm3 from '../../component/preOpForm/Form3';

import FormSubmit from '../../component/FormSubmit';

function Tab() {
  const Tab = createBottomTabNavigator();

  const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        top: -15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
      }}
      onPress={onPress}>
      <View
        style={{
          width: 62,
          height: 62,
          borderRadius: 35,
          backgroundColor: '#FE284D',
          elevation: 2,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 2,
          backgroundColor: '#FFF',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 70,
        },
      }}
      // tabBarOptions={{
      //   showLabel: false,
      // }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Image width={20} source={bottom_home} />
            ) : (
              <Image width={20} source={bottom1} />
            ),
        }}
      />

      <Tab.Screen
        name="CalenderStack"
        component={CalenderStack}
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <View
                style={{
                  backgroundColor: '#FE284D',
                  borderRadius: 6,
                  width: 38,
                  height: 38,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image width={20} source={bottom2active} />
              </View>
            ) : (
              <Image width={20} source={bottom2} />
            ),
        }}
      />

      <Tab.Screen
        name="ChatStack"
        component={ChatStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image width={20} source={bottom3} resizeMode="contain" />
          ),

          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="NotificationStack"
        component={NotificationStack}
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Image width={20} source={bottom_home} />
            ) : (
              <Image width={20} source={bottom4} />
            ),
        }}
      />

      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Image width={20} source={bottom_home} />
            ) : (
              <Image width={20} source={bottom5} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const BottomNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={Tab} options={{headerShown: false}} />
      {/* //Main Form Screen */}
      <Stack.Screen
        name="FormScreen"
        component={FormScreen}
        options={{headerShown: false}}
      />
      {/* // Primary Form */}
      <Stack.Screen
        name="PrimaryForm2"
        component={primaryCaseForm2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrimaryForm3"
        component={primaryCaseForm3}
        options={{headerShown: false}}
      />
      {/* //Medical Form */}
      <Stack.Screen
        name="MedicalForm2"
        component={MedicalForm2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MedicalForm3"
        component={MedicalForm3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MedicalForm4"
        component={MedicalForm4}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MedicalForm5"
        component={MedicalForm5}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MedicalForm6"
        component={MedicalForm6}
        options={{headerShown: false}}
      />
      {/* //Covid Test Form */}

      <Stack.Screen
        name="CovidTestForm2"
        component={CovidTestForm2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CovidTestForm3"
        component={CovidTestForm3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CovidTestForm4"
        component={CovidTestForm4}
        options={{headerShown: false}}
      />

      {/* //Covid Treat Form */}

      <Stack.Screen
        name="CovidTreatForm2"
        component={CovidTreatForm2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CovidTreatForm3"
        component={CovidTreatForm3}
        options={{headerShown: false}}
      />

      {/* Covid Vaccine Form */}

      <Stack.Screen
        name="CovidVaccineForm2"
        component={CovidVaccineForm2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CovidVaccineForm3"
        component={CovidVaccineForm3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CovidVaccineForm4"
        component={CovidVaccineForm4}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CovidVaccineForm5"
        component={CovidVaccineForm5}
        options={{headerShown: false}}
      />

      {/* Immigration Form  */}

      <Stack.Screen
        name="ImmigrationForm2"
        component={ImmigrationForm2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ImmigrationForm3"
        component={ImmigrationForm3}
        options={{headerShown: false}}
      />

      {/* Lipocel Appointment Form */}

      <Stack.Screen
        name="LipocelAppointmentForm2"
        component={LipocelAppointmentForm2}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="PreOpForm2"
        component={PreOpForm2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PreOpForm3"
        component={PreOpForm3}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="FormSubmit"
        component={FormSubmit}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default BottomNavigation;
