import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import RedLongButton from '../../component/RedLongButton';

const SplashScreenLogo = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#FE284D',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Image style={{}} source={require('../../assets/logo.png')} />
      </View>
      <View>
        <RedLongButton buttonText="Log" />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreenLogo;
