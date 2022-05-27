import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const RedLongButton = props => {
  return (
    <View style={{width: '100%', height: 60}}>
      <TouchableOpacity style={style.loginbutn} onPress={props.onPress}>
        <Text style={style.textcolor}> {props.buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  loginbutn: {
    borderRadius: 8,
    height: 50,
    backgroundColor: '#FE284D',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textcolor: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
export default RedLongButton;
