import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import Counter from './Counter';
//
// test('should set disabled when prop is disabled', assert => {
//   const subject = shallow(<Button disabled="true">Check it</Button>);
//   assert.ok(subject.props().disabled);
//   assert.end();
// });


function getCounter(props = {}) {
  const NOOP = Function.prototype;
  const PROPS = {
    increment: NOOP,
    incrementIfOdd: NOOP,
    decrement: NOOP,
    counter: 0,
    ...props
  };

  return shallow(<Counter {...PROPS} />);
}

test("it should should show count", assert => {
  const subject = getCounter({counter : 2});
  //assert.equal(subject.)
  assert.equal(subject.find('span').text(), '2');
  assert.end();
})
