import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BodyParams, postLogin} from '../../utils/api';
import {useNavigation} from '@react-navigation/native';
import {
  HomeStackNavigation,
  HomeStackNavigationProp,
  LoginStackNavigatorParamList,
  AuthScreenNavigationProp,
} from '../../navigations/types';

const Login = () => {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [body, setBody] = useState<BodyParams>();
  const [token, setToken] = useState<string>();
  const navigation = useNavigation<AuthScreenNavigationProp>();
  useEffect(() => {
    postData();
  }, [body]);

  useEffect(() => {
    navigation.navigate('BottomView');
  }, [token !== undefined]);

  const postData = async () => {
    console.log('postLogin', postLogin);
    const res = await postLogin(body);
    setToken(res?.token);
  };
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 30}}>Welcome To Login</Text>
      <View
        style={{
          marginHorizontal: 10,
          justifyContent: 'space-evenly',
          flex: 0.2,
        }}>
        <TextInput
          style={styles.inlineStyle}
          placeholder={'Enter Your Email'}
          autoCapitalize="none"
          onChangeText={value => {
            setEmail(value);
          }}
        />
        <TextInput
          style={styles.inlineStyle}
          autoCapitalize="none"
          secureTextEntry={true}
          placeholder={'Enter Your Password'}
          onChangeText={value => {
            setPassword(value);
          }}
        />
      </View>
      <Button
        title="Login"
        onPress={() => {
          // console.log('email,password', email, password);
          setBody({email: email, password: password});
          // navigation.navigate('BottomView');
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  inlineStyle: {
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    // flex: 1,
  },
});
