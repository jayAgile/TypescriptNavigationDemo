import {
  StyleSheet,
  View,
  Text,
  Pressable,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  HomeScreenNavigationProp,
  HomeStackNavigationProp,
} from '../../navigations/types';
import {DATA, getStarWarApi, BodyParams, postLogin} from '../../utils/api';

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [loading, setLoading] = useState<boolean>(true);
  // Array declarations
  const [data, setData] = useState<DATA[]>([]);
  const [body, setBody] = useState<BodyParams>();
  useEffect(() => {
    getData();
    // setBody({email: 'eve.holt@reqres.in', password: 'cityslicka'});
    // innerFunction();
  }, []);

  // useEffect(() => {
  //   postData();
  // }, [body]);

  const getData = async () => {
    try {
      const data = await getStarWarApi();
      setData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const postData = async () => {
    console.log('postLogin', postLogin);
    const res = await postLogin(body);
    console.log('error', res);
  };
  const renderListItem = () => {
    return data.map((item, index) => {
      // console.log('item======>', item);
      const detailItem = {
        name: item.name,
        birthYear: item.birth_year,
      };
      return (
        <Pressable
          key={index}
          style={{
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: '#ccc',
            padding: 10,
          }}
          onPress={() => navigation.navigate('Details', detailItem)}>
          <Text style={styles.name}>{item.name}</Text>
        </Pressable>
      );
    });
  };

  return (
    <View style={{flex: 1, paddingTop: 20, paddingBottom: 20}}>
      <Pressable
        onPress={() => navigation.navigate('Feeds')}
        style={{
          padding: 8,
          borderWidth: 1,
          borderRadius: 4,
          borderColor: 'red',
          margin: 12,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16, fontWeight: '600'}}>Go to Feed screen</Text>
      </Pressable>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList style={{flex: 1}} data={data} renderItem={renderListItem} />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  name: {
    paddingTop: 18,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
