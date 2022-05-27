// import bottom1 from '../../assets/bottom1';
import React from 'react';
import bottom1 from '../../assets/bottom1.png';
import bottom2 from '../../assets/bottom2.png';
import bottom3 from '../../assets/bottom3.png';
import bottom4 from '../../assets/bottom4.png';
import bottom5 from '../../assets/bottom5.png';
import bottom_home from '../../assets/bottom_home.png';
import {
  HomeStack,
  CalenderStack,
  ChatStack,
  NotificationStack,
  ProfileStack,
} from '../stack/Appstack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
function Tab() {
  const Tab = createBottomTabNavigator();

  const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        top: -15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
      }}
      onPress={onPress}>
      <View
        style={{
          width: 62,
          height: 62,
          borderRadius: 35,
          backgroundColor: '#FE284D',
          elevation: 2,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 2,
          backgroundColor: '#FFF',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 70,
        },
      }}
      // tabBarOptions={{
      //   showLabel: false,
      // }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Image width={20} source={bottom_home} />
            ) : (
              <Image width={20} source={bottom1} />
            ),
        }}
      />

      <Tab.Screen
        name="CalenderStack"
        component={CalenderStack}
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Image width={20} source={bottom_home} />
            ) : (
              <Image width={20} source={bottom2} />
            ),
        }}
      />

      <Tab.Screen
        name="ChatStack"
        component={ChatStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image width={20} source={bottom3} resizeMode="contain" />
          ),

          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="NotificationStack"
        component={NotificationStack}
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Image width={20} source={bottom_home} />
            ) : (
              <Image width={20} source={bottom4} />
            ),
        }}
      />

      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Image width={20} source={bottom_home} />
            ) : (
              <Image width={20} source={bottom5} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const BottomNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={Tab} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};
export default BottomNavigation;
