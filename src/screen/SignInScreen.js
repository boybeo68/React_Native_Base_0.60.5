import React, {Component} from 'react';

import {Button, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import styles from './styles';
import { StyleSheet } from 'react-native';
// import { colors, fonts, metrics } from 'styles';


export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

