import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import AgoraUIKit, {mode, role} from 'agora-rn-uikit';
import {vh, vw} from '../../constaint';
import axios from 'axios';
function FormDetails({route}) {
  const [videoCall, setVideoCall] = useState(false);

  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [check, setCheck] = useState(true);
  const [loadNot, setLoadNot] = useState(false);
  const {userData} = route.params;
  //   const rtcProps = {
  //     appId: '90133bcd4f1a4c459699ca2934973349',
  //     channel: 'test',
  //   };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  console.log(userData?.data?.userDetails?.fcmToken);
  const handleNotify = () => {
    if (!title || !message) {
      alert('type your title & message');
    } else {
      setLoadNot(true);
      const headers = {
        'Content-Type': 'application/json',
      };
      // const token = await AsyncStorage.getItem('fcmToken');
      // console.log('token', token);
      axios
        .post(
          'https://clinicminneapolishealth.herokuapp.com/fcm',
          {
            token: userData?.data?.userDetails?.fcmToken,
            title: title,
            message: message,
          },
          headers,
        )
        .then(res => {
          console.log(res.data);
          setCheck(false);
          setLoadNot(false);
        })
        .catch(err => {
          console.log(err);
          setLoadNot(false);
        });
    }
    // console.log('data', allData?.data?.userDetails?.fcmToken);
  };
  return (
    <View style={styles.container}>
      {videoCall ? (
        <AgoraUIKit
          rtcProps={{
            appId: '90133bcd4f1a4c459699ca2934973349',
            channel: userData?.id,
            // mode: mode.LiveBroadcasting,
            // role: role.Broadcaster,
          }}
          callbacks={callbacks}
        />
      ) : (
        <View
          style={{
            flex: 1,

            // justifyContent: 'center',
            alignItems: 'center',
            marginTop: vh / 20,
          }}>
          <TextInput
            style={{
              borderWidth: 1.2,
              borderColor: 'lightgrey',
              width: vw / 1.09,
              alignSelf: 'center',
              marginVertical: 10,

              borderRadius: 10,
              elevation: 3,
              backgroundColor: '#FFF',

              padding: 10,
              color: 'grey',
            }}
            placeholder="Notification Title for user"
            placeholderTextColor={'grey'}
            value={title}
            onChangeText={e => setTitle(e)}
          />
          <TextInput
            style={{
              borderWidth: 1.2,
              borderColor: 'lightgrey',
              width: vw / 1.09,
              alignSelf: 'center',
              height: vh / 5,
              borderRadius: 10,
              elevation: 3,
              backgroundColor: '#FFF',
              textAlignVertical: 'top',
              padding: 10,
              color: 'grey',
            }}
            multiline={true}
            placeholder="Notification Message for user"
            placeholderTextColor={'grey'}
            value={message}
            onChangeText={e => setMessage(e)}
          />

          <TouchableOpacity
            style={{
              backgroundColor: 'dodgerblue',
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 20,
              width: vw / 1.09,
              alignSelf: 'center',
              padding: 15,
              borderRadius: 7,
              alignItems: 'center',
            }}
            onPress={handleNotify}>
            {loadNot ? (
              <ActivityIndicator size={'small'} color={'#FFF'} />
            ) : (
              <Text style={{color: '#FFF', fontSize: 16, marginLeft: 10}}>
                Send Notification for appointment confirmed
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            disabled={check}
            onPress={() => setVideoCall(true)}
            style={{
              backgroundColor: check ? 'lightgrey' : '#FE284D',
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 20,
              width: vw / 1.09,
              alignSelf: 'center',
              padding: 15,
              borderRadius: 7,
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/camera-white.png')}
              style={{width: 20, height: 20}}
              resizeMode="contain"
            />
            <Text style={{color: '#FFF', fontSize: 16, marginLeft: 10}}>
              Book Video Consultation
            </Text>
          </TouchableOpacity>

          {/* <Text>Start Call</Text> */}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default FormDetails;
