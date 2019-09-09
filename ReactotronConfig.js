import Reactotron, {networking} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

console.disableYellowBox = true;
// First, set some configuration settings on how to connect to the app
const reactotron = Reactotron
  .configure({
    name: 'Btalk',
    host: '192.168.26.41',
    port: 9090,
  })
  .use(sagaPlugin())
  .useReactNative({
    asyncStorage: {ignore: ['secret']},
  })
  .use(reactotronRedux())
  .use(networking({
    ignoreContentTypes: /^(image)\/.*$/i,
    ignoreUrls: /\/(logs|symbolicate)$/,
  }))
  .connect();
export default reactotron;
console.tron = Reactotron;
