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

const LoginScreen = ({navigation}) => {
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
          Welcome
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
              Email
            </Text>
            <View style={{alignItems: 'center'}}>
              <InputType placeholder="Enter Email Address" />
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

          {/* <View style={{alignSelf: 'center', width: vw - 75}}> */}

          <TouchableOpacity
            style={{marginTop: vh * 0.04}}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={{color: '#006EF0', textAlign: 'right', fontSize: 16}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <View style={{marginTop: vh * 0.04}}>
            <RedLongButton
              onPress={() => navigation.navigate('BottomTabs')}
              buttonText="Login"
            />
          </View>

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
                {' '}
                Remember me
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignSelf: 'center',
              width: vw - 90,
              marginTop: vh * 0.04,
            }}>
            <TouchableOpacity>
              <Image style={{}} source={require('../../assets/iphone.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={{}} source={require('../../assets/Group.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={{}} source={require('../../assets/facebok.png')} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: vh * 0.04,
            }}>
            <View>
              <Text style={{fontSize: 16}}>Don’t have an account?</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={{color: '#006EF0', fontSize: 16}}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default LoginScreen;
