import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const WhiteButton = props => {
  return (
    <View style={{ width: "100%",height:60}}>
      <TouchableOpacity style={style.loginbutn} onPress={props.onPress}>
        <Text style={style.textcolor}> {props.buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  loginbutn: {
    borderRadius: 8,
    borderWidth:1.5,
    height:50,
    borderColor:"#B2BAC6",
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textcolor: {
    color: '#5E6F88',
    textAlign: 'center',
  },
});
export default WhiteButton;
