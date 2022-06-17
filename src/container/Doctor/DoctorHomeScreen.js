import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import firebase from '../../configue/index';

function DoctorHomeScreen(props) {
  const [load, setLoad] = useState(false);
  let id = firebase.auth().currentUser.uid;
  useEffect(() => {
    setLoad(true);
    firebase
      .database()
      .ref(`users/${id}/userDetails`)
      .on('value', firebaseData => {
        let data = firebaseData.val();
        setName(data?.email ? data?.email : 'Unkown');
        setLoad(false);
      });
  }, []);
  return (
    <View style={styles.container}>
      {/* <FlatList data={data} keyExtractor={(item,ind) => ind.toString()} renderItem={({}) => {
        return(
            <TouchableOpacity>

            </TouchableOpacity>
        )
    }}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default DoctorHomeScreen;
