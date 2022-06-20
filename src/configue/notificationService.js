import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}

const getFcmToken = async () => {
  const fcmToken = await AsyncStorage.getItem('fcmToken');
  console.log(fcmToken, 'the old token');

  if (!fcmToken) {
    try {
      const fcmToken = await messaging().getToken();

      if (fcmToken) {
        console.log(fcmToken, 'the new token');
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export const notificationListener = async () => {
  console.log('poka');
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  messaging().onMessage(remoteMessage => {
    console.log(
      'Notification caused app to open from forground state:',
      remoteMessage,
    );
    alert(remoteMessage.notification.body);
  });
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

  // messaging().onMessage(async remoteMessage => {
  //     console.log('Message data:', remoteMessage);
  //     const { notification, messageId } = remoteMessage;

  //     Alert.alert(
  //         notification.title,
  //         notification.body,
  //         [
  //             {
  //                 text: 'Cancel',
  //                 onPress: () => console.log('Cancel Pressed'),
  //                 style: 'cancel',
  //             },
  //             { text: 'OK', onPress: () => console.log('OK Pressed') },
  //         ],
  //         { cancelable: false },
  //     );

  // });
};
