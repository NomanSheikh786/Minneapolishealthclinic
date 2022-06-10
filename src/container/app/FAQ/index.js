import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import MemberShip from './MemberShip';
import Payment from './Payment';
import Speciality from './Speciality';
import Practice from './Practice';
import {vw} from '../../../constaint';

const FaqTabs = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FE284D',
        tabBarInactiveTintColor: '#5E6F88',
        tabBarScrollEnabled: true,
        tabBarPressColor: 'pink',
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '500',
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#FE284D',
          height: 2,
        },
      }}>
      <Tab.Screen name="MEMBERSHIP" component={MemberShip} />
      <Tab.Screen name="PAYMENT" component={Payment} />
      <Tab.Screen name="SPECIALITY" component={Speciality} />
      <Tab.Screen name="PRACTICE" component={Practice} />
    </Tab.Navigator>
  );
};

export default FaqTabs;
