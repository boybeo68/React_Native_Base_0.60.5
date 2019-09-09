import {ERROR} from '../actions/action_type';

const error_reducer = (isError = null, action) => {
  if (action.type === ERROR) {
    return action.error;
  } return isError;
};
export default error_reducer;
