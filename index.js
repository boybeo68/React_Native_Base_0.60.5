/**
 * @format
 */
if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import {createAppContainer} from 'react-navigation';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import React from 'react';
import {name as appName} from './app.json';
import Root from './src/navigations/app_navigation';

const AppContainer = createAppContainer(Root);
const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
AppRegistry.registerComponent(appName, () => App);
