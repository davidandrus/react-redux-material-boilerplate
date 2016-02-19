import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import Counter from './Counter';

function getCounter(props = {}) {
  const NOOP = Function.prototype;
  const PROPS = {
    increment: NOOP,
    incrementIfOdd: NOOP,
    decrement: NOOP,
    counter: 0,
    ...props,
  };

  return shallow(<Counter {...PROPS} />);
}

test('it should should show count', assert => {
  const subject = getCounter({ counter: 2 });
  assert.equal(subject.find('span').text(), '2');
  assert.end();
});
