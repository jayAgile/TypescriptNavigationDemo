import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeStackNavigator from './src/navigations/HomeStack';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigations';

const App = () => {
  return (
    <>
      <RootNavigation />
      <StatusBar barStyle={'default'} />
    </>
  );
};

export default App;
