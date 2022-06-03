import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {vh} from '../../constaint';

function PrimaryScreen({route, navigation}) {
  const {state} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: vh / 20,
        }}>
        <Image
          resizeMode="contain"
          style={{height: vh / 2.9}}
          source={state?.mainImage}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FE2F50',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}>
        <View
          style={{
            borderWidth: 1,
            height: 5,
            borderColor: '#F9F9F9',
            width: 75,
            alignSelf: 'center',
            marginVertical: vh / 50,
            borderRadius: 50,
          }}
        />
        <ScrollView contentContainerStyle={{paddingBottom: vh / 7}}>
          <View
            style={{
              paddingHorizontal: 20,
              // flex: 1,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#FFF',
                fontSize: 22,
                fontWeight: '500',
              }}>
              {state?.name}
            </Text>
            <Text
              numberOfLines={5}
              style={{
                color: '#FFF',
                fontSize: 12,
                opacity: 0.7,
                marginTop: vh / 40,
                lineHeight: 15,
              }}>
              {state?.des}
            </Text>
            <Text
              numberOfLines={2}
              style={{
                fontSize: 16,
                color: '#FFF',
                marginTop: vh / 40,
                paddingRight: 10,
              }}>
              {state.title}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('FormScreen', {state: state})}
              activeOpacity={0.6}
              style={{
                backgroundColor: '#FFF',
                borderRadius: 8,
                height: vh / 14,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: vh / 20,
              }}>
              <Text style={{color: '#FE2F50', fontSize: 16, fontWeight: '500'}}>
                Click Here
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default PrimaryScreen;
