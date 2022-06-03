import {TextInput} from 'react-native';
import React from 'react';
import {View, Text, Checkbox} from 'native-base';
import {vw} from '../constaint';
function FormInput(props) {
  return (
    <>
      {props.multiple ? (
        <TextInput
          style={{
            fontSize: 14,
            color: '#5E6F88',
            borderWidth: 1,
            borderColor: '#B2BAC6',
            borderRadius: 8,
            padding: 10,
            height: props.height,
            textAlignVertical: props.textAlignVertical,
            marginBottom: 5,
            marginTop: 5,
          }}
          secureTextEntry={props.secureTextEntry}
          placeholder={props.placeholder}
          placeholderTextColor="#5E6F88"
          value={props.value}
          multiline={props.multiline}
          numberOfLines={props.numberOfLines}
          // onChangeText={val => props.changeState(val)}
        />
      ) : (
        <View style={{marginVertical: 5}}>
          <Text
            style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
            mt={5}
            my={2}>
            {props.label}
          </Text>
          <TextInput
            style={{
              fontSize: 14,
              color: '#5E6F88',
              borderWidth: 1,
              borderColor: '#B2BAC6',
              borderRadius: 8,
              padding: 10,
              height: props.height,
              textAlignVertical: props.textAlignVertical,
            }}
            secureTextEntry={props.secureTextEntry}
            placeholder={props.placeholder}
            placeholderTextColor="#5E6F88"
            value={props.value}
            multiline={props.multiline}
            numberOfLines={props.numberOfLines}
            // onChangeText={val => props.changeState(val)}
          />
        </View>
      )}
    </>
  );
}

const CheckBox = ({text, checkboxValue}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
      }}>
      <Checkbox
        size={'sm'}
        value={checkboxValue}
        accessibilityLabel={checkboxValue}>
        <Text style={{fontSize: 14}}>{text}</Text>
      </Checkbox>
    </View>
  );
};

export {FormInput, CheckBox};
