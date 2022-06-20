import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
// import {Appointmentdata} from '../../../component/FormData';
import {vh, vw} from '../../../constaint';
import time from '../../../assets/time.png';
import Calendar_check from '../../../assets/Calendar_check.png';
function AppointmentHistory({data, navigation}) {
  const doctorData = {
    title: 'Grace Totoe, Md, FACP',
    text: 'Telemedicine Doctor',
    date: '10 Jun 2022',
    time: '09:15 PM',
    image: require('../../../assets/profile.png'),
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={{paddingBottom: 70}}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, ind) => ind.toString()}
        ListEmptyComponent={
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 22, marginTop: vh / 3}}>
              No Data Found !
            </Text>
          </View>
        }
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
                    source={doctorData.image}
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
                    {doctorData.title}
                  </Text>

                  <Text
                    style={{color: '#5E6F88', fontSize: 14, marginVertical: 5}}>
                    {doctorData.text}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      marginTop: 3,
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
                      {doctorData.date}
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
                      {doctorData.time}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      marginRight: 10,
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('AppointmentHistoryDetails', {
                          item: doctorData,
                        })
                      }
                      style={{
                        backgroundColor: '#FE284D',
                        width: vw / 4,
                        height: vh / 22,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: vh / 25,
                        // borderWidth: 0.7,
                        // borderColor: '#B2BAC6',
                        borderRadius: 5,
                        elevation: 3,
                        marginRight: 10,
                      }}>
                      <Text style={{color: '#FFF', fontWeight: '500'}}>
                        View Details
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

export default AppointmentHistory;
