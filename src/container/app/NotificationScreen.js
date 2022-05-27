import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function NotificationScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Notification Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default NotificationScreen;
