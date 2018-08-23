import React from 'react';
import { shallow } from 'enzyme';
import { AuralStatus } from './aural-status';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus auralStatus='test' />);
  });

  it('Renders an aural update', () => {
    const status = 'test';
    const wrapper = shallow(<AuralStatus auralStatus={status} />);
    expect(wrapper.contains(status)).toEqual(true);
  });
})