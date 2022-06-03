import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import checkCircle from '../assets/checkCircle.png';
import dateIcon from '../assets/date.png';
import timeIcon from '../assets/time.png';
import locationIcon from '../assets/location.png';

import {vh, vw} from '../constaint';
import RedLongButton from './RedLongButton';
function FormSubmit({navigation, route}) {
  const {title, text, date, time, location, button} = route.params;
  console.log(title);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 0.6,
          width: vw - 40,
          alignSelf: 'center',
          paddingTop: 20,
        }}>
        <View style={{alignItems: 'center'}}>
          <Image source={checkCircle} resizeMode="contain" />
          <Text
            style={{
              marginVertical: 5,
              fontWeight: '600',
              fontSize: 26,
              color: '#000000',
            }}>
            {title}
          </Text>
          <Text
            style={{
              marginBottom: 30,
              marginTop: 10,
              textAlign: 'center',
              lineHeight: 22,
              color: '#5E6F88',
              fontSize: 16,
            }}>
            {text}
          </Text>
        </View>
        {date || time || location ? (
          <View
            style={{
              marginVertical: 30,
            }}>
            <Text style={{padding: 10, color: '#000', fontWeight: '500'}}>
              &nbsp;
              <Image source={dateIcon} />
              &nbsp; &nbsp;{date}
            </Text>
            <Text style={{padding: 10, color: '#000', fontWeight: '500'}}>
              &nbsp;
              <Image source={timeIcon} />
              &nbsp; &nbsp;{time}
            </Text>
            <Text style={{padding: 10, color: '#000', fontWeight: '500'}}>
              &nbsp; &nbsp;
              <Image source={locationIcon} style={{}} />
              &nbsp; &nbsp;{location}
            </Text>
          </View>
        ) : null}

        {button ? (
          <RedLongButton
            onPress={() => {
              navigation.navigate('CovidTestForm3');
            }}
            buttonText="View Appointment"
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default FormSubmit;
