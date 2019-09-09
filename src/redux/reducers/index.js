import {combineReducers} from 'redux';
import list_hero_reducer from './list_hero_reducer';
import loading_reducer from './loading_reducer';
import error_reducer from './error_reducer';

const reducers = combineReducers({
  list_hero_reducer,
  loading_reducer,
  error_reducer,
});
export default reducers;
