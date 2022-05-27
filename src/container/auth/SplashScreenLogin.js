import {SafeAreaView, View, Image} from 'react-native';
import {vh, vw} from '../../constaint/index';
import React from 'react';
import RedLongButton from '../../component/RedLongButton';
import WhiteButton from '../../component/WhiteButton';

const SplashScreenLogin = props => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View>
        <Image source={require('../../assets/Ellipssup.png')} />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Image source={require('../../assets/Logocolor.png')} />
      </View>
      <View
        style={{
          marginBottom: vh * 0.01,
          marginHorizontal: vw * 0.09,
          justifyContent: 'space-evenly',
          height: 150,
        }}>
        <RedLongButton
          buttonText="Login"
          onPress={() => {
            props.navigation.navigate('LoginScreen');
          }}
        />
        <WhiteButton
          buttonText="Sign Up"
          onPress={() => {
            props.navigation.navigate('SignUp');
          }}
        />
      </View>

      {/* <View style={{marginHorizontal: vw * 0.09,marginBottom: vh * 0.08,}}>
      
    
      </View> */}
      <View
        style={{
          alignContent: 'flex-end',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <Image source={require('../../assets/Ellipsedown.png')} />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreenLogin;
