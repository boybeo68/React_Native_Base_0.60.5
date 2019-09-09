import {GET_LIST_HERO_SUCCESS} from '../actions/action_type';

const list_hero_reducer = (data = null, action) => {
  if (action.type === GET_LIST_HERO_SUCCESS) {
    return action.data;
  }
  return data;
};
export default list_hero_reducer;
