import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import AppointmentConfirmed from '../AppointemenList/AppointmentConfirmed';
import AppointmentPending from '../AppointemenList/AppointmentPending';
import AppointmentHistory from '../AppointemenList/AppointmentHistory';

const AppointmentTabs = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FE284D',
        tabBarInactiveTintColor: '#5E6F88',

        tabBarPressColor: 'pink',
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '500',
        },
        tabBarIndicatorStyle: {backgroundColor: '#FE284D', height: 2},
      }}>
      <Tab.Screen name="CONFIRMED" component={AppointmentConfirmed} />
      <Tab.Screen name="PENDING" component={AppointmentPending} />
      <Tab.Screen name="HISTORY" component={AppointmentHistory} />
    </Tab.Navigator>
  );
};

export default AppointmentTabs;
