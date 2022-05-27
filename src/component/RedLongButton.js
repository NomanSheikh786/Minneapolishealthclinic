import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const RedLongButton = props => {
  return (
    <View>
      <TouchableOpacity style={style.loginbutn} onPress={props.onPress}>
        <Text style={style.textcolor}> {props.buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  loginbutn: {
    borderRadius: 8,
    width: 336,
    height: 50,
    paddingHorizontal: 100,
    backgroundColor: '#FE284D',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textcolor: {
    color: 'white',
    textAlign: 'center',
  },
});
export default RedLongButton;
