import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Details from '../components/Details';
import {
  AuthScreenNavigationProp,
  BottomTabNavigatorParamList,
  HomeStackNavigatorParamList,
  LoginStackNavigatorParamList,
} from './types';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import BottomTabNavigator from './BottomTab';

type Props = {};

const LoginStack = createNativeStackNavigator<LoginStackNavigatorParamList>();
const LoginStackNavigator = () => {
  return (
    <LoginStack.Navigator initialRouteName="Login">
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="Register" component={Register} />
      <LoginStack.Screen name="BottomView" component={BottomTabNavigator} />
    </LoginStack.Navigator>
  );
};

export default LoginStackNavigator;
