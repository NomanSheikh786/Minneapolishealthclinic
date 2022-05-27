import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CheckEmailScreen from '../../container/auth/CheckEmailScreen';
import SplashScreenLogin from '../../container/auth/SplashScreenLogin';
import SplashScreenLogo from '../../container/auth/SplashScreenLogo';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="SplashScreenLogin"
        component={SplashScreenLogin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SplashScreenLogo"
        component={SplashScreenLogo}
        options={{headerShown: false}}
      /> */}

      <Stack.Screen
        name="CheckEmailScreen"
        component={CheckEmailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
