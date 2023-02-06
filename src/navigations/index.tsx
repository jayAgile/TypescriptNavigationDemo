import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeStackNavigator from '../navigations/HomeStack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './BottomTab';
import LoginStackNavigator from './LoginStack';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      {/* <HomeStackNavigator /> */}
      {/* <BottomTabNavigator /> */}
      <LoginStackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
