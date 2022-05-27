import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from '../stack/Authstack';
import BottomNavigation from '../bottom/BottonTab';
const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
