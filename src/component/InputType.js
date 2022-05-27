import {View, Text, TextInput} from 'react-native';
import React from 'react';

export default function InputType(props) {
  return (
    <View style={{width: "100%", height: 60}}>
      <TextInput
        style={{
          fontSize: 14,
          color: '#5E6F88',
          borderWidth: 1,
          borderColor: '#B2BAC6',
          borderRadius: 8,
          paddingHorizontal:10
         
        }}
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        placeholderTextColor="#5E6F88"
        value={props.value}
        // onChangeText={val => props.changeState(val)}
      />
    </View>
  );
}
