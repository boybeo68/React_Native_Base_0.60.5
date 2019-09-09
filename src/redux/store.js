import {applyMiddleware, createStore} from 'redux';

import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';
import reactotron from '../../ReactotronConfig';
import Reactotron from 'reactotron-react-native';

const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({sagaMonitor} );
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
