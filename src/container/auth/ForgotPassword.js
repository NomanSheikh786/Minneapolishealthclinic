import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import InputType from '../../component/InputType';
import {vh, vw} from '../../constaint/index';
import RedLongButton from '../../component/RedLongButton';
import {HStack, Checkbox, Center, NativeBaseProvider} from 'native-base';

export default function ForgotPassword({navigation}) {
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
            <InputType placeholder="Enter Email Address" />
          </View>
        </View>

        <View style={{marginTop: vh * 0.04}}>
          <RedLongButton
            onPress={() => navigation.navigate('CreatePasswrod')}
            buttonText="Send me now"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
