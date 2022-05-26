import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import {vh, vw} from '../../constaint/index';
import React from 'react';
import RedLongButton from '../../component/RedLongButton';

const SplashScreenLogin =() => {
  return (
    <SafeAreaView style={{backgroundColor: '#E5E5E5', flex: 1}}>
      <View>
        <Image source={require('../../assets/Ellipssup.png')} />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Image source={require('../../assets/Logocolor.png')} />
      </View>
      <View style={{marginBottom: vh * 0.1}}>
        <RedLongButton buttonText="Login" />
      </View>
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
}

export default SplashScreenLogin
