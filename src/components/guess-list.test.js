import React from 'react';
import { shallow } from 'enzyme';
import { GuessList } from './guess-list';

describe('<GuessList />', () => {

  it('Renders without crashing', () => {
    const guesses = [12, 14, 55];
    shallow(<GuessList guesses={guesses} />);
  });

  it('Renders a list of guesses', () => {
    const guesses = [12, 14, 55];
    const wrapper = shallow(<GuessList guesses={guesses} />);
    guesses.forEach((guess, index) => {
      expect(wrapper.contains(<li key={index}>{guess}</li>)).toEqual(true);
    });
  })
});