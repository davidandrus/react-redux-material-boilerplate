import test from 'ava';
import counter from './counter';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/actionTypes';

test('should provide the initial state', t => {
  t.is(counter(undefined, {}), 0);
});

test('should handle INCREMENT action', t => {
  t.is(counter(1, { type: INCREMENT_COUNTER }), 2);
});

test('should handle DECREMENT action', t => {
  t.is(counter(1, { type: DECREMENT_COUNTER }), 0);
});

test('should ignore unknown actions', t => {
  t.is(counter(1, { type: 'unknown' }), 1);
});
