import {fork} from 'redux-saga/effects';
import get_list_hero from './get_list_hero_saga';

export default function* rootSaga() {
  yield fork(get_list_hero);

}
