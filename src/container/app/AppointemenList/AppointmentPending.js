import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Appointmentdata} from '../../../component/FormData';
import {vh, vw} from '../../../constaint';
import time from '../../../assets/time.png';
import Calendar_check from '../../../assets/Calendar_check.png';
function AppointmentPending(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={Appointmentdata}
        contentContainerStyle={{paddingBottom: 70}}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, ind) => ind.toString()}
        renderItem={({item}) => {
          return (
            <>
              <TouchableOpacity
                activeOpacity={0.9}
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  marginVertical: 5,
                  height: vh / 4,

                  paddingLeft: 20,
                  elevation: 3,
                  width: vw,
                  paddingTop: 10,
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
                </View>
                <View
                  style={{
                    // marginLeft: 20,
                    width: '80%',

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
                      marginTop: 3,
                      // borderWidth: 1,
                      // borderColor: 'red',
                    }}>
                    <Image
                      source={Calendar_check}
                      style={{width: 16, height: 16}}
                    />
                    <Text
                      style={{
                        color: '#000',
                        fontSize: 12,
                        fontWeight: '500',
                        marginLeft: 5,
                      }}>
                      10 Jun 2022
                    </Text>
                    <Image
                      source={time}
                      style={{width: 16, height: 16, marginLeft: 5}}
                    />
                    <Text
                      style={{
                        color: '#000',
                        fontSize: 12,
                        fontWeight: '500',
                        marginLeft: 5,
                      }}>
                      09:15 PM
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      marginRight: 10,
                    }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#FFF',
                        width: vw / 5,
                        height: vh / 22,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: vh / 25,
                        borderWidth: 0.7,
                        borderColor: '#B2BAC6',

                        borderRadius: 50,
                        elevation: 3,
                      }}>
                      <Text style={{color: '#5E6F88', fontWeight: '500'}}>
                        Cancel
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#27B552',
                        width: vw / 5,
                        height: vh / 22,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: vh / 25,
                        // borderWidth: 0.7,
                        // borderColor: '#B2BAC6',
                        borderRadius: 50,
                        elevation: 3,
                        marginLeft: 10,
                      }}>
                      <Text style={{color: '#FFF', fontWeight: '500'}}>
                        Play
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default AppointmentPending;
