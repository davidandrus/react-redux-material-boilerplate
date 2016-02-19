import test from 'tape';
import todoAction, { ADD_THING } from './thingsAction';

test('should have the return an object of the correct shape', assert => {
  const subject = todoAction();
  assert.deepEqual(subject, {
    type: ADD_THING,
    payload: {},
  });
  assert.end();
});
