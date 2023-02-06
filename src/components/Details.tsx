import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {DetailScreenRouteProp} from '../navigations/types';

const Details = () => {
  const route = useRoute<DetailScreenRouteProp>();
  const {name, birthYear} = route.params;
  return (
    <View>
      <Text>{name}</Text>
      <Text>{birthYear}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
