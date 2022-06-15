import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Button,
  Modal,
  VStack,
  HStack,
  Text,
  Radio,
  Center,
  NativeBaseProvider,
} from 'native-base';

const Modaal = ({userName, showModal, setShowModal, onPress}) => {
  return (
    <View>
      <Center>
        {/* <Button onPress={() => setShowModal(true)}>Button</Button> */}
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
          <Modal.Content maxWidth="350">
            <Modal.CloseButton />
            <Modal.Header>Logout Account</Modal.Header>
            <Modal.Body>
              <VStack space={3}>
                <HStack alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">
                    Are you sure you want to logout of
                    <Text style={{fontWeight: 'bold'}}> {userName} </Text>
                    account?
                  </Text>
                  {/* <Text color="blueGray.400">$298.77</Text> */}
                </HStack>
                {/* <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Tax</Text>
                <Text color="blueGray.400">$38.84</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Total Amount</Text>
                <Text color="green.500">$337.61</Text>
              </HStack> */}
              </VStack>
            </Modal.Body>
            <Modal.Footer>
              <Button
                backgroundColor={'#FE284D'}
                onPress={onPress}
                width={'300'}
                borderRadius={'md'}>
                confirmation
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
    </View>
  );
};

export default Modaal;
