import React from 'react';
import {View, Text, ImageBackground, StyleSheet, StatusBar} from 'react-native';
import Navigation from './src/navigation/stack/index';
import {NativeBaseProvider} from 'native-base';

import {LogBox} from 'react-native';
const App = () => {
  LogBox.ignoreLogs([
    'Warning: Async Storage has been extracted from react-native core',
  ]);

  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor={'#FFF'} barStyle="dark-content" />
      <Navigation />
    </NativeBaseProvider>
  );
};

export default App;
