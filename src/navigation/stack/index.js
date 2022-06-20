import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from '../stack/Authstack';
import {HomeStack} from '../stack/Appstack';
import 'react-native-gesture-handler';
import firebase from 'firebase';
import BottomNavigation from '../bottom/BottonTab';
import DoctorHomeScreen from '../../container/Doctor/DoctorHomeScreen';
import DoctorUserFormScreen from '../../container/Doctor/DoctorUserFormScreen';
import {createStackNavigator} from '@react-navigation/stack';
import AppointmentScreen from '../../container/Doctor/AppointmentScreen';
import AppointmentListScreen from '../../container/Doctor/AppointmentListScreen';
import AppointmentHIstoryDetails from '../../container/Doctor/AppointemenList/AppointmentHIstoryDet';
const Navigation = () => {
  const [mystack, setMyStack] = useState(<Text></Text>);
  const [doctor, setDoctor] = useState(false);
  const checkAuth = () => {
    firebase.auth().onAuthStateChanged(user => {
      setMyStack(user);
      // if (user) {
      //   setMyStack(<BottomNavigation />);
      // } else {
      //   setMyStack(<AuthStack />);
      // }

      // if (user) {
      let id = firebase.auth().currentUser.uid;
      firebase
        .database()
        .ref(`users/${id}/userDetails`)
        .on('value', firebaseData => {
          let data = firebaseData.val();
          setDoctor(data?.isDoctor);
          console.log(data?.isDoctor);
        });
      // }
    });
  };
  useEffect(() => {
    checkAuth();
  }, []);

  const DoctorStack = () => {
    const Stack = createStackNavigator();

    return (
      <Stack.Navigator>
        <Stack.Screen
          name="DoctorHomeScreen"
          component={DoctorHomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DoctorUserFormScreen"
          component={DoctorUserFormScreen}
          options={{headerShown: false}}
        />
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

  return (
    <NavigationContainer>
      {mystack && !doctor ? (
        <BottomNavigation />
      ) : mystack && doctor ? (
        <DoctorStack />
      ) : (
        <AuthStack />
      )}

      {/* <HomeStack/> */}
    </NavigationContainer>
  );
};

export default Navigation;
