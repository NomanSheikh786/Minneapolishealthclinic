import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import RedLongButton from '../../component/RedLongButton';
import firebase from 'firebase';
import {vh, vw} from '../../constaint/index';
import {Switch, HStack, Center, NativeBaseProvider} from 'native-base';
import SpaceGrayButton from '../../component/SpaceGrayButton';
import Modaal from '../../component/Modaal';
import {launchImageLibrary} from 'react-native-image-picker';
import {addImage, getImage} from '../../configue/FirebaseImages';
function ProfileScreen(props) {
  const [name, setName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [load, setLoad] = useState(false);

  const [image, setImage] = useState('');
  const [imgLoad, setImgLoad] = useState(false);

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(res => {
        console.log('logout');
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    setLoad(true);

    try {
      let id = firebase.auth().currentUser.uid;
      if (!id) {
        console.log('No Id');
      } else {
        firebase
          .database()
          .ref(`users/${id}/userDetails`)
          .on('value', firebaseData => {
            let data = firebaseData.val();
            setName(data?.fname ? data?.fname : 'Unkown');
            setLoad(false);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const addImage = async () => {
  //   const result = await launchImageLibrary({
  //     mediaType: 'photo',
  //     // includeBase64: true,
  //   });

  //   if (result.assets) {
  //     const response = await fetch(result.assets[0].uri);
  //     const blob = await response.blob();
  //     console.log('poks');
  //     firebase
  //       .storage()
  //       .ref(`users/Profile-Images/${id}`)
  //       .child('profileImage')
  //       .put(blob)
  //       .then(
  //         snapshot => console.log('image has been successfully added'),

  //         // setTimeout(() => {

  //         //   setImgLoad(true)
  //         // }, 3000),
  //       )
  //       .then(() => {
  //         getImage();
  //         alert('user profile successfully added');
  //       })
  //       .catch(e => console.log(e));
  //   } else {
  //     console.log('No match');
  //   }
  // };
  // const getImage = () => {
  //   firebase
  //     .storage()
  //     .ref(`users/Profile-Images/${id}`)
  //     .child('profileImage')
  //     .getDownloadURL()
  //     .then(url => {
  //       setImage(url);

  //       console.log('successfully get user profile');
  //     })
  //     .catch(e => console.log(e, 'error'));
  // };
  useEffect(() => {
    getImage(setImage, 'Profile-Images', 'profileImage');
  }, []);
  return (
    // <View style={styles.container}>
    //     <View style={{width: '90%'}}>
    //       <RedLongButton buttonText="Logut" onPress={handleLogout} />
    //     </View>
    //   </View>

    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <Modaal
        userName={name}
        showModal={showModal}
        setShowModal={setShowModal}
        onPress={handleLogout}
      />

      <ScrollView contentContainerStyle={{paddingBottom: 120}}>
        <View
          style={{
            backgroundColor: '#FE284D',
            height: vh * 0.25,
            borderBottomEndRadius: 25,
            borderBottomLeftRadius: 25,
          }}>
          <TouchableOpacity
            style={{position: 'absolute', right: 15, marginTop: vh * 0.06}}>
            <Image source={require('../../assets/ni.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              position: 'absolute',
              bottom: -50,
            }}>
            <View style={{position: 'relative'}}>
              {image == '' ? (
                <TouchableOpacity
                  onPress={() =>
                    addImage(setImage, 'Profile-Images', 'profileImage')
                  }>
                  <Image
                    style={{width: 100, height: 100, borderRadius: 100}}
                    source={require('../../assets/unknown.jpg')}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() =>
                    addImage(setImage, 'Profile-Images', 'profileImage')
                  }>
                  <Image
                    resizeMode="contain"
                    style={{width: 100, height: 100, borderRadius: 100}}
                    source={{uri: image}}
                  />
                </TouchableOpacity>
              )}
              <TouchableOpacity
                onPress={() =>
                  addImage(setImage, 'Profile-Images', 'profileImage')
                }>
                <Image
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 100,
                    position: 'absolute',
                    bottom: -15,
                    right: -23,
                  }}
                  source={require('../../assets/cam.png')}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: vh * 0.08}}>
          {load ? (
            <ActivityIndicator color={'#FA284D'} size={'small'} />
          ) : (
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 30,
                color: 'black',
                textAlign: 'center',
              }}>
              {name ? name : 'Unknown'}
            </Text>
          )}
        </View>

        {/* <ScrollView> */}
        <TouchableOpacity
          onPress={() => props.navigation.navigate('EditProfileScreen')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: vh * 0.03,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
              margin: 15,
            }}>
            My Profile
          </Text>
          <Image
            source={require('../../assets/nav.png')}
            resizeMode={'contain'}
            style={{height: 20, width: 20, margin: 15}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('AppointmentStack')}
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
              margin: 15,
            }}>
            Appointments
          </Text>
          <Image
            source={require('../../assets/nav.png')}
            resizeMode={'contain'}
            style={{height: 20, width: 20, margin: 15}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('FaqScreen')}
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
              margin: 15,
            }}>
            FAQ’s
          </Text>
          <Image
            source={require('../../assets/nav.png')}
            resizeMode={'contain'}
            style={{height: 20, width: 20, margin: 15}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('NotificationStack')}
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
              margin: 15,
            }}>
            Notifications
          </Text>
          {/* <Image source={require("../../assets/nav.png")} resizeMode={'contain'} style={{height:20,width:20,margin: 15}}/> */}
          <HStack alignItems="center" space={8}>
            <Switch />
          </HStack>
        </TouchableOpacity>
        {/* <TouchableOpacity
          // onPress={() => props.navigation.navigate('PaymentMethod')}
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
              margin: 15,
            }}>
            Payment Method
          </Text>
          <Image
            source={require('../../assets/nav.png')}
            resizeMode={'contain'}
            style={{height: 20, width: 20, margin: 15}}
          />
        </TouchableOpacity> */}
        {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
              margin: 15,
            }}>
            Change Language
          </Text> */}
        {/* <Image source={require("../../assets/nav.png")} resizeMode={'contain'} style={{height:20,width:20,margin: 15}}/> */}
        {/* <Text style={{color: '#007BFF', margin: 20, fontSize: 18}}>
            English
          </Text>
        </View> */}
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ResetPassword')}
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
              margin: 15,
            }}>
            Change Password
          </Text>
          <Image
            source={require('../../assets/nav.png')}
            resizeMode={'contain'}
            style={{height: 20, width: 20, margin: 15}}
          />
        </TouchableOpacity>
        <View style={{marginTop: vh * 0.05, width: '90%', alignSelf: 'center'}}>
          <SpaceGrayButton
            buttonText="Logout"
            onPress={() => setShowModal(true)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
// });

export default ProfileScreen;
