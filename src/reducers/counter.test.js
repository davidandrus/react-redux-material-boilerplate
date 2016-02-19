import test from 'tape';
import counter from './counter';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/actionTypes';

test('should provide the initial state', assert => {
  assert.equal(counter(undefined, {}), 0);
  assert.end();
});

test('should handle INCREMENT action', assert => {
  assert.equal(counter(1, { type: INCREMENT_COUNTER }), 2);
  assert.end();
});

test('should handle DECREMENT action', assert => {
  assert.equal(counter(1, { type: DECREMENT_COUNTER }), 0);
  assert.end();
});

test('should ignore unknown actions', assert => {
  assert.equal(counter(1, { type: 'unknown' }), 1);
  assert.end();
});
