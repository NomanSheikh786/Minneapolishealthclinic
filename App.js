import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Navigation from './src/navigation/stack/index';
import {NativeBaseProvider} from 'native-base';
import AgoraUIKit, {mode, role} from 'agora-rn-uikit';
import {LogBox} from 'react-native';
import PushNotification from 'react-native-push-notification';
import firebase from 'firebase';
import {
  requestUserPermission,
  notificationListener,
} from './src/configue/notificationService';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  const [checkToken, setCheckToken] = useState(false);
  // const [videoCall, setVideoCall] = useState(true);
  // const rtcProps = {
  //   appId: '90133bcd4f1a4c459699ca2934973349',
  //   channel: 'test',
  // };
  // const callbacks = {
  //   EndCall: () => setVideoCall(false),
  // };
  LogBox.ignoreLogs([
    'Warning: Async Storage has been extracted from react-native core',
  ]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      PushNotification.configure({
        onRegister: function (token) {
          console.log('TOKEN:', token.token);
        },

        onNotification: function (notification) {
          console.log('NOTIFICATION:', notification);

          // notification.finish(PushNotificationIOS.FetchResult.NoData);
        },

        onAction: function (notification) {
          console.log('ACTION:', notification.action);
          console.log('NOTIFICATION:', notification);
        },

        onRegistrationError: function (err) {
          console.error(err.message, err);
        },

        permissions: {
          alert: true,
          badge: true,
          sound: true,
        },

        popInitialNotification: true,
        requestPermissions: true,
      });
    }

    requestUserPermission();
    notificationListener();
    // await AsyncStorage.getItem('fcmToken');
    // const token = getToken();
    // console.log('token', token);
    // requestUserPermission();
    // notificationListener();
  }, [checkToken]);
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor={'#FFF'} barStyle="dark-content" />
      <Navigation />
    </NativeBaseProvider>
  );
  // videoCall ? (
  //   <AgoraUIKit
  //     rtcProps={{
  //       appId: '90133bcd4f1a4c459699ca2934973349',
  //       channel: 'test',
  //       mode: mode.LiveBroadcasting,
  //       role: role.Broadcaster,
  //     }}
  //     callbacks={callbacks}
  //   />
  // ) : (
  //   <View>
  //     <Text onPress={() => setVideoCall(true)}>Start Call</Text>
  //   </View>
  // );
};

export default App;
