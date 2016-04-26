import { handleActions } from 'redux-actions';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

export default handleActions({
  [INCREMENT_COUNTER]: state => state + 1,
  [DECREMENT_COUNTER]: state => state - 1,
}, 0);
