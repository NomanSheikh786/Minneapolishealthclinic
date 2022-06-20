import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import AppointmentConfirmed from '../AppointemenList/AppointmentConfirmed';
import AppointmentPending from '../AppointemenList/AppointmentPending';
import AppointmentHistory from '../AppointemenList/AppointmentHistory';

const AppointmentTabs = ({data, allData, navigation}) => {
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
      <Tab.Screen
        name="CONFIRMED"
        children={() => <AppointmentConfirmed data={data} allData={allData} />}
      />
      <Tab.Screen
        name="PENDING"
        children={() => <AppointmentPending data={data} allData={allData} />}
      />
      <Tab.Screen
        name="HISTORY"
        children={() => (
          <AppointmentHistory
            navigation={navigation}
            data={data}
            allData={allData}
          />
        )}
        // component={AppointmentHistory}
      />
    </Tab.Navigator>
  );
};

export default AppointmentTabs;
