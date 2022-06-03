import {View, Text, SafeAreaView, TouchableOpacity, Image,ActivityIndicator} from 'react-native';
import React,{useState} from 'react';
import InputType from '../../component/InputType';
import {vh, vw} from '../../constaint/index';
import RedLongButton from '../../component/RedLongButton';
import {HStack, Checkbox, Center, NativeBaseProvider} from 'native-base';
import firebase from 'firebase';

export default function ForgotPassword({navigation}) {


const [email, setEmail] = useState ("")
const [loading, setLoading] = useState ("")

const Forgetpassword = () =>{
  if (email == ""){
    alert("Fill This blank")
    
  }
  else{
    setLoading(true);
    firebase.auth().sendPasswordResetEmail(email)
    .then(function (user){
      setLoading(false);
      alert("Please Check Your Email...")
      setEmail('');
    })
    .catch(function(e){
      setLoading(false);
      console.log(e)
    })
  }
  
  
}

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
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
        Forgot Password
      </Text>

      <View
        style={{
          alignSelf: 'center',
          width: vw - 45,
          margin: vh * 0.12,
          flex: 1,
          // backgroundColor:"yellow"
        }}>
        <View>
          <Text>
            Please enter your email to recieve the instruction to reset your
            password.
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              marginBottom: vh * 0.01,
              fontWeight: '500',
              marginTop: vh * 0.03,
            }}>
            Email
          </Text>
          <View style={{alignItems: 'center'}}>
            <InputType placeholder="Enter Email Address"
              state={email}
              setState={setEmail}
            />
          </View>
        </View>

        <View style={{marginTop: vh * 0.04}}>
          {loading ? (<ActivityIndicator color={'orange'} size={'large'} />) :  ( <RedLongButton
            buttonText="Send me now"
            onPress={Forgetpassword}
          />)}

        
        </View>
      </View>
    </SafeAreaView>
  );
}
