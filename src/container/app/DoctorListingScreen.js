import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import {vh, vw} from '../../constaint';
import profile from '../../assets/profile.png';
import time from '../../assets/time.png';
import phone from '../../assets/phone.png';
import {Appointmentdata} from '../../component/FormData';

function DoctorListingScreen({navigation, route}) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      {/* <View style={{marginTop: 20, marginLeft: 20}}>
        <Text
          style={{
            fontSize: 22,
            color: '#000',
            fontWeight: '500',
            lineHeight: 25,
          }}>
          Doctors
        </Text>
      </View> */}

      <FlatList
        data={Appointmentdata}
        contentContainerStyle={{paddingBottom: 70}}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={{marginTop: 20, marginLeft: 20}}>
            <Text
              style={{
                fontSize: 22,
                color: '#000',
                fontWeight: '500',
                lineHeight: 25,
              }}>
              Doctors
            </Text>
          </View>
        }
        keyExtractor={(item, ind) => ind.toString()}
        renderItem={({item}) => {
          return (
            <>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('DoctorListingDetailsScreen', {
                    item: item,
                  })
                }
                activeOpacity={0.9}
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  marginVertical: 10,
                  height: vh / 5,

                  // alignItems: 'center',
                  paddingLeft: 20,
                  elevation: 3,
                  width: vw,

                  // justifyContent: 'space-between',
                  // borderWidth: 1,
                  // borderColor: 'red',
                }}>
                <View
                  style={{
                    width: '20%',
                    justifyContent: 'space-between',
                    marginVertical: vh / 35,
                  }}>
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={{borderRadius: 7, width: 65, height: 65}}
                  />
                  {/* <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                      position: 'absolute',
                      bottom: 0,
                      left: 20,
                    }}>
                    <Image source={phone} resizeMode="contain" />
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '500',
                        color: '#000',
                        marginLeft: 5,
                      }}>
                      {item.phone}
                    </Text>
                  </View> */}
                </View>
                <View
                  style={{
                    // marginLeft: 20,
                    width: '50%',

                    marginVertical: vh / 40,
                  }}>
                  <Text
                    style={{color: '#000', fontWeight: 'bold', fontSize: 16}}>
                    {item.title}
                  </Text>

                  <Text
                    style={{color: '#5E6F88', fontSize: 14, marginVertical: 5}}>
                    {item.text}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      // marginLeft: 2,
                      alignItems: 'center',
                      // borderWidth: 1,
                      // borderColor: 'red',
                    }}>
                    <Image source={time} style={{width: 16, height: 16}} />

                    <Text
                      style={{
                        color: '#000',
                        fontSize: 12,
                        fontWeight: '500',
                        marginLeft: 5,
                      }}>
                      {item.date}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '30%',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    // paddingBottom: 20,
                    marginVertical: vh / 40,
                    // height: '100%',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('DoctorListingDetailsScreen', {
                        item: item,
                      })
                    }
                    style={{
                      backgroundColor: '#FE284D',
                      width: vw / 4,
                      height: vh / 22,
                      borderRadius: 50,
                      elevation: 3,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: '#FFF', fontWeight: '500'}}>
                      View Details
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </>
          );
        }}
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default DoctorListingScreen;
