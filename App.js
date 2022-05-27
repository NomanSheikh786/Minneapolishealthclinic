import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import Navigation from './src/navigation/stack/index';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const App = () => {
  return (
    <NativeBaseProvider>
        <Navigation />
    </NativeBaseProvider>
  );
};

export default App;