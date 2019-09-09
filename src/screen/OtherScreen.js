import React, { Component } from 'react';

import {View, StyleSheet, Button, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import styles from './styles';
// import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class  extends Component {
  static navigationOptions = {
    title: 'Lots of features here',
  };
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
  render() {
    return (
      <View style={styles.container}>
        <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
