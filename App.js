import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import Navigation from './src/navigation/stack/index';
import {NativeBaseProvider, Box} from 'native-base';
const App = () => {
  return (
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  );
};

export default App;
