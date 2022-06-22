// import React, {useEffect, useState} from 'react';
// import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
// import firebase from '../../configue/index';

// function DoctorHomeScreen(props) {
//   const [load, setLoad] = useState(false);
//   let id = firebase.auth().currentUser.uid;
//   useEffect(() => {
//     setLoad(true);
//     firebase
//       .database()
//       .ref(`users/${id}/userDetails`)
//       .on('value', firebaseData => {
//         let data = firebaseData.val();
//         setName(data?.email ? data?.email : 'Unkown');
//         setLoad(false);
//       });
//   }, []);
//   return (
//     <View style={styles.container}>
//       {/* <FlatList data={data} keyExtractor={(item,ind) => ind.toString()} renderItem={({}) => {
//         return(
//             <TouchableOpacity>

//             </TouchableOpacity>
//         )
//     }}/> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {flex: 1, backgroundColor: '#FFF'},
// });

// export default DoctorHomeScreen;

import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Image,
} from 'react-native';
import firebase from '../../configue/index';
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
function DoctorHomeScreen({navigation}) {
  const [load, setLoad] = useState(false);
  const [users, setUsers] = useState();

  let id = firebase.auth().currentUser.uid;

  let dataa = [];
  useEffect(() => {
    setLoad(true);
    firebase
      .database()
      .ref(`users`)

      // .child('userDetails')

      .once('value', snapshot => {
        if (snapshot.val() == null) {
          setLoad(false);
          alert('no data found');
        } else {
          const data = snapshot.val();

          // console.log(data);
          // dataa.push(data);
          // console.log(data);
          // setUsers([data]);

          // const array = [];

          const arrayResult = Object.keys(data).map(room => {
            return {id: room, data: data[room]};
          });
          setUsers(arrayResult);
          setLoad(false);
          // snapshot.forEach(item => {
          //   var data = item.val();
          //   if (data) {
          //     setLoad(false);
          //     setUsers(data);
          //   }
          // });
        }
      });

    // createChannels();
  }, []);
  // console.log(users[7].name);
  // console.log(users[0].name);

  // const createChannels = () => {
  //   PushNotification.createChannel({
  //     channelId: 'test-channel',
  //     channelName: 'test channel',
  //   });
  // };

  const sendNotificationToUser = async token => {
    // e.preventDefault();
    // const headers = {
    //   'Content-Type': 'application/json',
    // };
    // // const token = await AsyncStorage.getItem('fcmToken');
    // console.log('token', token);
    // axios
    //   .post(
    //     'http://192.168.100.169:5000/fcm',
    //     {
    //       token: token,
    //     },
    //     headers,
    //   )
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };
  console.log('user', users);
  return (
    <SafeAreaView style={styles.container}>
      {load ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} color={'red'} />
        </View>
      ) : (
        <FlatList
          ListHeaderComponent={
            <View style={{marginLeft: 20, marginTop: 20}}>
              <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
                Users List
              </Text>
            </View>
          }
          data={users}
          keyExtractor={(item, ind) => ind.toString()}
          ListEmptyComponent={
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: 'black', fontSize: 18}}>No Users Found</Text>
            </View>
          }
          renderItem={({item}) => {
            return (
              item?.id != id && (
                <TouchableOpacity
                  // onPress={
                  //   () =>
                  //   // navigation.navigate('AppointmentScreen', {item: item})
                  //   {
                  //     // PushNotification.localNotification({
                  //     //   channelId: 'test-channel',
                  //     //   title: 'testing',
                  //     //   message: 'poka',
                  //     // });
                  //   }
                  // }
                  onPress={() =>
                    navigation.navigate('AppointmentScreen', {userData: item})
                  }
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: 'lightgrey',
                    width: '90%',
                    alignSelf: 'center',
                    paddingVertical: 15,
                    paddingHorizontal: 10,
                    borderRadius: 7,
                    margin: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black', fontSize: 16}}>
                    {item?.data?.userDetails?.email}
                  </Text>

                  <Image
                    source={require('../../assets/nav.png')}
                    resizeMode={'contain'}
                    style={{height: 15, width: 15}}
                  />
                </TouchableOpacity>
              )
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default DoctorHomeScreen;
