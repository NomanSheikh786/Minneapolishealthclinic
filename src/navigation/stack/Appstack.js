import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../../container/app/HomeScreen';
import PrimaryScreen from '../../container/app/PrimaryScreen';
import CalenderScreen from '../../container/app/CalenderScreen';
import ChatScreen from '../../container/app/ChatScreen';
import NotificationScreen from '../../container/app/NotificationScreen';
import ProfileScreen from '../../container/app/ProfileScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrimaryScreen"
        component={PrimaryScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const CalenderStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CalenderScreen"
        component={CalenderScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const NotificationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export {HomeStack, CalenderStack, ChatStack, NotificationStack, ProfileStack};
