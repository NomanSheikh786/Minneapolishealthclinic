import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SpaceGrayButton = props => {
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
    borderWidth: 1,
    height: 55,
    borderColor: '#B2BAC6',
    elevation:1,
    backgroundColor: '#E9E9EB',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textcolor: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 17,
    fontWeight:"bold"
  },
});
export default SpaceGrayButton;
