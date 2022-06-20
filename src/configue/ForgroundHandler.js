// import React, {useEffect} from 'react';

// import PushNotification from 'react-native-push-notification';
// import messaging from '@react-native-firebase/messaging';

// import {Alert} from 'react-native';
// // import { Alert } from "native-base";
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// const ForegroundHandler = () => {
//   useEffect(() => {
//     const unsubscribe = messaging().onMessage(async remoteMessage => {
//       console.log('Message data:', remoteMessage);

//       const {notification, messageId} = remoteMessage;

//       // PushNotification.localNotification({
//       //     channelId: "channelId",
//       //     // id: Math.round(Math.random() * 1000000),
//       //     id: "1231123",
//       //     title: notification.title,
//       //     body: notification.body,
//       //     message: notification.body
//       // });

//       // Alert.alert(notification.title, notification.body);
//     });
//     return unsubscribe;
//   }, []);
//   return null;
// };

// export default ForegroundHandler;

// // const unsubscribe = messaging().onMessage(async remoteMessage => {
// //     console.log('Message data:', remoteMessage);

// //     const { notification, messageId } = remoteMessage;

// //     PushNotification.localNotification({
// //         channelId: "channelId",
// //         // id: Math.round(Math.random() * 1000000),
// //         id: "1231123",
// //         title: notification.title,
// //         body: notification.body,
// //         message: notification.body
// //     });

// //     // Alert.alert(
// //     //     notification.title,
// //     //     notification.body,
// //     //     [
// //     //         {
// //     //             text: 'Cancel',
// //     //             onPress: () => console.log('Cancel Pressed'),
// //     //             style: 'cancel',
// //     //         },
// //     //         { text: 'OK', onPress: () => console.log('OK Pressed') },
// //     //     ],
// //     //     { cancelable: false },
// //     // );

// // })

// // PushNotification.localNotification({
// //     channelId: "default",
// //     id: messageId,
// //     title: notification.title,
// //     message: notification.body,
// //     soundName: "default",
// //     playSound: true,
// //     vibrate: true,
// // });
