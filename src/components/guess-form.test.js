import React from 'react';
import { shallow, mount } from 'enzyme';
import { GuessForm } from './guess-form';
import { makeGuess } from '../actions';

describe('<GuessForm />', () => {

  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('Dispatches a makeGuess action', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    const textInput = wrapper.find('#userGuess').instance();
    const guess = "5";
    textInput.value = guess;
    wrapper.simulate('submit');
    expect(dispatch).toHaveBeenCalledWith(makeGuess(guess));
  });

  it('Should reset the text input after a guess is submitted', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    const textInput = wrapper.find('#userGuess').instance();
    const guess = "5";
    textInput.value = guess;
    wrapper.simulate('submit');
    expect(textInput.value).toEqual('');
  });

});