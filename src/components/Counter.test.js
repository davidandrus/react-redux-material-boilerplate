import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Counter from 'components/Counter';

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

test('it should should show count', t => {
  const subject = getCounter({ counter: 2 });
  t.is(subject.find('span').text(), '2');
});
