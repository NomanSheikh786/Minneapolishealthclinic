import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {
  CheckIcon,
  FormControl,
  HStack,
  Select,
  VStack,
  WarningOutlineIcon,
  View,
  Text,
} from 'native-base';
import {vh, vw} from '../../constaint/index';
import RedLongButton from '../../component/RedLongButton';
import DropDown from '../../component/DropDown';
import {
  month,
  day,
  year,
  gender,
  question,
  checking,
  country,
} from '../../component/FormData';
import {FormInput} from '../../component/FormInput';
import firebase from '../../configue/index';

function EditProfileScreen({navigation}) {
  const [genders, setGenders] = useState('');
  const [days, setDays] = useState('');
  const [months, setMonths] = useState('');
  const [years, setYears] = useState('');
  const [ques, setQues] = useState('');
  const [load, setLoad] = useState(false);
  const [updateLoader, setUpdateLoader] = useState(false);

  useEffect(() => {
    setLoad(true);
    try {
      let id = firebase.auth().currentUser.uid;
      if (!id) {
        console.log('user not found');
      } else {
        firebase
          .database()
          .ref(`users/${id}/userDetails`)
          .on('value', firebaseData => {
            let data = firebaseData.val();
            setLoad(false);

            setState({
              ...state,
              ['email']: data?.email ? data.email : '',
              ['fname']: data?.fname ? data.fname : '',
              ['lname']: data?.lname ? data.lname : '',
              ['gender']: data?.gender ? data.gender : '',
              ['month']: data?.dataOfBirth ? data?.dataOfBirth?.month : '',
              ['day']: data?.dataOfBirth ? data?.dataOfBirth?.day : '',
              ['year']: data?.dataOfBirth ? data?.dataOfBirth?.year : '',
              ['country']: data?.country ? data.country : '',
              ['phone']: data?.phone ? data.phone : '',
              ['address']: data?.address ? data.address : '',
            });
          });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const [state, setState] = useState({
    fname: '',
    lname: '',
    gender: '',
    day: '',
    month: '',
    year: '',
    country: '',
    email: '',
    phone: '',
    address: '',
  });
  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const userDetails = {
    fname: state.fname,
    lname: state.lname,
    phone: state.phone,
    email: state.email,
    gender: state.gender,
    dataOfBirth: {
      month: state.month,
      day: state.day,
      year: state.year,
    },
    country: state.country,
    address: state.address,
    isDoctor: false,
  };

  const updateProfile = () => {
    setUpdateLoader(true);
    firebase
      .database()
      .ref(`users/${id}`)
      .set({
        userDetails,
      })
      .then(res => {
        setUpdateLoader(false);
        alert('Update profile successfully');
      })
      .catch(err => {
        setUpdateLoader(false);
        alert('something went wrong');
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{paddingBottom: vh / 10}}
        showsVerticalScrollIndicator={false}
        style={{width: vw - 40, alignSelf: 'center'}}>
        <View style={{marginTop: 20}}>
          <Text
            style={{
              fontSize: 20,
              color: '#000',
              fontWeight: '500',
              lineHeight: 25,
            }}>
            Edit Profile
          </Text>
        </View>
        {load ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator color={'#FA284D'} size={'large'} />
          </View>
        ) : (
          <>
            <View style={{marginVertical: 5}}>
              <Text
                style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
                mt={5}
                my={2}>
                Name
              </Text>

              <FormInput
                state={state.fname}
                setState={text => handleChange('fname', text)}
                placeholder="First Name"
                multiple={true}
              />
              <FormInput
                state={state.lname}
                setState={text => handleChange('lname', text)}
                placeholder="Last Name"
                multiple={true}
              />
            </View>
            <DropDown
              state={state.gender}
              setState={text => handleChange('gender', text)}
              data={gender}
              label="Gender"
              placeholder="Select Your Gender"
            />

            <View style={{marginVertical: 5}}>
              <Text
                style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}
                mt={5}
                my={2}>
                Birth Date
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <DropDown
                  state={state.month}
                  setState={text => handleChange('month', text)}
                  placeholder="Month"
                  data={month}
                  direction={true}
                />
                <DropDown
                  state={state.day}
                  setState={text => handleChange('day', text)}
                  placeholder="Day"
                  data={day}
                  direction={true}
                />
                <DropDown
                  state={state.year}
                  setState={text => handleChange('year', text)}
                  placeholder="Year"
                  data={year}
                  direction={true}
                />
              </View>
            </View>
            <DropDown
              state={state.country}
              setState={text => handleChange('country', text)}
              data={country}
              label="Country"
              placeholder="Select Your Country"
            />

            <FormInput
              state={state.email}
              setState={text => handleChange('email', text)}
              placeholder="patient@example.com"
              label="E-mail Address"
            />
            <FormInput
              state={state.phone}
              setState={text => handleChange('phone', text)}
              placeholder="XXXX-XXXX-XXX"
              label="Phone Number"
            />
            <FormInput
              state={state.address}
              setState={text => handleChange('address', text)}
              placeholder="Type your address"
              label="Address"
            />

            <View style={{marginVertical: 20}}>
              {updateLoader ? (
                <ActivityIndicator color={'#FA284D'} size={'large'} />
              ) : (
                <RedLongButton
                  onPress={updateProfile}
                  buttonText="Update Profile"
                />
              )}
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default EditProfileScreen;
