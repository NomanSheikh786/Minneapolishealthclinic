import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Faqdata} from '../../../component/faqData';
import {vw, vh} from '../../../constaint/index';
import up from '../../../assets/up.png';
import down from '../../../assets/down.png';
import RedLongButton from '../../../component/RedLongButton';

function Payment(props) {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [abc, setAbc] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{paddingBottom: 60}}>
        <View
          style={{
            width: vw - 40,
            flexGrow: 1,
            marginTop: 10,
            alignSelf: 'center',
          }}>
          {Faqdata.map(({question, answer}, index) => {
            console.log(currentIndex);
            return (
              <TouchableOpacity
                onPress={() =>
                  setCurrentIndex(
                    index == currentIndex ? null : abc ? setAbc(false) : index,
                  )
                }
                key={index}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: 12,
                  }}>
                  <Text
                    style={{
                      width: '70%',
                      lineHeight: 25,
                      color: '#000',
                      fontWeight: '500',
                      fontSize: 15,
                    }}>
                    {question}
                  </Text>

                  <View style={{width: '30%', alignItems: 'flex-end'}}>
                    {index == currentIndex || abc ? (
                      <Image source={up} />
                    ) : (
                      <Image source={down} />
                    )}
                  </View>
                </View>
                {index == currentIndex || abc ? (
                  <View>
                    <Text
                      style={{
                        width: '90%',
                        lineHeight: 20,
                        color: '#5E6F88',
                        fontSize: 12,
                      }}>
                      {answer}
                    </Text>
                  </View>
                ) : null}
              </TouchableOpacity>
            );
          })}
          <View style={{marginVertical: 20}}>
            <RedLongButton
              onPress={() => {
                setAbc(!abc);
                // navigation.navigate('CovidVaccineForm3');
              }}
              buttonText="See All"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default Payment;
