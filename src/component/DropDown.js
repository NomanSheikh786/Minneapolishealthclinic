import {Select, CheckIcon, Text, TouchableOpacity, View} from 'native-base';
import React from 'react';
import {vw} from '../constaint';

function DropDown({
  state,
  setState,
  data,
  label,
  direction,
  placeholder,
  noLabel,
  dataObj,
}) {
  return (
    <>
      {direction ? (
        <Select
          w={vw / 3.5}
          borderRadius={8}
          borderColor={'#B2BAC6'}
          borderWidth={1}
          shadow={'0.5'}
          selectedValue={state}
          accessibilityLabel={placeholder}
          placeholder={placeholder}
          onValueChange={setState}
          placeholderTextColor={'#5E6F88'}
          fontSize={12}
          p={3}
          color={'#5E6F88'}
          style={{backgroundColor: '#FFF'}}
          _selectedItem={{
            backgroundColor: '#FE284D',
          }}>
          {data.map((e, i) => {
            return (
              <Select.Item
                backgroundColor={'#FAFAFA'}
                label={e}
                value={e}
                key={i}
              />
            );
          })}
        </Select>
      ) : (
        <View style={{marginVertical: 5}}>
          {noLabel ? null : (
            <Text
              style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
              mt={5}
              my={2}>
              {label}
            </Text>
          )}

          <Select
            w={'100%'}
            borderRadius={8}
            borderColor={'#B2BAC6'}
            borderWidth={1}
            shadow={'0.5'}
            selectedValue={state}
            accessibilityLabel={placeholder}
            placeholder={placeholder}
            onValueChange={setState}
            placeholderTextColor={'#5E6F88'}
            fontSize={14}
            p={3}
            color={'#5E6F88'}
            style={{backgroundColor: '#FFF'}}
            _selectedItem={{
              backgroundColor: '#FE284D',
            }}>
            {data.map((e, i) => {
              return (
                <Select.Item
                  backgroundColor={'#FAFAFA'}
                  label={e}
                  value={e}
                  key={i}
                />
              );
            })}
          </Select>
        </View>
      )}
    </>
  );
}

export default DropDown;
