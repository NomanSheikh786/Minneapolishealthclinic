import React from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import {vw} from '../../constaint';
import FaqTabs from './FAQ';

function FaqScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: vw - 40, marginVertical: 15, marginLeft: 20}}>
        <Text
          style={{
            fontSize: 22,
            color: '#000',
            fontWeight: '500',
            lineHeight: 25,
          }}>
          FAQ's
        </Text>
      </View>

      <FaqTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default FaqScreen;
