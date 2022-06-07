import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../../container/app/HomeScreen';
import PrimaryScreen from '../../container/app/PrimaryScreen';
import DoctorListingScreen from '../../container/app/DoctorListingScreen';
import NotificationScreen from '../../container/app/NotificationScreen';
import ProfileScreen from '../../container/app/ProfileScreen';
import FormScreen from '../../container/app/FormScreen';
import DoctorListingDetailsScreen from '../../container/app/DoctorListingDetailsScreen';
import AppointmentScreen from '../../container/app/AppointmentScreen';
import AppointmentListScreen from '../../container/app/AppointmentListScreen';
import AppointmentHIstoryDetails from '../../container/app/AppointemenList/AppointmentHIstoryDet';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrimaryScreen"
        component={PrimaryScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const DoctorListingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DoctorListingScreen"
        component={DoctorListingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DoctorListingDetailsScreen"
        component={DoctorListingDetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AppointmentStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AppointmentScreen"
        component={AppointmentScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="AppointmentListScreen"
        component={AppointmentListScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="AppointmentHistoryDetails"
        component={AppointmentHIstoryDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const NotificationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export {
  HomeStack,
  DoctorListingStack,
  AppointmentStack,
  NotificationStack,
  ProfileStack,
};
