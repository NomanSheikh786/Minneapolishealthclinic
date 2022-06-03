import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from '../stack/Authstack';
import {HomeStack} from '../stack/Appstack';
import 'react-native-gesture-handler';
import firebase from 'firebase';
import BottomNavigation from '../bottom/BottonTab';

const Navigation = () => {
  const [mystack, setMyStack] = useState(<Text></Text>);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let id = firebase.auth().currentUser.uid;
        firebase
          .database()
          .ref(`users/${id}`)
          .on('value', firebaseData => {
            let data = firebaseData.val();
            if (data.isLogin) {
              setMyStack(<BottomNavigation />);
            } else {
              setMyStack(<AuthStack />);
            }
          });
      } else {
        setMyStack(<AuthStack />);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      {mystack}

      {/* <HomeStack/> */}
    </NavigationContainer>
  );
};

export default Navigation;
