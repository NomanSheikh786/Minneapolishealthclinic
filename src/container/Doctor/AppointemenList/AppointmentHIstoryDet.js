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
import {vh, vw} from '../../../constaint';
import star from '../../../assets/star.png';
import time from '../../../assets/time.png';
import day from '../../../assets/day.png';
import fee from '../../../assets/fee.png';

function AppointmentHIstoryDet({navigation, route}) {
  const {item} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{paddingBottom: 80}}>
        <View style={{width: vw / 1.09, marginTop: 20, alignSelf: 'center'}}>
          <Text
            style={{
              fontSize: 22,
              color: '#000',
              fontWeight: '500',
              lineHeight: 25,
            }}>
            History
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
            height: vh / 10,

            alignSelf: 'center',
          }}>
          <Text
            numberOfLines={3}
            style={{color: '#000', fontWeight: '500', fontSize: 14}}>
            Symptoms
          </Text>
          <Text style={{color: '#5E6F88', fontSize: 12}}>
            Cold or viral infection, such as the flu. It consists of a cough
            with mucus, chest discomfort or soreness, fever and sometimes
            shortness of breath.
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
            height: vh / 10,

            alignSelf: 'center',
          }}>
          <Text style={{color: '#000', fontWeight: '500', fontSize: 14}}>
            Notes
          </Text>
          <Text numberOfLines={3} style={{color: '#5E6F88', fontSize: 12}}>
            Normal body temperature varies depending on age, activity, and time
            of day. The average normal body temperature is 98.6°F (37°C).
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
          <Text style={{color: '#000', fontWeight: '500', fontSize: 14}}>
            Prescription
          </Text>
          <Text style={{color: '#5E6F88', fontSize: 12, lineHeight: 16}}>
            Fluxamin 500mg
          </Text>
          <Text style={{color: '#000', fontWeight: '500', fontSize: 14}}>
            Dosage
          </Text>
          <Text style={{color: '#5E6F88', fontSize: 12, lineHeight: 16}}>
            03 Times (Morning + Afternoon + Evening)
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
          <Text
            style={{
              color: '#5E6F88',
              fontSize: 14,
              lineHeight: 16,
              fontWeight: 'bold',
            }}>
            Naproxen 250mg
          </Text>
          <Text style={{color: '#000', fontWeight: '500', fontSize: 14}}>
            Dosage
          </Text>
          <Text style={{color: '#5E6F88', fontSize: 12, lineHeight: 16}}>
            03 Times (Morning + Afternoon + Evening)
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
          <Text
            style={{
              color: '#5E6F88',
              fontSize: 14,
              lineHeight: 16,
              fontWeight: 'bold',
            }}>
            Lexapro 100mg
          </Text>
          <Text style={{color: '#000', fontWeight: '500', fontSize: 14}}>
            Dosage
          </Text>
          <Text style={{color: '#5E6F88', fontSize: 12, lineHeight: 16}}>
            03 Times (Morning + Afternoon + Evening)
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default AppointmentHIstoryDet;
