import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import InputType from '../../component/InputType';
import {vh, vw} from '../../constaint/index';
import RedLongButton from '../../component/RedLongButton';

export default function CreatePasswrod() {
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
        Create a new Password
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
            Set new password for your next login and access in Minneapolis
            Health Clinic
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
            Password
          </Text>
          <View style={{alignItems: 'center'}}>
            <InputType placeholder="Enter Your Password" />
          </View>
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
            Confirm Password
          </Text>
          <View style={{alignItems: 'center'}}>
            <InputType placeholder="Enter Your Confirm Password" />
          </View>
        </View>

        <View style={{marginTop: vh * 0.04}}>
          <RedLongButton buttonText="Reset Password" />
        </View>
      </View>
    </SafeAreaView>
  );
}
