import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from "../stack/Authstack"     


const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default Navigation