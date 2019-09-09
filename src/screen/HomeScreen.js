import React from 'react';
import {Button, View, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {getListHero} from '../redux/actions/action_creator';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  render() {
    return (
      <View>
        <Button title="Show me more of the app" onPress={this._showMoreApp}/>
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync}/>
        <TouchableOpacity style={{
          width: wp('100%'),
          height: hp('10%'),
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }} onPress={this._loadData}>
          <Text>
            Load data
          </Text>
        </TouchableOpacity>
        {!this.props.loading_reducer ? (<View>
          {this.props.list_hero_reducer !== null && (<Text>{this.props.list_hero_reducer[0].name}</Text>)}
        </View>) : (<ActivityIndicator color={'red'}/>)}
      </View>
    );
  }

  _loadData = () => {
    this.props.getListHero();
  };
  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

function mapStateToProp(state) {
  return {
    loading_reducer: state.loading_reducer,
    list_hero_reducer: state.list_hero_reducer,
  };
}

export default connect(mapStateToProp, {getListHero})(HomeScreen);
