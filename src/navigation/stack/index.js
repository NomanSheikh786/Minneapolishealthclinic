import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from '../stack/Authstack';
import {HomeStack} from '../stack/Appstack';
import 'react-native-gesture-handler';
import firebase from 'firebase';
import BottomNavigation from '../bottom/BottonTab';
import DoctorHomeScreen from '../../container/Doctor/DoctorHomeScreen';

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
        });
      // }
    });
  };
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <NavigationContainer>
      {mystack && !doctor ? (
        <BottomNavigation />
      ) : mystack && doctor ? (
        <DoctorHomeScreen />
      ) : (
        <AuthStack />
      )}

      {/* <HomeStack/> */}
    </NavigationContainer>
  );
};

export default Navigation;
