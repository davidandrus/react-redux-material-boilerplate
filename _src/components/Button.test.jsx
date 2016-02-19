import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import Button from './Button';

test('should set disabled when prop is disabled', assert => {
  const subject = shallow(<Button disabled="true">Check it</Button>);
  assert.ok(subject.props().disabled);
  assert.end();
});
