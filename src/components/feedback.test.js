import React from 'react';
import { shallow } from 'enzyme';
import { Feedback } from './feedback';

describe('<Feedback />', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback guessCount="4" feedback="test" />);
  });

  it('Renders the correct feedback', () => {
    const guessCount = 4;
    const feedback = 'test';
    const wrapper = shallow(<Feedback guessCount={guessCount} feedback={feedback} />);
    expect(wrapper.contains(feedback));
    expect(wrapper.contains(guessCount));
    expect(wrapper.text()).toEqual(`${feedback} Guess again!`);
  });
});