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
import star from '../../assets/star.png';
// import camera from '../../assets/camera.png';
import time from '../../assets/time.png';
// import cameraWhite from '../../assets/camera-white.png';
import day from '../../assets/day.png';
import fee from '../../assets/fee.png';

function DoctorListingDetailsScreen({navigation, route}) {
  const {item} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{paddingBottom: 70}}>
        <View style={{width: vw / 1.09, marginTop: 20, alignSelf: 'center'}}>
          <Text
            style={{
              fontSize: 22,
              color: '#000',
              fontWeight: '500',
              lineHeight: 25,
            }}>
            Doctor Profile
          </Text>
        </View>

        <View
          style={{
            width: vw / 1.09,
            flexDirection: 'row',
            marginVertical: vh / 50,
            height: vh / 8,
            alignSelf: 'center',
          }}>
          <View style={{width: '25%', paddingTop: 10}}>
            <Image
              source={item.image}
              resizeMode="contain"
              style={{width: 75, height: 75, borderRadius: 7}}
            />
          </View>
          <View
            style={{
              width: '75%',
              justifyContent: 'space-evenly',
            }}>
            <Text style={{fontWeight: '500', fontSize: 16, color: '#000'}}>
              {item.title}
            </Text>
            <Text style={{color: '#5E6F88', fontSize: 12}}>{item.text}</Text>
            <Text style={{color: '#5E6F88', fontSize: 12}}>
              Minneapolis Health Clinic
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Image source={star} resizeMode="contain" />
              <Image source={star} resizeMode="contain" />
              <Image source={star} resizeMode="contain" />
              <Image source={star} resizeMode="contain" />
              <Image source={star} resizeMode="contain" />
            </View>
          </View>
        </View>
        <View
          style={{
            width: vw / 1.09,
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 1,
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            width: vw / 1.09,
            justifyContent: 'space-evenly',
            marginVertical: vh / 50,
            height: vh / 12,

            alignSelf: 'center',
          }}>
          <Text style={{color: '#000', fontWeight: '500', fontSize: 16}}>
            Working Hours
          </Text>
          <Text style={{color: '#5E6F88', fontSize: 12}}>{item.date}</Text>
        </View>
        <View
          style={{
            width: vw / 1.09,
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 1,
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            width: vw / 1.09,
            justifyContent: 'space-evenly',
            marginVertical: vh / 50,
            height: vh / 12,

            alignSelf: 'center',
          }}>
          <Text style={{color: '#000', fontWeight: '500', fontSize: 16}}>
            Specilities{' '}
          </Text>
          <Text style={{color: '#5E6F88', fontSize: 12}}>
            Telemedicines and Wellness
          </Text>
        </View>
        <View
          style={{
            width: vw / 1.09,
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 1,
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            width: vw / 1.09,
            justifyContent: 'space-evenly',
            marginVertical: vh / 50,
            height: vh / 7,

            alignSelf: 'center',
          }}>
          <Text style={{color: '#000', fontWeight: '500', fontSize: 16}}>
            About
          </Text>
          <Text style={{color: '#5E6F88', fontSize: 12, lineHeight: 16}}>
            Grace Totoe is a board-certified internist with the American Board
            of Internal Medicine and the medical director and managing partner
            at Minneapolis Heath Clinic, PLLC. She has over 14 years of
            experience in the healthcare industry...
          </Text>
        </View>
        {/* <View
          style={{
            width: vw / 1.09,
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 1,
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            width: vw / 1.09,
            marginVertical: vh / 50,
            alignSelf: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={camera}
              style={{width: 20, height: 20}}
              resizeMode="contain"
            />
            <Text
              style={{
                color: '#000',
                fontWeight: '500',
                fontSize: 16,
                marginLeft: 10,
              }}>
              Book Video Consultation
            </Text>
          </View>

          <Text
            style={{
              color: '#5E6F88',
              fontSize: 12,
              marginLeft: 10,
              marginTop: 5,
            }}>
            Audio / Video
          </Text>
          <View
            style={{
              elevation: 2,
              padding: 10,
              marginVertical: 10,
              borderRadius: 5,
              backgroundColor: '#FFF',
            }}>
            <View style={{marginTop: 10}}>
              <Text style={{color: '#5E6F88', fontWeight: '500'}}>
                Consultation Fee
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Image
                  source={fee}
                  style={{width: 15, height: 15}}
                  resizeMode="contain"
                />
                <Text style={{fontWeight: '500', marginLeft: 5, color: '#000'}}>
                  $399
                </Text>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{color: '#5E6F88', fontWeight: '500'}}>Days</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Image
                  source={day}
                  style={{width: 15, height: 15}}
                  resizeMode="contain"
                />
                <Text style={{fontWeight: '500', marginLeft: 5, color: '#000'}}>
                  Mon, Tue, Wed, Thu, Fri
                </Text>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{color: '#5E6F88', fontWeight: '500'}}>Time:</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Image
                  source={time}
                  style={{width: 15, height: 15}}
                  resizeMode="contain"
                />
                <Text style={{fontWeight: '500', marginLeft: 5, color: '#000'}}>
                  03:00 PM - 07:00 PM
                </Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#FE284D',
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 20,
            width: vw / 1.09,
            alignSelf: 'center',
            padding: 15,
            borderRadius: 7,
            alignItems: 'center',
          }}>
          <Image
            source={cameraWhite}
            style={{width: 20, height: 20}}
            resizeMode="contain"
          />
          <Text style={{color: '#FFF', fontSize: 16, marginLeft: 10}}>
            Book Video Consultation
          </Text>
        </TouchableOpacity> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default DoctorListingDetailsScreen;
