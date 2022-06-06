import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RedLongButton from '../../component/RedLongButton';
import firebase from 'firebase';

function ProfileScreen(props) {
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(res => {
        console.log('logout');
      })
      .catch(err => console.log(err));
  };
  return (
    <View style={styles.container}>
      <View style={{width: '90%'}}>
        <RedLongButton buttonText="Logut" onPress={handleLogout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default ProfileScreen;
