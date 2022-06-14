import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import checkCircle from '../../../assets/checkCircle.png';
import {vh, vw} from '../../../constaint';

function CheckEmailScreen({navigation}) {
  setTimeout(() => {
    navigation.navigate('ResetPassword');
  }, 10000);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            alignItems: 'center',
            width: vw - 70,
            alignSelf: 'center',
            flex: 0.3,
            paddingTop: vh / 20,
            justifyContent: 'space-evenly',
          }}>
          <Image source={checkCircle} resizeMode="contain" />
          <Text style={{fontWeight: '600', fontSize: 26, color: '#000000'}}>
            Check your mail
          </Text>
          <Text style={{textAlign: 'center', lineHeight: 22, color: '#5E6F88'}}>
            We have sent a password recover instructions to your email.
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            flex: 0.6,
            alignSelf: 'center',
            width: vw - 70,
            justifyContent: 'flex-end',
          }}>
          <Text style={{textAlign: 'center', lineHeight: 22, color: '#5E6F88'}}>
            Did not receive the email? Check your spam filter, or &nbsp;
            <Text
              onPress={() => navigation.goBack()}
              style={{color: '#007AFF'}}>
              try another email address
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default CheckEmailScreen;
