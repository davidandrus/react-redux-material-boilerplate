import { ADD_THING } from '../actions/thingsAction';

export default function (state = {items : []}, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_THING:
      return {items : [...state.items, payload]};
    default:
      return state;
  }
}
