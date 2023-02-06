import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export type DATA = {
  birth_year: string;
  name: string;
  height: string;
  gender: string;
  homeworld: string;
};

export const getStarWarApi = async () => {
  const endPoint = 'https://swapi.dev/api/people';
  try {
    const response = await fetch(endPoint, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
    });
    const json = await response.json();
    console.log('json', json.results);
    return json.results;
  } catch (error) {
    console.log('error', error);
  }
};

export type BodyParams = {
  email: string;
  password: string;
};

export const postLogin = async (body: BodyParams | undefined) => {
  console.log('body', body);
  try {
    const BaseURL = 'https://reqres.in/api/login';
    const response = await fetch(BaseURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const json = await response.json();
    console.log('json', json);
    return json;
  } catch (error) {
    console.log(error);
  }
};
