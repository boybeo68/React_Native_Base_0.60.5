import {put, takeLatest} from 'redux-saga/effects';
import BaseAPI from '../../config/config';
import {ERROR, LOADDING, GET_LIST_HERO, GET_LIST_HERO_SUCCESS} from '../actions/action_type';

const urlHero = 'hero';

function* Get_list_hero() {
  try {
    yield put({type: LOADDING, load: true});
    const data = yield BaseAPI.get(urlHero).then(res => {
      return res.data;
    });
    yield put({type: GET_LIST_HERO_SUCCESS, data});
    yield put({type: LOADDING, load: false});
  } catch (e) {
    yield put({type: ERROR, error: e});
  }
}

export default function* get_list_hero() {
  yield takeLatest(GET_LIST_HERO, Get_list_hero);
}
