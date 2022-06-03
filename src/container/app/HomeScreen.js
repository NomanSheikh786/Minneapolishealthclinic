import { Alert, CloseIcon, HStack, IconButton, VStack } from 'native-base';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {vh, vw} from '../../constaint';

const data = [
  {
    id: 1,
    name: 'Medical Tourism',
    image: require('../../assets/icon1.png'),
    mainImage: require('../../assets/doctor1.png'),
    des: 'Primary care includes health promotion, disease prevention, health maintenance, counseling, patient education, diagnosis and treatment of acute and chronic illnesses.',
    title: 'Request an Appointment',
  },
  {
    id: 2,
    name: 'Primary Care',
    image: require('../../assets/icon2.png'),
    mainImage: require('../../assets/doctor1.png'),
    des: 'Primary care includes health promotion, disease prevention, health maintenance, counseling, patient education, diagnosis and treatment of acute and chronic illnesses.',
    title: 'Request an Appointment',
  },
  {
    id: 3,
    name: 'Aesthetic Services',
    image: require('../../assets/icon3.png'),
    mainImage: require('../../assets/doctor2.png'),
    des: 'Enhance your beauty and find new confidence with our aesthetic services. This includes, fillers and injectables targeted to treat: Forehead wrinkles, Frown lines, Crows feet, Naso labial fold wrinkles/grooves, Lip and smile lines.',
    title: 'For Aesthetic Injections, Fillers & Anti-Aging Service Appointment',
  },
  {
    id: 4,
    name: 'Medical Weight Loss',
    image: require('../../assets/icon4.png'),
    mainImage: require('../../assets/doctor3.png'),
    des: 'Join our proactive management of diet, fitness, and healthy behaviors conducted by our medical team. Our program includes comprehensive metabolic testing to monitor physiological shifts during the course of the program. Enroll in our Medical Weight loss program.',
    title: 'Enroll Today!',
  },
  {
    id: 5,
    name: 'Covid-19 Testing',
    image: require('../../assets/icon5.png'),
    mainImage: require('../../assets/doctor4.png'),
    des: "If you are worried that you have been exposed to the COVID-19 virus, we can provide testing and give you results in 30 minutes.  Don't delay, contact us today for testing.",
    title: 'Get COVID-19 Testing',
  },
  {
    id: 6,
    name: 'Covid-19 Treatment',
    image: require('../../assets/icon6.png'),
    mainImage: require('../../assets/doctor5.png'),
    des: 'We are able to provide FREE COVID-19 treatment medications. For Appointment request',
    title: 'Request an Appointment',
  },
  {
    id: 7,
    name: 'Covid-19 Vaccine Form',
    image: require('../../assets/icon7.png'),
    mainImage: require('../../assets/doctor6.png'),
    des: 'This form will help us determine if there is any reason you should not get the COVID-19 vaccine the day of your appointment.You can also schedule your appointment here.',
    title: 'For your COVID-19 Appointment and Consent Form.',
  },
  {
    id: 8,
    name: 'Immigration Exams & Forms',
    image: require('../../assets/icon8.png'),
    mainImage: require('../../assets/doctor7.png'),
    des: 'Schedule a convenient appointment for a hustle free green card medical exam. We will complete your I-693 form and ensure you have your immunizations. Your documents will be ready in 1 week. We are able to expedite  the process sometimes when urgent.',
    title: 'Call Now 763-496-5708 with more Questions',
  },
  {
    id: 9,
    name: 'Lipocel Appointment',
    image: require('../../assets/icon9.png'),
    mainImage: require('../../assets/doctor8.png'),
    des: 'Are you having a hard time with stubborn fat that remains even after exercising and making healthy food choices? Come and  try our  pain free, non invasive fat removal body contouring procedure. Get 50% off from your first package of 3.',
    title: 'Lipocel Appointment Request',
  },
  {
    id: 10,
    name: 'Pre-Op Evaluations',
    image: require('../../assets/icon10.png'),
    mainImage: require('../../assets/doctor9.png'),
    des: 'Before surgery, your surgeon will require you to have a comprehensive physical examination within 30 days of your scheduled surgery date.',
    title: 'Request an Appointment',
  },
];

function HomeScreen({navigation}) {
    // const [check,setCheck] =useState(false)

  return (
    <View style={styles.container}>

{/* {check ? <Alert w="100%" status={"success"}>
              <VStack space={2} flexShrink={1} w="100%">
                <HStack flexShrink={1} space={2} justifyContent="space-between">
                  <HStack space={2} flexShrink={1}>
                    <Alert.Icon mt="1" />
                    <Text fontSize="md" color="coolGray.800">
                    Selection successfully moved!
                    </Text>
                  </HStack>
                  <IconButton variant="unstyled" _focus={{
                borderWidth: 0
              }} icon={<CloseIcon size="3" color="coolGray.600" />} />
                </HStack>
              </VStack>
            </Alert> : null} */}
      <View
        style={{
          backgroundColor: '#FFF',
          width: vw,
          height: vh / 3.3,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          justifyContent: 'center',
          paddingHorizontal: 19,
        }}>
        <View style={{}}>
          <Text style={{color: '#5E6F88', fontSize: 16, marginVertical: 5}}>
            Hello, User
          </Text>
          <Text style={{fontSize: 22, fontWeight: '500', color: '#FA284D'}}>
            Let's Find Out Services!
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'red',
            marginTop: 30,
            width: '100%',
            height: vh / 14,
            backgroundColor: '#FA284D',
            borderRadius: 8,
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 12,
            alignItems: 'center',
            elevation: 3,
            shadowOffset: {width: 10, height: 10},
          }}>
          <TextInput
            style={{
              color: '#FFF',
              borderRadius: 8,
              fontSize: 14,
              width: '90%',
            }}
            placeholder="Search out services"
            placeholderTextColor={'#FFF'}
          />
          <Image source={require('../../assets/search.png')} />
        </View>
      </View>

      <View style={{}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 15,
            paddingHorizontal: 20,
          }}>
          <Text style={{color: '#FFF', fontSize: 15}}>What do you need</Text>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={{color: '#FFF', fontSize: 14}}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{}}
          contentContainerStyle={{
            paddingBottom: vh / 2,
            flexDirection: 'row',
            flexWrap: 'wrap',
            // borderWidth: 1,
            // borderColor: 'green',
            // marginLeft: vw / 20,
          }}>
          {data.map((item, ind) => {
            return (
              <View
                key={ind}
                style={{
                  // marginHorizontal: '5%',
                  marginVertical: '3%',
                  paddingHorizontal: vw / 18,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('PrimaryScreen', {state: item})
                  }
                  style={{
                    backgroundColor: 'white',
                    width: vw / 4.5,
                    height: vh / 7.5,
                    elevation: 3,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={item.image} />
                </TouchableOpacity>
                <View
                  style={{width: vw / 4.5, alignItems: 'center', marginTop: 5}}>
                  <Text
                    style={{color: '#FFF', fontSize: 12, textAlign: 'center'}}>
                    {item.name}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FA284D'},
});

export default HomeScreen;
