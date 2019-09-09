import {LOADDING} from '../actions/action_type';

const loading_reducer = (loading = false, action) => {
  if (action.type === LOADDING) {
    return action.load;
  } return loading;
};
export default loading_reducer;
