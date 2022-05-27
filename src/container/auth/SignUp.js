import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import InputType from '../../component/InputType';
import {vh, vw} from '../../constaint/index';
import RedLongButton from '../../component/RedLongButton';
import {HStack, Checkbox} from 'native-base';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
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
            margin: vh * 0.12,
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
              <InputType placeholder="Enter Your Name" />
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
              <InputType placeholder="Enter Your Email" />
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
              <InputType placeholder="Enter Password" />
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
              <InputType placeholder="Enter Confirm Password" />
            </View>
          </View>

          {/* <View style={{alignSelf: 'center', width: vw - 75}}> */}
          <View
            style={{
              marginTop: vh * 0.06,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View>
              <HStack space={7}>
                <Checkbox
                  value="Remember me"
                  accessibilityLabel="Remember me"
                />
              </HStack>
            </View>
            <View>
              <Text style={{fontSize: 16, marginLeft: vw * 0.02}}>
                I agree Terms and Conditions
              </Text>
            </View>
          </View>

          <View style={{marginTop: vh * 0.04}}>
            <RedLongButton buttonText="Register" />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: vh * 0.04,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Text style={{color: '#006EF0', fontSize: 16}}> </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUp;
