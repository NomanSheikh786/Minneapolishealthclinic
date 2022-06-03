import React from 'react';
import {View, Text, ImageBackground, StyleSheet, StatusBar} from 'react-native';
import Navigation from './src/navigation/stack/index';
import {NativeBaseProvider} from 'native-base';
const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor={'#FFF'} barStyle="dark-content" />
      <Navigation />
    </NativeBaseProvider>
  );
};

export default App;
