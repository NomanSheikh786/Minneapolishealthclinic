import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import {appointments} from '../../component/FormData';
import firebase from '../../configue/index';

function DoctorUserFormScreen({route, navigation}) {
  const {item} = route.params;
  const [load, setLoad] = useState(false);
  const [data, setData] = useState(Object.values(item.id));
  // const arrayResult = Object.keys(item.data.forms).map(room => {
  //   return {formName: room, data: item.data.forms[room]};
  // });

  // setData();
  let formData = [];
  firebase
    .database()
    .ref(`users/`)
    .on('value', function (snapshot) {
      if (snapshot.val() == null) {
        setLoad(false);
        alert('No data found');
      } else {
        snapshot.forEach(function (data) {
          const userForms = data.child('forms/Medical Weight Loss/2022-06-17');
          userForms.forEach(childSnap => {
            const form = childSnap.val();
            formData.push(form);
          });
        });
      }
    });

  console.log(item.id);
  return (
    <SafeAreaView style={styles.container}>
      {load ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} color={'red'} />
        </View>
      ) : (
        <FlatList
          ListHeaderComponent={
            <View style={{marginLeft: 20, marginTop: 20}}>
              <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
                Forms List
              </Text>
            </View>
          }
          data={appointments}
          keyExtractor={(item, ind) => ind.toString()}
          ListEmptyComponent={
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: 'black', fontSize: 18}}>No Forms Found</Text>
            </View>
          }
          renderItem={({item}) => {
            // console.log(Object.values(item).map(s => console.log(s.ss)));
            // console.log(item);
            return (
              <TouchableOpacity
                // onPress={() =>
                //   navigation.navigate('DoctorUserFormScreen', {item: item})
                // }
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: 'lightgrey',
                  width: '90%',
                  alignSelf: 'center',
                  paddingVertical: 15,
                  paddingHorizontal: 10,
                  borderRadius: 7,
                  margin: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                {/* <Text style={{color: 'black', fontSize: 16}}>
                  {item?.formName.forms}
                </Text> */}

                <Image
                  source={require('../../assets/nav.png')}
                  resizeMode={'contain'}
                  style={{height: 15, width: 15}}
                />
              </TouchableOpacity>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default DoctorUserFormScreen;
