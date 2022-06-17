import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Navigation from './src/navigation/stack/index';
import {NativeBaseProvider} from 'native-base';
import AgoraUIKit, {mode, role} from 'agora-rn-uikit';
import {LogBox} from 'react-native';
const App = () => {
  // const [videoCall, setVideoCall] = useState(true);
  // const rtcProps = {
  //   appId: '90133bcd4f1a4c459699ca2934973349',
  //   channel: 'test',
  // };
  // const callbacks = {
  //   EndCall: () => setVideoCall(false),
  // };
  LogBox.ignoreLogs([
    'Warning: Async Storage has been extracted from react-native core',
  ]);

  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor={'#FFF'} barStyle="dark-content" />
      <Navigation />
    </NativeBaseProvider>
  );
  // videoCall ? (
  //   <AgoraUIKit
  //     rtcProps={{
  //       appId: '90133bcd4f1a4c459699ca2934973349',
  //       channel: 'test',
  //       mode: mode.LiveBroadcasting,
  //       role: role.Broadcaster,
  //     }}
  //     callbacks={callbacks}
  //   />
  // ) : (
  //   <View>
  //     <Text onPress={() => setVideoCall(true)}>Start Call</Text>
  //   </View>
  // );
};

export default App;
