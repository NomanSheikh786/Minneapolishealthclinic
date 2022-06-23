import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import InputType from '../../component/InputType';
import {vh, vw} from '../../constaint/index';
import RedLongButton from '../../component/RedLongButton';
import firebase from '../../configue/index';
import {
  Checkbox,
  Stack,
  Alert,
  IconButton,
  HStack,
  VStack,
  CloseIcon,
  Center,
  NativeBaseProvider,
} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
  const [check, setCheck] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [Loading, setLoading] = useState(false);
  const [checkbox, setCheckbox] = useState(true);

  // console.log(checkbox);

  const signUpUser = async () => {
    const fcmToken = await AsyncStorage.getItem('fcmToken');

    const userDetails = {
      fname: name,
      lname: '',
      phone: '',
      email: email,
      gender: '',
      dataOfBirth: {month: '', day: '', year: ''},
      country: '',
      address: '',
      isDoctor: false,
    };
    if (
      name == '' ||
      email == '' ||
      password == '' ||
      confirmpassword == '' ||
      !checkbox
    ) {
      alert('Please Fill all blanks');
    } else if (password != confirmpassword) {
      alert('same password required');
    } else {
      setLoading(true);
      //  console.log("fire",firebase)
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        //  yaha sa first then start ha
        .then(response => {
          setLoading(false);
          setCheckbox(false);
          let id = firebase.auth().currentUser.uid;
          firebase
            .database()
            .ref(`users/${id}`)
            .set({
              userDetails,
            })
            .then(res => {
              setLoading(false);
              setCheck(true);
              // alert("SignUp Success")
              setName('');
              setEmail('');
              setPassword('');
              setConfirmPassword('');
              setCheckbox(false);
            })
            .then(res => {
              try {
                let id = firebase.auth().currentUser.uid;
                if (id) {
                  firebase
                    .database()
                    .ref(`users/${id}/token`)
                    .set({
                      fcmToken: fcmToken,
                    })
                    .then(res => {
                      console.log('token saved');
                      setCheckToken(true);
                    })
                    .catch(err => {
                      console.log(err, 'Error');
                    });
                } else {
                  console.log('user did not logged in');
                }
              } catch (error) {
                console.log(error);
              }
            })
            .catch(err => {
              alert(err.message);
              setLoading(false);
              setCheckbox(false);
              console.log(err, 'Erorrr');
            });
        })
        .catch(err => {
          setLoading(false);
          setCheckbox(false);
          alert(err.message);
        });

      // yaha second then band ha
    }

    // const renderButton = () =>{
    //   if (Loading == true){
    //   return <ActivityIndicator size="large" color="orange"/>
    //   }
    //   else{
    //     return(
    //     <RedLongButton buttonText="Register" onPress={signUpUser} />
    //     )
    //   }
    // }
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      {check ? (
        <Alert w="90%" borderRadius={10} status={'success'} alignSelf="center">
          <VStack space={2} flexShrink={1} w="100%">
            <HStack
              flexShrink={1}
              space={2}
              alignItems="center"
              justifyContent="space-between">
              <HStack space={2} flexShrink={1}>
                <Alert.Icon mt="1" />
                <Text fontSize="large" color="coolGray.800">
                  Signup successfully !
                </Text>
              </HStack>
              <IconButton
                onPress={() => setCheck(false)}
                variant="unstyled"
                _focus={{
                  borderWidth: 0,
                }}
                icon={<CloseIcon size="4" color="coolGray.600" />}
              />
            </HStack>
          </VStack>
        </Alert>
      ) : null}

      <ScrollView>
        <Text
          style={{
            color: '#000000',
            fontFamily: 'SF UI Display',
            fontWeight: '800',
            fontSize: 30,
            position: 'absolute',
            top: 15,
            left: 23,
          }}>
          Sign Up
        </Text>

        <View
          style={{
            alignSelf: 'center',
            width: vw - 45,
            marginTop: vh * 0.12,
            flex: 1,
            // backgroundColor:"yellow"
          }}>
          <View>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                marginBottom: vh * 0.01,
                fontWeight: '500',
              }}>
              Name
            </Text>
            <View style={{alignItems: 'center'}}>
              <InputType
                state={name}
                setState={setName}
                placeholder="Enter Your Name"
              />
            </View>
          </View>

          <View style={{marginTop: vh * 0.04}}>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '500',
                marginBottom: vh * 0.01,
              }}>
              Email
            </Text>
            <View style={{alignItems: 'center'}}>
              <InputType
                state={email}
                setState={setEmail}
                placeholder="Enter Your Email"
                type="email-address"
              />
            </View>
          </View>

          <View style={{marginTop: vh * 0.04}}>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '500',
                marginBottom: vh * 0.01,
              }}>
              Password
            </Text>
            <View style={{alignItems: 'center'}}>
              <InputType
                secureTextEntry={true}
                state={password}
                setState={setPassword}
                placeholder="Enter Password"
              />
            </View>
          </View>
          <View style={{marginTop: vh * 0.04}}>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '500',
                marginBottom: vh * 0.01,
              }}>
              Confirm Password
            </Text>
            <View style={{alignItems: 'center'}}>
              <InputType
                secureTextEntry={true}
                state={confirmpassword}
                setState={setConfirmPassword}
                placeholder="Enter Confirm Password"
              />
            </View>
          </View>

          {/* <View style={{alignSelf: 'center', width: vw - 75}}> */}
          <View
            style={{
              marginTop: vh * 0.05,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Checkbox
              onChange={e => setCheckbox(e)}
              value={checkbox}
              accessibilityLabel="I agree Terms and Conditions">
              <Text>I agree Terms and Conditions</Text>
            </Checkbox>
            {/* <View>
              <Text style={{fontSize: 16, marginLeft: vw * 0.02}}>
                I agree Terms and Conditions
              </Text>
            </View> */}
          </View>

          <View style={{marginTop: vh * 0.04}}>
            {Loading ? (
              <ActivityIndicator color={'orange'} size={'large'} />
            ) : (
              <RedLongButton buttonText="Register" onPress={signUpUser} />
            )}
          </View>
          {/* {renderButton()} */}
          {/* 
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: vh * 0.04,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Text style={{color: '#006EF0', fontSize: 16}}> </Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUp;
