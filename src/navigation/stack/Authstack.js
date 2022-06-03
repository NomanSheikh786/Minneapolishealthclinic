import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Form1 from '../../component/primaryCaseForm/Form1';
import Form2 from '../../component/primaryCaseForm/Form2';
import Form3 from '../../component/primaryCaseForm/Form3';
import FormScreen from '../../container/app/FormScreen';
import CheckEmailScreen from '../../container/auth/CheckEmailScreen';
import CreatePasswrod from '../../container/auth/CreatePasswrod';
import ForgotPassword from '../../container/auth/ForgotPassword';
import LoginScreen from '../../container/auth/LoginScreen';
import SignUp from '../../container/auth/SignUp';
import SplashScreenLogin from '../../container/auth/SplashScreenLogin';
import SplashScreenLogo from '../../container/auth/SplashScreenLogo';
import BottomNavigation from '../bottom/BottonTab';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreenLogo"
        component={SplashScreenLogo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SplashScreenLogin"
        component={SplashScreenLogin}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="CheckEmailScreen"
        component={CheckEmailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreatePasswrod"
        component={CreatePasswrod}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
