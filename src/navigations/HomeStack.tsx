import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Details from '../components/Details';
import {HomeStackNavigatorParamList} from './types';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';

type Props = {};

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
